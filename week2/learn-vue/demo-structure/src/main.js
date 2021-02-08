import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Notifications from "vue-notification";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuelidate from "vuelidate";
import vuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";

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
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
