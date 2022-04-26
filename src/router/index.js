import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/pages/main.vue";
// import Modal from "../components/Modal.vue";
import Login from "../views/pages/login.vue";
import Secret from "../views/pages/secret.vue";
import Register from "../views/pages/register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/register",
    name: "regiser",
    component: Register,
  },

  {
    path: "/secret",
    name: "secret",
    component: Secret,
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

  //หวย แบงค์  ออมสิน
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
  //หวย แบงค์  ธกส
  {
    path: "/playlottomainbank_tks",
    name: "playlottomaintodebanktks",
    component: () => import("@/views/dashbordstockmaray/playlottomain.vue"),
  },

  {
    path: "/playlottomainbank_tks2",
    name: "playlottomaintodebanktks2",
    component: () => import("@/views/dashbordstockmaray/playlottomain2.vue"),
  },

  {
    path: "/playlottomainbank_tks1",
    name: "playlottomaintodebanktks1",
    component: () => import("@/views/dashbordstockmaray/playlottomain1.vue"),
  },

  ///DOWN
  {
    path: "/playlottomaindownbank_tks",
    name: "playlottomaindownbank_tks",
    component: () => import("@/views/dashbordstockmaray/playlottomaindown.vue"),
  },

  {
    path: "/playlottomainbank_tks2down",
    name: "playlottomainbank_tks2down",
    component: () =>
      import("@/views/dashbordstockmaray/playlottomain2down.vue"),
  },

  {
    path: "/playlottomainbank_tks1down",
    name: "playlottomainbank_tks1down",
    component: () =>
      import("@/views/dashbordstockmaray/playlottomain1down.vue"),
  },
  ///Tode
  {
    path: "/playlottomainbank_tkstode",
    name: "playlottomainbank_tkstode",
    component: () => import("@/views/dashbordbank_tks/playlottomaintode.vue"),
  },

  //หวย หุ้นมาเลย์
  {
    path: "/playlottomainstock_maray",
    name: "playlottomainmaray",
    component: () => import("@/views/dashbordstockmaray/playlottomain.vue"),
  },

  {
    path: "/playlottomainstock_maray2",
    name: "playlottomaintodemaray2",
    component: () => import("@/views/dashbordstockmaray/playlottomain2.vue"),
  },

  {
    path: "/playlottomainstock_maray1",
    name: "playlottomaintodemaray1",
    component: () => import("@/views/dashbordstockmaray/playlottomain1.vue"),
  },

  ///DOWN
  {
    path: "/playlottomaindownstock_maraydown",
    name: "playlottomaindownstock_maraydown",
    component: () => import("@/views/dashbordstockmaray/playlottomaindown.vue"),
  },

  {
    path: "/playlottomainstock_maraydown2",
    name: "playlottomainstock_maraydown2",
    component: () =>
      import("@/views/dashbordstockmaray/playlottomain2down.vue"),
  },

  {
    path: "/playlottomainstock_maraydown1",
    name: "playlottomainstock_maraydown1",
    component: () =>
      import("@/views/dashbordstockmaray/playlottomain1down.vue"),
  },
  ///Tode
  {
    path: "/playlottomainstock_maraytode",
    name: "playlottomainstock_maraytode",
    component: () => import("@/views/dashbordstockmaray/playlottomaintode.vue"),
  },

  //หวย หุ้นดาวน์โจน์
  {
    path: "/playlottomainstock_dowjoe",
    name: "playlottomaindowjoe",
    component: () => import("@/views/dashbordstockdowjoe/playlottomain.vue"),
  },

  {
    path: "/playlottomainstock_dowjoe2",
    name: "playlottomaintodedowjoe2",
    component: () => import("@/views/dashbordstockdowjoe/playlottomain2.vue"),
  },

  {
    path: "/playlottomainstock_dowjoe1",
    name: "playlottomaintodedowjoe1",
    component: () => import("@/views/dashbordstockdowjoe/playlottomain1.vue"),
  },

  ///DOWN
  {
    path: "/playlottomaindownstock_dowjoedown",
    name: "playlottomaindownstock_dowjoedown",
    component: () =>
      import("@/views/dashbordstockdowjoe/playlottomaindown.vue"),
  },

  {
    path: "/playlottomainstock_dowjoedown2",
    name: "playlottomainstock_dowjoedown2",
    component: () =>
      import("@/views/dashbordstockdowjoe/playlottomain2down.vue"),
  },

  {
    path: "/playlottomainstock_dowjoedown1",
    name: "playlottomainstock_dowjoedown1",
    component: () =>
      import("@/views/dashbordstockdowjoe/playlottomain1down.vue"),
  },
  ///Tode
  {
    path: "/playlottomainstock_dowjoetode",
    name: "playlottomainstock_dowjoetode",
    component: () =>
      import("@/views/dashbordstockdowjoe/playlottomaintode.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
