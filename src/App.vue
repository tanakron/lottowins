<script>
export default {
  data() {
    return {};
  },
  components: {
    mains: require("@/views/pages/main.vue").default,
  },
};
</script>
<style>
#app {
  font-family: "Kanit", sans-serif;
  background: #000000c5;
  background: -webkit-linear-gradient(to right, #202020, #691a22, #3d0410);
  background: linear-gradient(to right, #141010, #05e04e, #000000);
}
</style>
<template>
  <v-app>
    <mains class="mt-3" v-if="$store.state.isLogged" />
    <router-link></router-link>
  </v-app>
</template>
