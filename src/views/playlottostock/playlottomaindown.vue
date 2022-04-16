<template>
  <v-app>
    <v-main
      ><!-- App.vue -->

      <v-app-bar app dark>
        <img src="@/assets/icons/lotto.png" />
        <h2>LOTTOWINS</h2>
        <v-spacer></v-spacer>
        <v-icon color="withe" @click.stop="drawer = !drawer">reorder</v-icon>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="@/assets/icons/lotto.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>ฉายา :</v-list-item-title>
            <h6>Basic Member</h6>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <h5>
          <v-icon color="primary">monetization_on</v-icon> ยอดเงิน :
          {{ $store.state.isCadit }}
        </h5>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

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
            <div class="col-md-4">
              <div class="col-md-12">
                <v-card class="ma-1 pa-2">
                  {{ input }} ล่าง | {{ sum }} บาท</v-card
                >
              </div>
              <v-card width="auto" height="600" dark rounded="xl">
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
                      v-on:keyup.enter="onEnter"
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
                      class="pa-2"
                      label="จำนวนเงิน"
                      value="00.00"
                      prefix="฿"
                      type="number"
                      v-model="sum"
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

            <div class="col-md-3">
              <v-form>
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
              </v-form>
            </div>
            <div class="col-md-4">
              <v-card width="auto" dark>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">หวย</th>
                        <th class="text-left">เลข</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
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
  data() {
    return {
      alert: false,
      text: "เรท",
      showModal: false,
      tab: null,
      input: "",
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
