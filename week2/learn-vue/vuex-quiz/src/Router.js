import Vue from 'vue';
import MainApp from './main_app.vue';
import VueRouter from 'vue-router';
import scoreBoard from './components/scoreBoard.vue';
Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'App', component: MainApp },
  { path: '/scoreboard', name: 'Scoreboard', component: scoreBoard }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

export default router;
