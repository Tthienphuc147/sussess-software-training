import Vue from "vue";
import App from "./app.vue";
import "./../node_modules/bulma/css/bulma.css";
import { store } from "./store/index.js";
import router from "./Router.js";
import moment from "vue-moment";

new Vue({
  store: store,
  moment,
  router,
  render: (h) => h(App),
}).$mount("#app");
