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
              width="auto"
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
                >3ตัว</v-btn
              >
              <v-btn
                @click.prevent="$router.push('/playlottomain2')"
                color="primary"
                elevation="4"
                outlined
                rounded
                small
                class="ma-2"
                >2ตัว</v-btn
              >
              <v-btn
                @click.prevent="$router.push('/playlottomain1')"
                color="primary"
                elevation="4"
                outlined
                rounded
                small
                class="ma-2"
                >เลขวิ่ง</v-btn
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
                  <v-card width="400" height="400" dark>
                    <v-form>
                      <v-otp-input
                        dark
                        length="1"
                        height="30"
                        width="30"
                        class="ma-3"
                        v-model="bet3"
                      ></v-otp-input>
                      <v-btn class="ma-2" outlined color="indigo"> ส่ง </v-btn>

                      <div class="row no-gutters">
                        <div class="pa-1 col col-4">
                          <button
                            type="button"
                            class="disable-double-tab-zoom v-btn v-btn--block v-btn--depressed v-btn--flat v-btn--outlined v-btn--rounded theme--dark v-size--default v-size--large"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-numeric-1 theme--dark"
                                style="font-size: 40px"
                              ></i
                            ></span>
                          </button>
                        </div>
                        <div class="pa-1 col col-4">
                          <button
                            type="button"
                            class="disable-double-tab-zoom v-btn v-btn--block v-btn--depressed v-btn--flat v-btn--outlined v-btn--rounded theme--dark v-size--default v-size--large"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-numeric-2 theme--dark"
                                style="font-size: 40px"
                              ></i
                            ></span>
                          </button>
                        </div>
                        <div class="pa-1 col col-4">
                          <button
                            type="button"
                            class="disable-double-tab-zoom v-btn v-btn--block v-btn--depressed v-btn--flat v-btn--outlined v-btn--rounded theme--dark v-size--default v-size--large"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-numeric-3 theme--dark"
                                style="font-size: 40px"
                              ></i
                            ></span>
                          </button>
                        </div>
                        <div class="pa-1 col col-4">
                          <button
                            type="button"
                            class="disable-double-tab-zoom v-btn v-btn--block v-btn--depressed v-btn--flat v-btn--outlined v-btn--rounded theme--dark v-size--default v-size--large"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-numeric-4 theme--dark"
                                style="font-size: 40px"
                              ></i
                            ></span>
                          </button>
                        </div>
                        <div class="pa-1 col col-4">
                          <button
                            type="button"
                            class="disable-double-tab-zoom v-btn v-btn--block v-btn--depressed v-btn--flat v-btn--outlined v-btn--rounded theme--dark v-size--default v-size--large"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-numeric-5 theme--dark"
                                style="font-size: 40px"
                              ></i
                            ></span>
                          </button>
                        </div>
                        <div class="pa-1 col col-4">
                          <button
                            type="button"
                            class="disable-double-tab-zoom v-btn v-btn--block v-btn--depressed v-btn--flat v-btn--outlined v-btn--rounded theme--dark v-size--default v-size--large"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-numeric-6 theme--dark"
                                style="font-size: 40px"
                              ></i
                            ></span>
                          </button>
                        </div>
                        <div class="pa-1 col col-4">
                          <button
                            type="button"
                            class="disable-double-tab-zoom v-btn v-btn--block v-btn--depressed v-btn--flat v-btn--outlined v-btn--rounded theme--dark v-size--default v-size--large"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-numeric-7 theme--dark"
                                style="font-size: 40px"
                              ></i
                            ></span>
                          </button>
                        </div>
                        <div class="pa-1 col col-4">
                          <button
                            type="button"
                            class="disable-double-tab-zoom v-btn v-btn--block v-btn--depressed v-btn--flat v-btn--outlined v-btn--rounded theme--dark v-size--default v-size--large"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-numeric-8 theme--dark"
                                style="font-size: 40px"
                              ></i
                            ></span>
                          </button>
                        </div>
                        <div class="pa-1 col col-4">
                          <button
                            type="button"
                            class="disable-double-tab-zoom v-btn v-btn--block v-btn--depressed v-btn--flat v-btn--outlined v-btn--rounded theme--dark v-size--default v-size--large"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-numeric-9 theme--dark"
                                style="font-size: 40px"
                              ></i
                            ></span>
                          </button>
                        </div>
                        <div class="pa-1 col col-4">
                          <button
                            type="button"
                            disabled="disabled"
                            class="disable-double-tab-zoom v-btn v-btn--block v-btn--depressed v-btn--disabled v-btn--flat v-btn--outlined v-btn--rounded theme--dark v-size--default v-size--large"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-keyboard-close theme--dark"
                              ></i
                            ></span>
                          </button>
                        </div>
                        <div class="pa-1 col col-4">
                          <button
                            type="button"
                            class="disable-double-tab-zoom v-btn v-btn--block v-btn--depressed v-btn--flat v-btn--outlined v-btn--rounded theme--dark v-size--default v-size--large"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-numeric-0 theme--dark"
                                style="font-size: 40px"
                              ></i
                            ></span>
                          </button>
                        </div>
                        <div class="pa-1 col col-4">
                          <button
                            type="button"
                            class="disable-double-tab-zoom v-btn v-btn--block v-btn--depressed v-btn--flat v-btn--outlined v-btn--rounded theme--dark v-size--default v-size--large"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-backspace theme--dark"
                              ></i
                            ></span>
                          </button>
                        </div>
                        <div class="pa-1 col col-6">
                          <button
                            type="button"
                            class="disable-double-tab-zoom v-btn v-btn--block v-btn--contained v-btn--disabled v-btn--rounded theme--dark v-size--large"
                            disabled="disabled"
                          >
                            <!-- <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mr-2 mdi mdi-arrow-collapse-left theme--dark"
                              ></i>
                              ยกเลิกล่าสุด
                            </span> -->
                          </button>
                        </div>
                        <div class="pa-1 col col-6">
                          <button
                            type="button"
                            class="disable-double-tab-zoom v-btn v-btn--block v-btn--contained v-btn--disabled v-btn--rounded theme--dark v-size--large"
                            disabled="disabled"
                          >
                            <!-- <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mr-2 mdi mdi-trash-can-outline theme--dark"
                              ></i>
                              ล้างทั้งหมด
                            </span> -->
                          </button>
                        </div>
                      </div>
                    </v-form>
                  </v-card>
                  <!---->
                </v-card>
              </div>
              <div class="col-md-3">
                <v-card
                  dark
                  width="auto"
                  height="auto"
                  class="d-flex justify-content-center"
                >
                  <v-form>
                    <v-card width="400" height="400" class="ma-6" dark>
                      เลข1ตัว <v-chip color="red">{{ bet3 }}</v-chip>
                    </v-card>
                  </v-form>
                </v-card>
              </div>
              <div class="col-md-3">
                <v-card
                  dark
                  width="auto"
                  height="auto"
                  class="d-flex justify-content-center"
                >
                  <v-form>
                    <v-card width="400" height="400" class="ma-6" dark>
                      <v-chip color="red">{{ bet3 }}</v-chip>
                    </v-card>
                  </v-form>
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
export default {
  data() {
    return {
      tab: null,

      bet3: "",
      bet1: "",
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
