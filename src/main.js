import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import Vuetify from "vuetify/lib";
import "material-design-icons-iconfont/dist/material-design-icons.css";
Vue.config.productionTip = false;

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
  render: (h) => h(App),
}).$mount("#app");
