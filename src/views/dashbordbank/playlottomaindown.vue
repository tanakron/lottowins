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

                  <playbetdown :bet3="typebet3" />
                </v-card>
              </v-card>
            </div>

            <div class="col-md-6">
              <div class="continer"></div>
              <div class="col-md-8">
                <v-card width="auto" dark>
                  <v-btn @click="reloadPage">*คลิก*อัพเดทรายการแทง</v-btn>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">เลข"บน"</th>

                          <th class="text-left">เลข"ล่าง"</th>

                          <th class="text-left">เลข"วิ่ง บน"</th>
                          <th class="text-left">เลข"วิ่ง ล่าง"</th>
                          <th class="text-left">เลข"โต๊ด"</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="getplays in getplay" :key="getplays._id">
                          <td>
                            {{ getplays.bet3up }}
                            {{ getplays.bet2up }}
                            {{ getplays.bet1up }}
                          </td>

                          <td>
                            {{ getplays.bet3down }}
                            {{ getplays.bet2down }}
                            {{ getplays.bet1down }}
                          </td>

                          <td>
                            {{ getplays.bet1up }}
                            {{ getplays.bet1up }}
                            {{ getplays.bet1up }}
                          </td>
                          <td>
                            {{ getplays.bet1down }}
                            {{ getplays.bet1down }}
                            {{ getplays.bet1down }}
                          </td>
                          <td>
                            {{ getplays.bet3tode }}
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
    await fetch(`http://localhost:3000/getplaylotto/palyid`)
      .then((res) => res.json())
      .then((data) => (this.getplay = data))
      .catch((err) => console.log(err.message));
  },
  data() {
    return {
      result: [],
      getplay: [],
      datatab: [],
      typebet3: "3ตัวล่าง",
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
    playbetdown: require("@/components/playbetdown.vue").default,
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
