<template>
  <div
    class="p-3"
    style="max-width: 400px; margin: 50px auto; background: #234"
  >
    <!-- แทง -->

    <div
      class="w-full rounded m-1 p-3 text-right lead font-weight-bold text-white bg-vue-dark"
    ></div>

    <v-chip class="ma-2">
      <link
        rel="stylesheet"
        href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
      />ระบุตัวเลข{{ bet3 }}
      <v-chip color="green darken-1">{{ this.addplay.typegame }}</v-chip>
    </v-chip>

    <v-form @submit.prevent="onSubmit()">
      <v-otp-input
        dark
        type="number"
        length="3"
        name="bet3up"
        height="30"
        width="30"
        class="ma-3 pa-2"
        v-model="addplay.bet3up"
        @click:append="this.addplay.bet3up"
        @keyup.enter="this.addplay.bet3up"
      ></v-otp-input>
      <v-text-field
        clearable
        name="betpay"
        type="number"
        label="ระบุจำนวนเงิน"
        :rules="$store.state.betpayRules"
        v-model.number="addplay.betpay"
        solo
      ></v-text-field>

      <v-btn dark color="indigo" type="submit" @click="snackbar = true">
        ส่งโพย
      </v-btn>
    </v-form>
    <v-snackbar v-model="snackbar" :timeout="snackbars.timeout">
      {{ this.snackbars.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click.prevent="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <!-- Calculator buttons -->
    <div class="row no-gutters">
      <div class="col-3" v-for="n in calculatorElements" :key="n">
        <div
          class="lead text-white text-center m-1 py-3 bg-vue-dark rounded hover-class"
          :class="{
            'bg-vue-green': [].includes(n),
          }"
          @click.prevent="action(n)"
        >
          {{ n }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Calculator",
  props: ["bet3"],
  data() {
    return {
      snackbar: false,
      snackbars: {
        text: "บันทึกข้อมูลสำเร็จ",
        timeout: 800,
      },

      userslog: [],
      newPlay: "",
      bet3up: "",
      betpay: "",
      addplay: {
        id: "1011",
        bill: Math.ceil(Math.random() * 1000),
        bet3up: "",
        betpay: "",
        typeplay: "3ตัวบน",
        typegame: "หวยธกส",
      },
      calculatorValue: "",
      calculatorElements: ["C", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      operator: null,
      previousCalculatorValue: "",
    };
  },
  computed: {
    form() {
      return {
        bet3up: this.bet3up,
        betpay: this.betpay,
      };
    },
  },
  methods: {
    async onSubmit() {
      if (this.addplay) {
      }
      await axios.post(
        "http://localhost:3000/postplaylotto/bankplaylott",
        this.addplay
      );
      this.addplay.bet3up = "";
      this.addplay.betpay = "";
      this.addplay.bill = 0;
      console.log(this.addplay.bill);
      // alert(JSON.stringify(this.addplay));
      // this.addplay.push(result.data);
    },

    action(n) {
      /* Append value */
      if (!isNaN(n) || n === ".") {
        this.addplay.bet3up += n + "";
      }
      /* Clear value */
      if (n === "C") {
        this.addplay.bet3up = "";
      }
    },
  },
};
</script>

<style scoped>
.bg-vue-dark {
  background: #31475e;
}
.hover-class:hover {
  cursor: pointer;
  background: #3d5875;
}
.bg-vue-green {
  background: #3fb984;
}
</style>
