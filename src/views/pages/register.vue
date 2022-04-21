<template>
  <div>
    <v-row>
      <v-card dark class="ma-10 pa-3">
        <v-row>
          <div class="col-md-3"></div>
          <div class="col-md-6 d-lg-inline justify-center wrap">
            <form @submit.prevent="onSubmit()">
              ชื่อ
              <v-text-field
                v-model="register.first_name"
                label=" ชื่อ"
                type="text"
                name="first_name"
                required
              ></v-text-field>

              นามสกุล
              <v-text-field
                v-model="register.last_name"
                label="นามสกุล"
                name="last_name"
                type="text"
                required
              ></v-text-field>

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

              <button type="submit">ลงทะเบีบน</button>
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
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        id: Math.ceil(Math.random() * 10000),
      },
    };
  },
  methods: {
    async onSubmit() {
      if (this.register) {
        await axios.post(
          "http://localhost:3000/userlog/register",
          this.register
        );
        this.register.first_name = "";
        this.register.last_name = "";
        this.register.email = "";
        this.register.password = "";
      }
    },
  },
};
</script>

<style></style>
