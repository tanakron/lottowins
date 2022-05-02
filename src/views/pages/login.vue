<template>
  <div>
    <v-row>
      <v-card dark class="ma-10 pa-3">
        <v-row>
          <div class="col-md-3"></div>
          <div class="col-md-6 d-lg-inline justify-center wrap">
            <form @submit.prevent="onSubmit()">
              phone
              <v-text-field
                v-model="register.phone"
                label="phone"
                name="phone"
                type="text"
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

          <p v-for="item in emp" :key="item.index">{{ item }}</p>
        </v-row>
      </v-card>
      <v-card> </v-card>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import Localbase from "localbase";
let db = new Localbase("db");

// import firebase from "firebase";
// require("firebase/auth");
export default {
  data() {
    return {
      abc: [],
      getplay: [],
      emp: [],
      iduser: [],
      register: {
        phone: "",
        password: [],
        id: "101",
        phone: "",
        // id: Math.ceil(Math.random() * 10000),
      },
    };
  },
  async mounted() {
    await db
      .collection("iduser")
      .get()
      .then((data) => (this.getplay = data));
  },
  methods: {
    async onSubmit() {
      // this.$cookie.set("id", this.register.phone, 1);
      // this.$router.push({ name: "Mainuse" });
      // db.collection("iduser").add(this.register).this();
      // this.$router.push({ name: "Mainuse" });

      this.$cookie.set("id", this.register.phone, 1);

      this.$router.push({ name: "Mainuse" });
      this.register.phone = "";
      this.register.password = "";
    },
  },
};
</script>

<style></style>
