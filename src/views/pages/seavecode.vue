<template>
  <v-contianer>
    <app-header></app-header>
  </v-contianer>
</template>

<script>
// import moment from "moment";
export default {
  data() {
    return {
      value: 1,
      time: "",
      otp: "",
      length: 10,

      first: "",
      account: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    isActive() {
      return this.otp.length === this.length;
    },
  },

  components: {
    // headers: require("@/components/headers.vue").default,
    // tablottothai: require("@/views/pages/tablottothai.vue").default,
    // tablottobank: require("@/views/pages/tablottobank.vue").default,
    // stocklottery: require("@/views/pages/tabstocklottery.vue").default,
    // stockthailottery: require("@/views/pages/tabstockthailottery.vue").default,
    // tablottoyeeke: require("@/views/pages/tablottoyeeke.vue").default,
  },
  // mounted() {
  //   setInterval(() => {
  //     this.time = moment(Date()).format("h:mm:ss ");
  //   }, 1000);
  // },
};
</script>

<style></style>
