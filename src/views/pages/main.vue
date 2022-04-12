<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app dark>
      <app-header></app-header>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
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
export default {
  data() {
    return {};
  },
  components: {
    tablottothai: require("@/views/pages/tablottothai.vue").default,
    tablottobank: require("@/views/pages/tablottobank.vue").default,
    stocklottery: require("@/views/pages/tabstocklottery.vue").default,
    stockthailottery: require("@/views/pages/tabstockthailottery.vue").default,
  },
};
</script>

<style></style>
