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

        <v-icon color="primary">monetization_on</v-icon> ยอดเงิน :
        {{ $store.state.isCadit }}

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
          <v-btn
            rounded
            color="pink"
            class="white--text ma-4"
            @click.prevent="$router.push('/mainuse')"
            >Back</v-btn
          >
          <div class="container">
            <div class="row">
              <v-sheet
                class="ma-2"
                color="green lighten-5"
                elevation="6"
                rounded
                shaped
              >
                <v-card-title>
                  <img src="@/assets/icons/laos.png" width="30" />
                  <h5 class="ma-1">หวยลาว</h5>
                </v-card-title></v-sheet
              >
              <div class="col">
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="100"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/laos.png"
                      width="30"
                      class="ma-1"
                    />
                    ลาวกาชาด
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>
                </v-sheet>
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="100"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/laos.png"
                      width="30"
                      class="ma-1"
                    />ลาวสตาร์ VIP

                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>
                </v-sheet>
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="100"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/laos.png"
                      width="30"
                      class="ma-1"
                    />ลาวVIP
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>
                </v-sheet>
              </div>
              <div class="col">
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="100"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/laos.png"
                      width="30"
                      class="ma-1"
                    />ลาวสามัคคี
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>

                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>
                </v-sheet>
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="100"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/laos.png"
                      width="30"
                      class="ma-1"
                    />หวยลาว
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>
                </v-sheet>
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="100"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/laos.png"
                      width="30"
                      class="ma-1"
                    />ลาวสตาร์
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>
                </v-sheet>
              </div>
              <div class="col">
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="100"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/laos.png"
                      width="30"
                      class="ma-1"
                    />ลาวHD
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>
                </v-sheet>

                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="100"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/laos.png"
                      width="30"
                      class="ma-1"
                    />
                    ลาวทีวี
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>
                </v-sheet>
              </div>
            </div>
            <div class="row">
              <v-sheet
                class="ma-2"
                color="green lighten-5"
                elevation="6"
                rounded
                shaped
              >
                <v-card-title>
                  <img
                    src="@/assets/icons/vietnam.png"
                    width="30"
                    class="ma-1"
                  />
                  หวยเวียดนาม
                </v-card-title></v-sheet
              >

              <div class="col">
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="100"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/vietnam.png"
                      width="30"
                      class="ma-1"
                    />ฮานอย EXTRA
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>
                </v-sheet>
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="100"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/vietnam.png"
                      width="30"
                      class="ma-1"
                    />
                    ฮานอย4D
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>
                </v-sheet>
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="100"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/vietnam.png"
                      width="30"
                      class="ma-1"
                    />ฮานอยพัฒนา
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>
                </v-sheet>
              </div>
              <div class="col">
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="100"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/vietnam.png"
                      width="30"
                      class="ma-1"
                    />ฮานอย VIP
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>
                </v-sheet>
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="120"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/vietnam.png"
                      width="30"
                      class="ma-1"
                    />ฮานอย
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>
                </v-sheet>
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="120"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/vietnam.png"
                      width="30"
                      class="ma-1"
                    />ฮานอย<v-chip>พิเศษ</v-chip>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>
                </v-sheet>
              </div>
              <div class="col">
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="100"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/vietnam.png"
                      width="30"
                      class="ma-1"
                    />ฮานอยสามัคคี
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>

                  <p class="green accent-2"></p>
                </v-sheet>
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="100"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/vietnam.png"
                      width="30"
                      class="ma-1"
                    />ฮานอยกาชาด
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>

                  <p class="back--text"></p>
                </v-sheet>
                <v-sheet
                  class="ma-2"
                  color="green accent-2"
                  elevation="6"
                  height="100"
                  outlined
                  rounded
                  shaped
                  width="250"
                >
                  <v-card-text class="back--text">
                    <img
                      src="@/assets/icons/vietnam.png"
                      width="30"
                      class="ma-1"
                    />ฮานอยทีวี
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="blue-grey darken-2"
                    >
                      <v-icon dark>add_circle</v-icon>
                    </v-btn>
                    <p class="back--text caption">ปิดรับแทง</p>
                  </v-card-text>

                  <p class="back--text"></p>
                </v-sheet>
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
export default {
  data() {
    return {
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
  components: {},
};
</script>

<style></style>
