<template>
  <v-card dark>
    <form @submit.prevent="pressed">
      {{ error.messge }}
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            Email
            <input v-model="email" label="E-mail" required />
          </v-col>
          <v-col cols="12" md="4">
            Password
            <input v-model="password" label="password" required />
          </v-col>
        </v-row>
      </v-container>
    </form>
  </v-card>
</template>

<script>
import firebase from "@/includes/firebase.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      valid: false,
      firstname: "",
      lastname: "",
      // nameRules: [
      //   (v) => !!v || "Name is required",
      //   (v) => v.length <= 10 || "Name must be less than 10 characters",
      // ],
      // email: "",
      // emailRules: [
      //   (v) => !!v || "E-mail is required",
      //   (v) => /.+@.+/.test(v) || "E-mail must be valid",
      // ],
    };
  },
  methods: {
    pressed() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
      } catch (err) {}

      alert("submitted");
    },

    async register() {
      try {
        const userCred = await firebase
          .auth()
          .createUserWithEmailAndPassword(values.email, values.password);
      } catch (error) {
        this.reg;
        return;
      }
    },
  },
};
</script>

<style></style>
