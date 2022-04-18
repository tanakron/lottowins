<template>
  <div
    class="p-3"
    style="max-width: 400px; margin: 50px auto; background: #234"
  >
    <!-- แทง -->
    <div
      class="w-full rounded m-1 p-3 text-right lead font-weight-bold text-white bg-vue-dark"
    >
      {{ calculatorValue }}
    </div>
    <v-chip class="ma-2">ระบุตัวเลข{{ bet3 }} </v-chip>

    <v-form>
      <v-otp-input
        dark
        type="number"
        length="1"
        height="30"
        width="30"
        class="ma-3 pa-2"
        v-model="this.calculatorValue"
        @click:append="this.calculatorValue"
        @keyup.enter="this.calculatorValue"
      ></v-otp-input>
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
    <v-btn class="ma-2" outlined color="indigo"> ส่งโพย </v-btn>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  props: ["bet3"],
  data() {
    return {
      newPlay: "",
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
    action(n) {
      /* Append value */
      if (!isNaN(n) || n === ".") {
        this.calculatorValue += n + "";
      }
      /* Clear value */
      if (n === "C") {
        this.calculatorValue = "";
      }
      //   /* Percentage */
      //   if (n === "%") {
      //     this.calculatorValue = this.calculatorValue / 100 + "";
      //   }
      //   /* Operators */
      //   if (["/", "*", "-", "+"].includes(n)) {
      //     this.operator = n;
      //     this.previousCalculatorValue = this.calculatorValue;
      //     this.calculatorValue = "";
      //   }
      /* Calculate result using the eval function */
      //   if (n === "=") {
      //     this.calculatorValue = eval(
      //       this.previousCalculatorValue + this.operator + this.calculatorValue
      //     );
      //     this.previousCalculatorValue = "";
      //     this.operator = null;
      //   }
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
