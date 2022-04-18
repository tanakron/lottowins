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
    path: "/playlotto",
    name: "Playlotto",
    component: () => import("@/views/dashbord/playlotto.vue"),
  },
  {
    path: "/playlottostock",
    name: "Playlottostock",
    component: () => import("@/views/dashbord/playlottostock.vue"),
  },
  {
    path: "/playlottobank",
    name: "Playlottobank",
    component: () => import("@/views/dashbord/playlottobank.vue"),
  },
  {
    path: "/playlottomain2",
    name: "Playlottomain2",
    component: () => import("@/views/dashbord/playlottomain2.vue"),
  },
  {
    path: "/playlottomain1",
    name: "Playlottomain1",
    component: () => import("@/views/dashbord/playlottomain1.vue"),
  },
  {
    path: "/playlottomaintode",
    name: "Playlottomaintode",
    component: () => import("@/views/dashbord/playlottomaintode.vue"),
  },
  {
    path: "/playlottomain/",
    name: "Playlottomain",
    component: () => import("@/views/dashbord/playlottomain.vue"),
  },
  {
    path: "/playlottomaindown",
    name: "playlottomaindown",
    component: () => import("@/views/dashbord/playlottomaindown.vue"),
  },
  {
    path: "/playlottomain1down",
    name: "playlottomain1down",
    component: () => import("@/views/dashbord/playlottomain1down.vue"),
  },
  {
    path: "/playlottomain2down",
    name: "Playlottomain2down",
    component: () => import("@/views/dashbord/playlottomain2down.vue"),
  },
  {
    path: "/mainuse",
    name: "Mainuse",
    component: () => import("@/views/dashbord/mainuse.vue"),
  },
  {
    path: "/registerform",
    name: "Registerform",
    component: () => import("@/components/RegisterForm.vue"),
  },

  {
    path: "/ratlottothai",
    name: "Ratlottothai",
    component: () => import("@/views/pagepost/ratlottothai.vue"),
  },

  {
    path: "/bankcompany",
    name: "Bankcompany",
    component: () => import("@/views/dashbord/bankcompany.vue"),
  },
  {
    path: "/addbank",
    name: "Addbank",
    component: () => import("@/views/dashbord/addbank.vue"),
  },

  //หวย แบงค์
  {
    path: "/playlottomainbank",
    name: "playlottomainbank",
    component: () => import("@/views/dashbordbank/playlottomain.vue"),
  },
  {
    path: "/playlottomain2bank",
    name: "playlottomain2bank",
    component: () => import("@/views/dashbordbank/playlottomain2.vue"),
  },
  {
    path: "/playlottomain1bank",
    name: "playlottomain1bank",
    component: () => import("@/views/dashbordbank/playlottomain1.vue"),
  },

  {
    path: "/playlottomaindownbank",
    name: "playlottomaindownbank",
    component: () => import("@/views/dashbordbank/playlottomaindown.vue"),
  },
  {
    path: "/playlottomain1downbank",
    name: "playlottomain1downbank",
    component: () => import("@/views/dashbordbank/playlottomain1down.vue"),
  },
  {
    path: "/playlottomain2downbank",
    name: "playlottomain2downbank",
    component: () => import("@/views/dashbordbank/playlottomain2down.vue"),
  },
  {
    path: "/playlottomaintodebank",
    name: "playlottomaintodebank",
    component: () => import("@/views/dashbordbank/playlottomaintode.vue"),
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
