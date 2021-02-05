import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase'
import router from "../router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meetUpsData: [],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setMeetups (state, payload) {
      state.meetUpsData = payload;
    },
    createMeetup: (state,payload) => {
      state.meetUpsData.push(payload);
      router.push("/meet-up/meet-up-list");
    },
    setUser (state, payload) {
      state.user = payload,
      payload && localStorage.setItem('meetUpKey',JSON.stringify({
        email: payload.email,
        isAuthenticated:true
      }));
      router.push("/");
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    loadMeetUps ({ commit}) {
      firebase.database().ref('meetups').once('value').then(item => {
        const data = [];
        const obj = item.val();
        for (const key in obj) {
          data.push({
            id: key,
            title: obj[key].title,
            description: obj[key].description,
            imageUrl: obj[key].imageUrl,
            date: obj[key].date
          })
        }
        commit('setMeetups', data)
      })
    },
    createMeetup ({commit, getters}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date,
        creatorId: getters.user.id
      }
      let key = '';
      firebase.database().ref('meetups').push(meetup)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('meetups/' + key + ext).put(payload.image)
        })
        .then((fileData) => {
          return fileData.ref.getDownloadURL()
        })
        .then(res => {firebase.database().ref('meetups').child(key).update({imageUrl: res})
        commit('createMeetup', {
          ...meetup,
          imageUrl: res,
          id: key
        })
        Vue.notify({
          group: 'notification',
          title: 'Notification',
          type: 'success',
          text: 'Create meetup success'
        })
      })
        .catch((err) => {
          Vue.notify({
            group: 'notification',
            title: 'Notification',
            type: 'error',
            text: err.message
          })
        })
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              
            }
            commit('setUser', newUser)
            Vue.notify({
              group: 'notification',
              title: 'Notification',
              type: 'success',
              text: 'Sign up complete'
            })
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            Vue.notify({
              group: 'notification',
              title: 'Notification',
              type: 'error',
              text: error.message
            })
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.user.uid,
            }
            commit('setUser', newUser)
            Vue.notify({
              group: 'notification',
              title: 'Notification',
              type: 'success',
              text: 'Sign in success'
            })
          }
          
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            Vue.notify({
              group: 'notification',
              title: 'Notification',
              type: 'error',
              text: error.message
            })
          }
        )
    },
    logout ({commit}) {
      firebase.auth().signOut()
      localStorage.removeItem('meetUpKey')
      commit('setUser', null)
    },
  },
  getters: {
    getAllMeetUpData: (state) => {
      return state.meetUpsData;
    },
    getDetailMeetUp: (state) => (id) => {
      return state.meetUpsData.find(item => item.id === id)
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  },
  modules: {}
});
