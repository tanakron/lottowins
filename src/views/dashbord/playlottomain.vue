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
              <div class="col-md-12">
                <v-card class="ma-1 pa-2 d-flex justify-content-center">
                  {{ input }} บน | {{ sum }} บาท</v-card
                >
              </div>
              <v-card width="auto" dark rounded="xl">
                <v-card
                  dark
                  width="auto"
                  height="auto"
                  class="d-flex justify-content-center"
                >
                  <v-form>
                    <v-chip class="ma-2">ระบุตัวเลข</v-chip>
                    <v-otp-input
                      dark
                      type="number"
                      length="3"
                      height="30"
                      width="30"
                      class="ma-3 pa-2"
                      v-model="input"
                      @click:append="input"
                      @keyup.enter="input"
                    ></v-otp-input>
                    <keyboard
                      scope
                      v-model="input"
                      @custom="custom"
                      @input="changed"
                      :layouts="['1234567890{delete:backspace}']"
                      :maxlength="3"
                    ></keyboard>
                    <v-text-field
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
                    ></v-text-field>
                    <keyboard
                      scope
                      v-model="sum"
                      @custom="custom"
                      @input="changed"
                      :layouts="['1234567890{delete:backspace}']"
                      :maxlength="10"
                    ></keyboard>
                    <v-btn class="ma-2" outlined color="indigo"> ส่งโพย </v-btn>
                  </v-form>
                </v-card>
              </v-card>
            </div>

            <div class="col-md-6">
              <div class="continer">
                <v-card rounded="xl" dark>
                  <div class="d-flex justify-content-center ma-3">
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
                  </div>
                  <div class="d-flex justify-content-center ma-3">
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
                  </div>
                  <div class="d-flex justify-content-center ma-3">
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
                  </div>
                </v-card>
              </div>
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
                          <v-list-item-action>
                            <v-btn icon @click.stop="deletePlay(playlottos.id)">
                              <v-icon color="red">delete</v-icon></v-btn
                            >
                          </v-list-item-action>
                        </template>
                      </v-list-item>

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
  data() {
    return {
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
      input: "",
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
  components: { keyboard, Ratlottothai },
  methods: {
    newinput() {
      this.$store.commit("input", this.newinput);
      this.newinput = "";
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

    addplay() {
      let newPlay = {
        id: new Date(),
        usersname: "",
        cadit: "1000",
        datetime: "",
        done: false,
        idplay: new Date(),
      };
      this.play.push(newPlay);
    },
    donePlay(id) {
      let plays = this.play.filter((plays) => plays.id === id)[0];
      plays.done = !plays.done;
      // console.log("id:", id);
    },
    deletePlay(id) {
      this.play = this.play.filter((plays) => plays.id !== id);
    },
  },
};
</script>

<style>
.keyboard2 {
  background: rgba(0, 255, 98, 0.459);
}
</style>
