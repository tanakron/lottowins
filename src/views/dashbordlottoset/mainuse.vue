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
      <!-- <manuusers /> -->
      <div class="container">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-6">
              <v-card
                class="rounded-xl"
                width="510"
                height="250"
                color="blue-grey darken-4"
              >
                <v-sheet
                  class="d-flex justify-center"
                  color="amber lighten-1"
                  elevation="4"
                  height="auto"
                  width="auto"
                  ><v-icon color="teal darken-2" large>face</v-icon>
                  <h6 class="align-self-sm-center ma-3">id:</h6>
                  <v-card
                    color="yellow accent-1"
                    v-for="usertestid in $store.state.usertest"
                    :key="usertestid.index"
                  >
                    <h3 class="d-flex justify-center ma-2">
                      <v-icon color="teal darken-2" large
                        >account_balance_wallet</v-icon
                      >
                      <!-- <span
                        v-for="caditmain in $store.state.caditmain"
                        :key="caditmain.index"
                      >
                        {{ caditmain.cadit }}
                      </span> -->
                    </h3>
                    ยอดเงิน :
                    {{ usertestid.cadit }}
                  </v-card>
                </v-sheet>
                <span class="d-flex justify-center ma-4">
                  <v-btn color="pink darken-1" class="d-block justify-center">
                    <v-icon color="blue-grey darken-4" class="ml-3"
                      >emoji_events</v-icon
                    >
                    <h3 class="d-block justify-center white--text">
                      ผลรางวัล
                    </h3></v-btn
                  ></span
                >
              </v-card>
            </div>
            <!-- เติมเครดิต ฝากถอน -->
            <div class="col-md-6">
              <v-card
                class="rounded-xl"
                width="510"
                height="250"
                color="blue-grey darken-4"
              >
                <v-sheet
                  class="white--text d-flex justify-center"
                  color="amber lighten-1"
                  elevation="4"
                  height="auto"
                  width="auto"
                >
                  <v-badge left color="primary">
                    <span slot="badge">ฝากถอน</span>
                    <!--slot can be any component-->
                    <v-icon large color="blue-grey darken-4"
                      >account_balance</v-icon
                    >
                  </v-badge>
                </v-sheet>

                <v-row align="center" class="ma-12">
                  <span class="d-flex justify-center">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          text
                          color="primary"
                          v-bind="attrs"
                          v-on="on"
                          @click.prevent="$router.push('/bankcompany')"
                          ><v-icon color="primary"
                            >account_balance_wallet</v-icon
                          >
                          <h3>ฝาก</h3>
                        </v-btn>
                      </template>

                      <span>ฝากเพื่อเดิมพัน</span>
                    </v-tooltip>

                    <v-tooltip right>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          text
                          color="success"
                          v-bind="attrs"
                          v-on="on"
                          @click.prevent="$router.push('/addbank')"
                        >
                          <v-icon color="success">add_card</v-icon>
                          <h3>เพิ่มบัญชี</h3>
                        </v-btn>
                      </template>
                      <span>สมาชิกใหม่เพิ่มบัญชีก่อน</span>
                    </v-tooltip>
                  </span>
                  <span class="ma-10 mr-4">
                    <v-tooltip right>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn text color="error" v-bind="attrs" v-on="on"
                          ><v-icon color="error">monetization_on</v-icon>
                          <h3>ถอนเครดิต</h3></v-btn
                        >
                      </template>
                      <span>แจ้งถอน</span>
                    </v-tooltip>
                  </span>
                </v-row>
              </v-card>
            </div>
          </div>

          <div class="col">
            <v-card dark rounded="xl" class="justify-md-space-around">
              <v-badge left color="pink" class="ma-2 pa-1" inline>
                <v-btn
                  class="mx-3 white--text"
                  fab
                  dark
                  large
                  rounded
                  color="amber lighten-1"
                  @click.prevent="$router.push('/playlottomain/')"
                >
                  <img src="@/assets/icons/088-thailand.png" width="30" />
                </v-btn>
                <span slot="badge">หวยรัฐ</span>
              </v-badge>
              <v-badge left color="pink" class="ma-2 pa-2" inline>
                <v-btn
                  class="mx-3 white--text"
                  :id="id"
                  fab
                  dark
                  large
                  rounded
                  color="amber lighten-1"
                  @click.prevent="$router.push('/playlottobank')"
                >
                  <img src="@/assets/imgs/aom.png" width="30" />
                </v-btn>

                <span slot="badge">หวยธนาคาร</span>
              </v-badge>
              <v-badge left color="pink" class="ma-2 pa-1" inline>
                <v-btn
                  class="mx-3 white--text"
                  fab
                  dark
                  large
                  rounded
                  color="amber lighten-1"
                  @click.prevent="$router.push('/')"
                >
                  <img src="@/assets/icons/lotto.png" width="30" />
                </v-btn>

                <span slot="badge">หวยยี่กีVIP</span>
              </v-badge>
              <v-badge left color="pink" class="ma-2 pa-1" inline>
                <v-btn
                  class="mx-3 white--text"
                  fab
                  dark
                  large
                  rounded
                  color="amber lighten-1"
                  @click.prevent="$router.push('/playlottostock')"
                >
                  <img src="@/assets/icons/unitedstates.png" width="30" />
                </v-btn>

                <span slot="badge">หวยหุ้น</span>
              </v-badge>
              <v-badge left color="pink" class="ma-2 pa-1" inline>
                <v-btn
                  class="mx-3 white--text"
                  fab
                  dark
                  large
                  rounded
                  color="amber lighten-1"
                  @click.prevent="$router.push('/playlotto')"
                >
                  <img src="@/assets/icons/vietnam.png" width="30" />
                </v-btn>

                <span slot="badge">หวยชุด</span>
              </v-badge>
            </v-card>
          </div>
        </div>

        <div class="row">
          <div class="col d-flex justify-center mb-6">
            <v-card class="rounded-xl" width="500" height="400" dark>
              <v-stepper-header class="">
                <v-sheet
                  class="mx-auto d-flex justify-center text-black"
                  width="800"
                  height="50"
                  color="amber lighten-1"
                  absolute
                  left
                  shaped
                  top
                >
                  <img src="@/assets/imgs/003-lottery.png" width="60" />
                  <strong class="ma-3">ผลหวยยี่กี</strong>
                </v-sheet>
              </v-stepper-header>
              <template>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">ประเภท</th>
                        <th class="text-left">รอบ</th>
                        <th class="text-left">3ตัวบน</th>
                        <th class="text-left">2ตัวล่าง</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>
                          <v-icon color="primary">stars</v-icon> {{ item.name }}
                        </td>
                        <td>{{ item.row }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet2up }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </template>
            </v-card>
          </div>
          <div class="col d-flex justify-center mb-6">
            <v-card class="rounded-xl" width="500" height="400" dark>
              <v-stepper-header class="">
                <v-sheet
                  class="mx-auto d-flex justify-center text-black"
                  width="800"
                  height="50"
                  color="amber lighten-1"
                  absolute
                  left
                  shaped
                  top
                >
                  <img src="@/assets/imgs/003-lottery.png" width="60" />
                  <strong class="ma-3"> ผลหวยรัฐบาล</strong>
                </v-sheet>
              </v-stepper-header>
              <template>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>
                          <v-icon color="primary">stars</v-icon> รางวัลที่1
                        </td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>3 ตัวหน้า</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>3 ตัวล่าง</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>2 ตัวล่าง</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </template>
            </v-card>
          </div>

          <div class="col d-flex justify-center mb-6">
            <v-card class="rounded-xl" width="500" height="400" dark>
              <v-stepper-header class="">
                <v-sheet
                  class="mx-auto d-flex justify-center text-black"
                  width="800"
                  height="50"
                  color="amber lighten-1"
                  absolute
                  left
                  shaped
                  top
                >
                  <img src="@/assets/imgs/003-lottery.png" width="60" />
                  <strong class="ma-3"> ผลหวยต่างประเทศ</strong>
                </v-sheet>
              </v-stepper-header>
              <template>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <th></th>
                      <th>งวดที่</th>
                      <th>3ตัวบน</th>
                      <th>2ตัวล่าง</th>
                    </thead>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นเกาหลี</td>
                        <td>{{ item.row }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>นิเคอิรอบเช้า</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>นิเคอิรอบบ่าย</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>ฮั่งเส็งรอบเช้า</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>ฮั่งเส็งรอบบ่าย</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>จีนเช้า</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>จีนบ่าย</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นไต้หวัน</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นสิงคโปร์</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นอียิปต์</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นเยอรมัน</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นอังกฤษ</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นรัสเซีย</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นอินเดีย</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </template>
            </v-card>
          </div>
          <div class="col d-flex justify-center mb-6">
            <v-card class="rounded-xl" width="500" height="400" dark>
              <v-stepper-header class="">
                <v-sheet
                  class="mx-auto d-flex justify-center text-black"
                  width="800"
                  height="50"
                  color="amber lighten-1"
                  absolute
                  left
                  shaped
                  top
                >
                  <img src="@/assets/imgs/003-lottery.png" width="60" />
                  <strong class="ma-3"> ผลหวย ลาว</strong>
                </v-sheet>
              </v-stepper-header>
              <template>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <th></th>
                      <th>งวดที่</th>
                      <th>3ตัวบน</th>
                      <th>2ตัวล่าง</th>
                    </thead>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นเกาหลี</td>
                        <td>{{ item.row }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>นิเคอิรอบเช้า</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>นิเคอิรอบบ่าย</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>ฮั่งเส็งรอบเช้า</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>ฮั่งเส็งรอบบ่าย</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>จีนเช้า</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>จีนบ่าย</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นไต้หวัน</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นสิงคโปร์</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นอียิปต์</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นเยอรมัน</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นอังกฤษ</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นรัสเซีย</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>หุ้นอินเดีย</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                        <td>{{ item.bet3up }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </template>
            </v-card>
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
      id: "1011",
      caditmain: [],
      drawer: null,
      usertest: [],
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
          bet3up: 159,
          row: 1,
          bet2up: 59,
        },
      ],
    };
  },
  components: {
    // manuusers: require("@/components/manuusers").default,
    // tablotto: require("@/views/pages/tablottouser.vue").default,
  },
};
</script>

<style></style>
