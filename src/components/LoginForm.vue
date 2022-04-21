<template>
  <div class="container">
    <v-card class="d-flex justify-center" dark rounded="xl">
      <v-card width="600" height="300" :elevation="24" class="ma-3">
        <div v-if="!signedIn">
          <form @submit="form_submit" class="mx-auto">
            <input
              type="email"
              name="email"
              placeholder="Email (Login)"
              class="form-control"
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              class="form-control mt-3"
            />
            <button class="btn btn-primary mt-3">ส่งข้อมูล</button>
          </form>
        </div>
        <div v-else>
          <SignedIn />
        </div>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import SignedIn from "@/components/SignedIn.vue";
export default {
  components: {
    SignedIn,
  },
  props: {},
  methods: {
    form_submit(event) {
      //เมื่อส่งข้อมูลจากฟอร์มออกไป
      event.preventDefault();
      const fd = new FormData(event.target);
      const fe = Object.fromEntries(fd.entries());
      fetch("http://localhost:3000/play/api/session/set", {
        method: "POST",
        body: JSON.stringify(fe),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.signedIn) {
            this.signedIn = result.signedIn;
          } else {
            alert("Email หรือ Password ไม่ถูกต้อง");
          }
        })
        .catch((err) => alert(err));
    },
    mounted() {
      fetch("http://localhost:3000/play/api/session/get")
        .then((response) => response.json())
        .then((result) => (this.signedIn = result.signedIn))
        .catch((err) => alert(err));
    },
    props: ["text"],
    data() {
      return { checkbox1: true, checkbox2: false, signedIn: false };
    },
  },
};
</script>

<style></style>
