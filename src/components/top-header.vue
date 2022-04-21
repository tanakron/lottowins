<template>
  <div>
    <span v-if="loggIn"> yes</span>
    <span v-else>NO</span>
    <div>
      <button @click="singOut">singOut</button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
    });
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    async singOut() {
      try {
        const data = await firebase.auth().singOut();
        console.log(data);
        this.$router.replace({ name: "login " });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
