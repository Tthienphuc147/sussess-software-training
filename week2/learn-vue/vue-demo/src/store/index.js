import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meetUpsData: [
      { 
        id: 'Test1',
        imgUrl: 'https://www.leaders-in-law.com/wp-content/uploads/2020/05/vietnam.jpg',
        title: 'Meetup in New York',
        date: '2017-07-17',
        description: 'a',
        location: 'a'
      }
    ]
  },
  mutations: {
    createMeetup: (state,payload) => {
      state.meetUpsData.push(payload);
    }
  },
  actions: {
    createMeetup: ({commit}, payload) => {
      const meetUp = {
        title: payload.title,
        location: payload.location,
        imgUrl: payload.imgUrl,
        description: payload.description,
        date: payload.date,
        id: payload.id
      }
      firebase.database().ref('meetups').push(meetUp).then((data) => {
        const key = data.key
        commit('createMeetup', {
          ...meetUp,
          id: key
        })
        .catch(err => {
          console.log(err);
        });
      })
    }
  },
  getters: {
    getAllMeetUpData: (state) => {
      return state.meetUpsData;
    },
    getDetailMeetUp: (state) => (id) => {
      return state.meetUpsData.find(item => item.id === id)
    }
  },
  modules: {}
});
