<template>
  <v-app
    ><v-main
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
        <div class="col-md-12">
          <div class="container">
            <v-card
              class="d-flex justify-content-center ma-3 pa-1"
              width="550"
              height="auto"
              rounded
              elevation="4"
            >
              <v-btn
                @click.prevent="$router.push('/playlottomain')"
                color="primary"
                elevation="4"
                outlined
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
                outlined
                rounded
                small
                class="ma-2"
                >2ตัวบน</v-btn
              >
              <v-btn
                @click.prevent="$router.push('/playlottomain1')"
                color="primary"
                elevation="4"
                outlined
                rounded
                small
                class="ma-2"
                >เลขวิ่งบน</v-btn
              >
              <v-btn
                @click.prevent="$router.push('/playlottomaindown')"
                color="red"
                elevation="4"
                outlined
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
                outlined
                rounded
                small
                class="ma-2"
                >2ตัวล่าง</v-btn
              >
              <v-btn
                @click.prevent="$router.push('/playlottomain1down')"
                color="red"
                elevation="4"
                outlined
                rounded
                small
                class="ma-2"
                >เลขวิ่งล่าง</v-btn
              >
            </v-card>
            <div class="row">
              <div class="col-md-6">
                <v-card
                  dark
                  width="auto"
                  height="auto"
                  class="d-flex justify-content-center"
                >
                  <v-card width="500" height="600" dark>
                    <v-form>
                      <v-text-field
                        label="จำนวนเงิน"
                        value="00.00"
                        prefix="฿"
                        v-model="sum"
                        v-on:keyup.enter="nextPlease"
                      ></v-text-field>
                      <keyboard
                        scope
                        v-model="sum"
                        @custom="custom"
                        @input="changed"
                        :layouts="['1234567890{delete:backspace}']"
                        :maxlength="10"
                      ></keyboard>

                      <v-chip close>ระบุตัวเลข</v-chip>
                      <v-otp-input
                        dark
                        length="1"
                        height="30"
                        width="30"
                        class="ma-3"
                        v-model="input"
                      ></v-otp-input>
                      <keyboard
                        scope
                        v-model="input"
                        @custom="custom"
                        @input="changed"
                        :layouts="['1234567890{delete:backspace}']"
                        :maxlength="3"
                      ></keyboard>
                      <v-btn class="ma-2" outlined color="indigo">
                        ส่งโพย
                      </v-btn>
                    </v-form>
                  </v-card>
                  <!---->
                </v-card>
              </div>

              <v-card
                dark
                width="auto"
                height="auto"
                class="d-flex justify-content-center"
              >
                <v-form>
                  <v-card width="400" height="400" class="ma-6" dark>
                    เลข3ตัว
                    <v-chip color="red">
                      จำนวนเงิน {{ sum }} บาท เลข {{ input }} บน
                    </v-chip>
                  </v-card>
                </v-form>
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
import keyboard from "vue-keyboard";
export default {
  data() {
    return {
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
          name: "ยี่กี VIP",
          bet3up: 159,
          row: 1,
          bet2up: 59,
        },
      ],
    };
  },
  components: { keyboard },
  methods: {
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
