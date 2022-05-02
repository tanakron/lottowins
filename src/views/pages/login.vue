<template>
  <div>
    <v-row>
      <v-card dark class="ma-10 pa-3">
        <v-row>
          <div class="col-md-3"></div>
          <div class="col-md-6 d-lg-inline justify-center wrap">
            <form @submit.prevent="onSubmit()">
              email
              <v-text-field
                v-model="register.email"
                label="email"
                name="email"
                type="email"
                required
              ></v-text-field>

              password
              <v-text-field
                v-model="register.password"
                label="password"
                name="password"
                type="password"
                required
              ></v-text-field>

              <button type="submit">เข้าสู่ระบบ</button>
            </form>
          </div>
          <div class="col-md-6"></div>
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

// import firebase from "firebase";
// require("firebase/auth");
export default {
  data() {
    return {
      register: {
        email: "",
        password: "",
        id: Math.ceil(Math.random() * 10000),
      },
    };
  },
  methods: {
    async onSubmit() {
      if (this.register) {
        await axios.post("http://localhost:3000/userlog/login", this.register);

        this.register.email = "";
        this.register.password = "";
      }
    },
  },
};
</script>

<style></style>
