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
            <div class="row">
              <v-sheet
                class="ma-2"
                color="green lighten-5"
                elevation="6"
                rounded
                shaped
              >
                <v-card-title>
                  <img src="@/assets/icons/unitedstates.png" width="30" />
                  <h5 class="ma-1">ออมสิน</h5>
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
                    <h5>
                      หวยออมสิน<v-icon large>add_circle</v-icon>
                      <p class="back--text caption">ปิดรับแทง</p>
                    </h5>
                  </v-card-text>
                </v-sheet>
              </div>
              <div class="col"></div>
              <div class="col"></div>
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
                  <h5>
                    <img
                      src="@/assets/icons/unitedstates.png"
                      width="30"
                      class="ma-1"
                    />
                    ธกส
                  </h5>
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
                    <h5>
                      <img
                        src="@/assets/icons/unitedstates.png"
                        width="30"
                        class="ma-1"
                      />หวยธกส <v-icon large>add_circle</v-icon>
                      <p class="back--text caption">ปิดรับแทง</p>
                    </h5>
                  </v-card-text>
                </v-sheet>
              </div>
              <div class="col"></div>
              <div class="col"></div>
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
