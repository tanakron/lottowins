<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app dark class="d-flex justify-center">
      <img src="@/assets/logo2.png" width="100%" />
    </v-app-bar>
    <v-card class="d-flex justify-center" dark>
      <img src="https://เศษรฐี.com/banner-vip-group.gif" width="80%" />
    </v-card>

    <v-main>
      <Login> <div class="card"></div></Login>
      <tablottothai />
      <tablottobank />
      <stocklottery />
      <stockthailottery />
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Login from "@/components/LoginForm.vue";
export default {
  data() {
    return {
      text: "",
      to: "https://lin.ee/Iy5mkD6",
    };
  },

  components: {
    Login,
    tablottothai: require("@/views/pages/tablottothai.vue").default,
    tablottobank: require("@/views/pages/tablottobank.vue").default,
    stocklottery: require("@/views/pages/tabstocklottery.vue").default,
    stockthailottery: require("@/views/pages/tabstockthailottery.vue").default,
  },
};
</script>

<style></style>
