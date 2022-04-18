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
    {{ addplay.bet3up }}
    <v-form @submit.prevent="onSubmit()">
      <v-otp-input
        dark
        type="number"
        length="3"
        name="bet3up"
        height="30"
        width="30"
        class="ma-3 pa-2"
        v-model="this.addplay.bet3up"
        @click:append="this.addplay.bet3up"
        @keyup.enter="this.addplay.bet3up"
      ></v-otp-input>
      <v-text-field
        type="number"
        label="จำนวนเงิน"
        v-model.number="this.addplay.betpay"
        solo
        @click:append="this.addplay.betpay"
        @keyup.enter="this.addplay.betpay"
      ></v-text-field>
      <v-btn class="ma-2" outlined color="indigo" type="submit"> ส่งโพย </v-btn>
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
      userslog: [],
      newPlay: "",
      addplay: {
        bet3up: "",
        betpay: "",
      },
      calculatorValue: "",
      calculatorElements: ["C", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      operator: null,
      previousCalculatorValue: "",
      play: [
        {
          id: 1,
          usersname: "PG501",
          cadit: "1000",
          datetime: "",
          done: false,
          idplay: new Date(),
        },
        {
          id: 2,
          usersname: "PG502",
          cadit: "1000",
          datetime: "",
          done: false,
          idplay: new Date(),
        },
        {
          id: 3,
          usersname: "PG503",
          cadit: "1000",
          datetime: "",
          done: false,
          idplay: new Date(),
        },
      ],
    };
  },
  methods: {
    async onSubmit() {
      await axios.post(
        "http://localhost:3000/postplaylotto/bet3up",
        this.addplay
      );
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
