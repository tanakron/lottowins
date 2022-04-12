<template>
  <div>
    <h3>test</h3>
    <mainuse class="mt-3" v-if="$store.state.isLogged" />
    <router-link></router-link>
  </div>
</template>

<script>
export default {
  components: {
    mainuse: require("@/views/dashbord/mainuse.vue").default,
  },
};
</script>

<style></style>
