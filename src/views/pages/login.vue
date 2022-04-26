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
                v-model="this.phone"
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
        <!-- <template>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in getplay" :key="item.index">
                  <td>{{ item.email }}</td>
                  <td>{{ item.id }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </template> -->
        <!-- <div v-for="newTask in value" :key="newTask"></div> -->
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
        email: "eamil",
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
      await axios.post("http://localhost:3000/userlog/test", this.getplay);

      // this.register.email = "";
      // this.register.password = "";
    },
  },
};
</script>

<style></style>
