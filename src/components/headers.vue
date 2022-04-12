<template>
  <v-container>
    <div class="d-flex justify-content-between mb-3">
      <button type="button" class="btn btn-light px-5 text-primary">
        <img src="@/assets/imgs/click.gif" width="30" />
        สมัครสมาชิก
      </button>
      <button type="button" class="btn btn-light px-5 text-primary">
        <img src="@/assets/imgs/money-bag.gif" width="30" />
        เข้าสู่ระบบ
      </button>
    </div>
  </v-container>
</template>

<script>
export default {
  methods: {
    // submit() {
    //   this.$store.dispatch({
    //     type: "doLogin",
    //     username: this.account.username,
    //     password: this.account.password,
    //   });
    // },
  },
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>
