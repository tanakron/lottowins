import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/pages/main.vue";
// import Modal from "../components/Modal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/mainuse",
    name: "Mainuse",
    component: () => import("@/views/dashbord/mainuse.vue"),
  },
  // {
  //   path: "/main",
  //   name: "Main",

  //   component: () => import("@/views/pages/main.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
