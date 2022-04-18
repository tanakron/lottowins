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

                  <playbet :bet3="typebet3" />

                  <!-- <v-text-field
                      solo
                      class="pa-2"
                      label="จำนวนเงิน"
                      value="00.00"
                      prefix="฿"
                      type="number"
                      v-model="sum"
                      hidden-details
                      @keyup.enter="sum"
                      :rules="$store.state.sum"
                    ></v-text-field> -->
                </v-card>
              </v-card>
            </div>

            <div class="col-md-6">
              <div class="continer"></div>
              <div class="col-md-8">
                <v-card width="auto" dark>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left"></th>
                          <th class="text-left">บน</th>
                          <th class="text-left">ล่าง</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="getplays in getplay" :key="getplays.id">
                          <td></td>
                          <td>
                            {{ getplays.bet3up }}
                          </td>
                          <td>
                            {{ getplays._id }}
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
              </div>
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

import Ratlottothai from "../pagepost/ratlottothai.vue";
export default {
  name: "Playlottomain",
  props: ["id"],
  async mounted() {
    await fetch(`http://localhost:3000/getplaylotto/palyid/1011`)
      .then((res) => res.json())
      .then((data) => (this.getplay = data))
      .catch((err) => console.log(err.message));
  },
  data() {
    return {
      result: [],
      getplay: [],
      datatab: [],
      typebet3: "3ตัวบน",
      calculatorValue: "",
      newPlay: "",
      play: [
        // {
        //   id: 1,
        //   usersname: "PG501",
        //   cadit: "1000",
        //   datetime: "",
        //   done: false,
        //   idplay: new Date(),
        // },
        // {
        //   id: 2,
        //   usersname: "PG502",
        //   cadit: "1000",
        //   datetime: "",
        //   done: false,
        //   idplay: new Date(),
        // },
        // {
        //   id: 3,
        //   usersname: "PG503",
        //   cadit: "1000",
        //   datetime: "",
        //   done: false,
        //   idplay: new Date(),
        // },
      ],

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
    Ratlottothai,
    tabbotton: require("@/components/tabbotton").default,
    playbet: require("@/components/playbet.vue").default,
  },
  methods: {
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
