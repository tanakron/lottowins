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
      <div class="col-md-12">
        <v-card dark class="pa-3">
          <marquee
            scrollamount="2"
            scrolldelay="70"
            class="in-marquee d-none d-md-block"
            ><span> ระบบเว็บที่กล้าจ่ายมากที่สุด </span></marquee
          >
        </v-card>
      </div>

      <router-link to="/login"> login </router-link> |
      <router-link to="/register"> register </router-link>|
      <router-link to="/secret"> secret </router-link>|
      <!-- <register /> -->
      <!-- <Login> <div class="card"></div></Login> -->
      <!-- <tablottothai />
      <tablottobank />
      <stocklottery />
      <stockthailottery /> -->

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
// import TopHeader from "@/components/top-header";
// import Login from "@/components/RegisterForm.vue";
// import register from "@/components/RegisterForm.vue";
// import Login from "@/components/LoginForm.vue";
export default {
  // comments: { "top-header": TopHeader },
  data() {
    return {
      text: "",
      to: "https://lin.ee/Iy5mkD6",
    };
  },

  components: {
    // Login,
    // register,
    // register: require("@/components/RegisterForm.vue").default,
    // tablottothai: require("@/views/pages/tablottothai.vue").default,
    // tablottobank: require("@/views/pages/tablottobank.vue").default,
    // stocklottery: require("@/views/pages/tabstocklottery.vue").default,
    // stockthailottery: require("@/views/pages/tabstockthailottery.vue").default,
  },
};
</script>

<style></style>
