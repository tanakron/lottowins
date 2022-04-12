<script>
export default {
  name: "users",
  data() {
    return {};
  },
  components: {
    mainuse: require("@/views/dashbord/mainuse.vue"),
  },
};
</script>
<style>
#users {
  font-family: "Kanit", sans-serif;
  background: #000000c5;
  background: -webkit-linear-gradient(to right, #202020, #691a22, #3d0410);
  background: linear-gradient(to right, #141010, #05e04e, #000000);
}
</style>
<template>
  <v-app id="users">
    <h3>users</h3>
    <mainuse class="mt-3" v-if="$store.state.isLogged" />
    <router-link></router-link>
  </v-app>
</template>
