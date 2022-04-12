<template>
  <v-app>
    <!-- <v-app-bar app></v-app-bar> -->
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app dark>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Lottowins</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
// import layout from "./components/layout.vue";
// import Headers from "@/components/headers.vue";

export default {
  components: {},
  name: "app",
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
