import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import Vuetify from "vuetify/lib";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import store from "./store";
import "./includes/firebase";
import Header from "./components/headers.vue";
import firebase from "firebase/app";
import "firebase/auth";
import axios from "axios";

Vue.component("app-header", Header);

var VueCookie = require("vue-cookie");
Vue.use(VueCookie);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(VueCookie);
const firebaseConfig = {
  apiKey: "AIzaSyAS1rgerKhQwR8PP68UGX46E1fzqpSNGTY",
  authDomain: "lottowins-51744.firebaseapp.com",
  projectId: "lottowins-51744",
  storageBucket: "lottowins-51744.appspot.com",
  appId: "1:927017978562:web:5e719d57e16395a3b6495b",
};
firebase.initializeApp(firebaseConfig);
export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#e20074",
        secondary: "#6c757d",
        accent: "#3ea2fb",
        error: "#dc3545",
        petrol: "#17a499",
        background: "#000",
      },
    },
    dark: true,
    options: {
      customProperties: true,
    },
  },
});

new Vue({
  iconfont: "md",
  vuetify,
  router,
  store,
  VueCookie,
  render: (h) => h(App),
}).$mount("#app");
