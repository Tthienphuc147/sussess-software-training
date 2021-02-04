import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/dates'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify, {
  theme: {
    primary: '#D32F2F',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCBnP42Rlr0H7GDXFE0OvHCQ50RiOtMjp8',
      authDomain: 'vue-meetup-69783.firebaseapp.com',
      projectId: 'vue-meetup-69783',
      storageBucket: 'vue-meetup-69783.appspot.com',
      messagingSenderId: '321488154760',
      appId: '1:321488154760:web:69fc22c1aafa5acf7a6f3d'
    })
  }
})
