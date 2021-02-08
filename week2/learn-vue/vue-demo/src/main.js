import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Notifications from "vue-notification";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuelidate from "vuelidate";
import vuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
import firebase from "firebase/app";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuelidate);
Vue.use(Notifications);
Vue.use(vuelidateErrorExtractor, {
  template: templates.singleErrorExtractor.foundation6,
  messages:
  {
    required: "The field is required",
    email: "The invalid email",
    minLength: 'The field should be at least {min} characters'
  },
  attributes: {
    password: 'password'
  }
});
new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyCBnP42Rlr0H7GDXFE0OvHCQ50RiOtMjp8",
      authDomain: "vue-meetup-69783.firebaseapp.com",
      projectId: "vue-meetup-69783",
      storageBucket: "vue-meetup-69783.appspot.com",
      messagingSenderId: "321488154760",
      appId: "1:321488154760:web:69fc22c1aafa5acf7a6f3d",
    });
  },
}).$mount("#app");
