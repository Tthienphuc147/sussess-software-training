import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import MeetUpList from "@/components/meet-up/MeetUpList";
import MeetUpDetail from "@/components/meet-up/MeetUpDetail";
import MeetUpCreate from "@/components/meet-up/MeetUpCreate";
import SignIn from "@/components/account/SignIn";
import SignUp from "@/components/account/SignUp";
import GuardService from "./guard-service";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/meet-up/meet-up-list",
    name: "MeetUpList",
    component: MeetUpList,
    beforeEnter: GuardService,
  },
  {
    path: "/meet-up/meet-up-detail/:id",
    name: "MeetUpDetail",
    component: MeetUpDetail,
    props: true,
    beforeEnter: GuardService,
  },
  {
    path: "/meet-up/meet-up-create",
    name: "MeetUpCreate",
    component: MeetUpCreate,
    beforeEnter: GuardService,
  },
  {
    path: "/account/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/account/sign-up",
    name: "SignUp",
    component: SignUp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
