<template>
  <div
    class="p-3"
    style="max-width: 400px; margin: 50px auto; background: #234"
  >
    <!-- แทง -->

    <div
      class="w-full rounded m-1 p-3 text-right lead font-weight-bold text-white bg-vue-dark"
    ></div>

    <v-chip class="ma-2">ระบุตัวเลข{{ bet3 }} </v-chip>

    <v-form @submit.prevent="onSubmit()">
      <v-otp-input
        dark
        type="number"
        length="1"
        height="30"
        width="30"
        class="ma-3 pa-2"
        v-model="addplay.bet1up"
        @click:append="this.addplay.bet1up"
        @keyup.enter="this.addplay.bet1up"
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

      <v-btn dark color="indigo" type="submit"> ส่งโพย </v-btn>
    </v-form>

    <!-- Calculator buttons -->
    <div class="row no-gutters">
      <div class="col-3" v-for="n in calculatorElements" :key="n">
        <div
          class="lead text-white text-center m-1 py-3 bg-vue-dark rounded hover-class"
          :class="{
            'bg-vue-green': [].includes(n),
          }"
          @click="action(n)"
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
      snackbar: {
        show: false,
        text: "บันทึกข้อมูล",
      },
      userslog: [],
      newPlay: "",
      bet1up: "",
      betpay: "",
      addplay: {
        bet1up: "",
        betpay: "",
        typeplay: "1ตัวบน",
        typegame: "หวยรัฐ",
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
        bet1up: this.bet1up,
        betpay: this.betpay,
      };
    },
  },
  methods: {
    async onSubmit() {
      if (this.addplay) {
      }
      await axios.post(
        "http://localhost:3000/postplaylotto/playlotto",
        this.addplay
      );
      this.addplay.bet1up = "";
      this.addplay.betpay = "";
      // alert(JSON.stringify(this.addplay));
      // this.addplay.push(result.data);
    },

    action(n) {
      /* Append value */
      if (!isNaN(n) || n === ".") {
        this.addplay.bet1up += n + "";
      }
      /* Clear value */
      if (n === "C") {
        this.addplay.bet1up = "";
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
