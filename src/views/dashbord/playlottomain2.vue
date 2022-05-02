<template>
  <v-app>
    <v-main
      ><!-- App.vue -->

      <v-app-bar app dark>
        <img src="@/assets/icons/lotto.png" />
        <h2>LOTTOWINS</h2>
        <v-spacer></v-spacer>
        <v-icon color="withe" @click.stop="$store.state.drawer = !drawer"
          >reorder</v-icon
        >
      </v-app-bar>

      <div class="container">
        <div class="container">
          <v-btn
            rounded
            color="pink"
            class="white--text ma-4"
            @click.prevent="$router.push('/mainuse')"
            >Back</v-btn
          >
          <ratlottothai :text="text" />

          <div class="row">
            <div class="col-md-6">
              <v-card width="auto" dark rounded="xl">
                <v-card dark width="auto" height="auto">
                  <tabbotton />
                  <playbet2 :bet3="typebet3" />
                </v-card>
              </v-card>
            </div>
          </div>
        </div>
      </div>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-main></v-app
  >
</template>

<script>
// import Modal from "@/components/Modal.vue";

import keyboard from "vue-keyboard";
import Ratlottothai from "../pagepost/ratlottothai.vue";
export default {
  async mounted() {
    await fetch(`http://localhost:3000/getplaylotto/palyid`)
      .then((res) => res.json())
      .then((data) => (this.getplay = data))
      .catch((err) => console.log(err.message));
  },
  data() {
    return {
      getplay: [],
      typebet3: "2ตัวบน",
      calculatorValue: "",
      newPlay: "",
      play: [],
      iduser: this.$cookie.get("id"),
      alert: false,
      text: "เรท",
      showModal: false,
      tab: null,
      addPlaylotto: "",
      bet3: "",
      bet1: "",
      sum: "",
      drawer: null,
      items: [
        { title: "จัดการโปรไฟล์", icon: "admin_panel_settings" },
        { title: "เปลี่ยนพาส", icon: "password" },
        { title: "จัดการบัญชีธนาคาร", icon: "account_balance" },
        { title: "รายงานการเงิน", icon: "savings" },
        { title: "ติดต่อเจ้าหน้าที่", icon: "person_add_alt_1" },
        { title: "ออกจากระบบ", icon: "logout" },
      ],
      desserts: [
        {
          name: "หวยรัฐ",
          bet3up: 159,
          row: 1,
          bet2up: 59,
        },
      ],
    };
  },
  components: {
    keyboard,
    Ratlottothai,
    tabbotton: require("@/components/tabbotton").default,
    playbet2: require("@/components/playbet2.vue").default,
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    RatlottothaiggleModal() {
      this.showModal = !this.showModal;
    },
    changed(value) {
      console.log("Value " + value);
    },

    custom(keyboard) {
      console.log(keyboard.value);
    },
  },
};
</script>

<style>
.keyboard2 {
  background: rgba(0, 255, 98, 0.459);
}
</style>
