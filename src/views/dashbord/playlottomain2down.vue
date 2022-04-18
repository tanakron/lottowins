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
                  <v-btn
                    @click.prevent="$router.push('/playlottomain')"
                    color="primary"
                    elevation="4"
                    rounded
                    small
                    class="ma-2"
                  >
                    3ตัวบน</v-btn
                  >
                  <v-btn
                    @click.prevent="$router.push('/playlottomain2')"
                    color="primary"
                    elevation="4"
                    rounded
                    small
                    class="ma-2"
                    >2ตัวบน</v-btn
                  >
                  <v-btn
                    @click.prevent="$router.push('/playlottomain1')"
                    color="primary"
                    elevation="4"
                    rounded
                    small
                    class="ma-2"
                    >เลขวิ่งบน</v-btn
                  >
                  <v-btn
                    @click.prevent="$router.push('/playlottomaindown')"
                    color="red"
                    elevation="4"
                    rounded
                    small
                    class="ma-2"
                  >
                    3ตัวล่าง</v-btn
                  >
                  <v-btn
                    @click.prevent="$router.push('/playlottomain2down')"
                    color="red"
                    elevation="4"
                    rounded
                    small
                    class="ma-2"
                    >2ตัวล่าง</v-btn
                  >
                  <v-btn
                    @click.prevent="$router.push('/playlottomain1down')"
                    color="red"
                    elevation="4"
                    rounded
                    small
                    class="ma-2"
                    >เลขวิ่งล่าง
                  </v-btn>

                  <playbetdown2 :bet3="typebet3" />

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
                  <v-list flat v-if="play.length">
                    <div v-for="playlottos in play" :key="playlottos.id">
                      <v-list-item
                        @click="donePlay(playlottos.id)"
                        :class="{ blue: play.done }"
                      >
                        <template v-slot:default>
                          <v-list-item-action>
                            <v-checkbox
                              :input-value="play.done"
                              color="primary"
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>{{
                              playlottos.usersname
                            }}</v-list-item-title>
                          </v-list-item-content>
                          <v-list-item-action> </v-list-item-action>
                        </template>
                      </v-list-item>
                      {{ calculatorValue }}
                      <v-divider> </v-divider>
                    </div>
                  </v-list>
                  <div v-else class="text-h5 info--text d-flex justify-center">
                    ไม่มีข้อมูลการเล่น
                  </div>
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

import keyboard from "vue-keyboard";

import Ratlottothai from "../pagepost/ratlottothai.vue";
export default {
  props: {},
  data() {
    return {
      typebet3: "2ตัวล่าง",
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
    keyboard,
    Ratlottothai,

    playbetdown2: require("@/components/playbetdown2.vue").default,
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
