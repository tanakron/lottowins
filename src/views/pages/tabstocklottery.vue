<script>
// import moment from "moment";
import Clock from "@/components/Clock.vue";
export default {
  methods: {
    showLocaleTime: function () {
      var time = this;
      setInterval(function () {
        time.localTime = new Date().toLocaleTimeString();
      }, 1000);
    },
  },

  data() {
    return {
      localTime: " ",
      stockset1: [],
      stockset2: [],
      stockset3: [],
      stockset4: [],
      stockset5: [],
      stockset6: [],
      stockset7: [],
      stockset8: [],
      stockset9: [],
      stockset10: [],
      stockset11: [],
      stockset12: [],

      setlotto: [
        {
          name: "หุ้นเกาหลี",
          img: require("@/assets/icons/southkorea.png"),
        },
        {
          name: "นิเคอิรอบเช้า",
          calories: 237,
          img: require("@/assets/icons/japan.png"),
        },
        {
          name: "นิเคอิรอบบ่าย",
          calories: 262,
          img: require("@/assets/icons/japan.png"),
        },
        {
          name: "ฮั่งเส็งรอบเช้า",
          calories: 305,
          img: require("@/assets/icons/hongkong.png"),
        },
        {
          name: "ฮั่งเส็งรอบบ่าย",
          calories: 356,
          img: require("@/assets/icons/hongkong.png"),
        },
        {
          name: "จีนรอบเช้า",
          calories: 375,
          img: require("@/assets/icons/china.png"),
        },
        {
          name: "จีนรอบบ่าย",
          calories: 392,
          img: require("@/assets/icons/china.png"),
        },
        {
          name: "หุ้นไต้หวัน",
          calories: 408,
          img: require("@/assets/icons/taiwan.png"),
        },
        {
          name: "หุ้นสิงคโปร์",
          calories: 452,
          img: require("@/assets/icons/singapore.png"),
        },
        {
          name: "หุ้นอียิปต์",
          calories: 518,
          img: require("@/assets/icons/egypt.png"),
        },
        {
          name: "หุ้นเยอรมัน",
          calories: 518,
          img: require("@/assets/icons/germany.png"),
        },
        {
          name: "หุ้นอังกฤษ",
          calories: 518,
          img: require("@/assets/icons/england.png"),
        },
        {
          name: "หุ้นรัสเซีย",
          calories: 518,
          img: require("@/assets/icons/russia.png"),
        },
        {
          name: "หุ้นอินเดีย",
          calories: 518,
          img: require("@/assets/icons/india.png"),
        },
        {
          name: "หุ้นดาวน์โจน",
          calories: 518,
          img: require("@/assets/icons/unitedstates.png"),
        },
      ],
    };
  },
  mounted() {
    this.showLocaleTime();
    //1 หุ้นเกาหลี
    fetch("http://localhost:3000/lottothaiset/set1")
      .then((res) => res.json())
      .then((data) => (this.stockset1 = data))
      .catch((err) => console.log(err.message));

    //2นิเคอิรอบเช้า
    fetch("http://localhost:3000/lottothaiset/set2")
      .then((res) => res.json())
      .then((data) => (this.stockset2 = data))
      .catch((err) => console.log(err.message));
    //3 นิเคอิรอบบ่าย
    fetch("http://localhost:3000/lottothaiset/set3")
      .then((res) => res.json())
      .then((data) => (this.stockset3 = data))
      .catch((err) => console.log(err.message));
    //4 ฮั่งเส็งรอบเช้า
    fetch("http://localhost:3000/lottothaiset/set4")
      .then((res) => res.json())
      .then((data) => (this.stockset4 = data))
      .catch((err) => console.log(err.message));
    //5
    fetch("http://localhost:3000/lottothaiset/set5")
      .then((res) => res.json())
      .then((data) => (this.stockset5 = data))
      .catch((err) => console.log(err.message));
    //6
    fetch("http://localhost:3000/lottothaiset/set6")
      .then((res) => res.json())
      .then((data) => (this.stockset6 = data))
      .catch((err) => console.log(err.message));
    //7
    fetch("http://localhost:3000/lottothaiset/set7")
      .then((res) => res.json())
      .then((data) => (this.stockset7 = data))
      .catch((err) => console.log(err.message));
    //8
    fetch("http://localhost:3000/lottothaiset/set8")
      .then((res) => res.json())
      .then((data) => (this.stockset8 = data))
      .catch((err) => console.log(err.message));
    //9
    fetch("http://localhost:3000/lottothaiset/set9")
      .then((res) => res.json())
      .then((data) => (this.stockset9 = data))
      .catch((err) => console.log(err.message));
    //10
    fetch("http://localhost:3000/lottothaiset/set10")
      .then((res) => res.json())
      .then((data) => (this.stockset10 = data))
      .catch((err) => console.log(err.message));
    //11
    fetch("http://localhost:3000/lottothaiset/set11")
      .then((res) => res.json())
      .then((data) => (this.stockset11 = data))
      .catch((err) => console.log(err.message));
    //12
    fetch("http://localhost:3000/lottothaiset/set12")
      .then((res) => res.json())
      .then((data) => (this.stockset12 = data))
      .catch((err) => console.log(err.message));
  },

  components: {
    Clock,
  },
};
</script>

<style></style>
<template>
  <v-container>
    <v-row>
      <!-- หวยรัฐ -->
      <div class="container">
        <div class="row">
          <div class="col">
            <v-card class="rounded-xl">
              <template>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <div class="d-flex justify-start mb-6 mt-3">
                        <img
                          src="@/assets/icons/088-thailand.png"
                          width="50"
                          class="ml-2"
                        />
                        <div></div>
                        <v-chip class="ma-2" color="success" outlined>
                          <img src="@/assets/icons/005-gamble.png" width="50" />
                          หวยหุ้นต่างประเทศ {{ $store.state.datestocklottery }}
                        </v-chip>
                      </div>
                      <Clock></Clock>
                      <!-- <h1 v-if="localTime === a">{{ a }}</h1> -->
                      <tr>
                        <th>หวยหุ้นต่างประเทศ</th>
                      </tr>
                    </thead>
                    <v-card>
                      <v-container grid-list-xs>
                        <v-card>
                          <div class="row">
                            <div class="col ma-3">
                              <span
                                v-for="setlottoset in setlotto"
                                :key="setlottoset"
                              >
                                {{ setlottoset.name }}
                                <img :src="setlottoset.img" width="30" />
                              </span>
                            </div>
                          </div>
                        </v-card>
                        <v-card>
                          <table class="table">
                            <caption>
                              หวยหุ้นต่างประเทศ
                            </caption>
                            <thead>
                              <tr>
                                <th scope="col">หวยหุ้น</th>
                                <th scope="col">3ตัวบน</th>
                                <th scope="col">2ตัวล่าง</th>
                              </tr>
                            </thead>
                            <!-- หุ้นเกาหลี  1 -->
                            <tbody>
                              <tr
                                v-for="stockset1 in stockset1"
                                :key="stockset1"
                              >
                                <th scope="row">
                                  {{ stockset1.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset1.datestart }} ออกผล |
                                    {{ stockset1.dateend }}</v-chip
                                  >
                                </th>
                                <td
                                  v-if="
                                    (a =
                                      stockset1.bet3up_1 === 0
                                        ? 'รอผล'
                                        : stockset1.bet3up_1)
                                  "
                                >
                                  {{ a }}
                                </td>
                                <td
                                  v-if="
                                    (a =
                                      $store.state.lottostocksum1 === 0
                                        ? 'รอผล'
                                        : $store.state.lottostocksum1)
                                  "
                                >
                                  {{ a }}
                                </td>
                              </tr>
                              <!--  นิเคอิรอบเช้า  2 -->
                              <tr
                                v-for="stockset2 in stockset2"
                                :key="stockset2"
                              >
                                <th scope="row">
                                  {{ stockset2.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset2.datestart }} ออกผล |
                                    {{ stockset2.dateend }}</v-chip
                                  >
                                </th>
                                <td
                                  v-if="
                                    (a =
                                      stockset2.bet3up_1 === 0
                                        ? 'รอผล'
                                        : stockset2.bet3up_1)
                                  "
                                >
                                  {{ a }}
                                </td>
                                <td
                                  v-if="
                                    (a =
                                      $store.state.lottostocksum2 === 0
                                        ? 'รอผล'
                                        : $store.state.lottostocksum2)
                                  "
                                >
                                  {{ a }}
                                </td>
                              </tr>
                              <!--  นิเคอิรอบบ่าย 3 -->
                              <tr
                                v-for="stockset3 in stockset3"
                                :key="stockset3"
                              >
                                <th scope="row">
                                  {{ stockset3.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset3.datestart }} ออกผล |
                                    {{ stockset3.dateend }}</v-chip
                                  >
                                </th>
                                <td
                                  v-if="
                                    (a =
                                      stockset3.bet3up_1 === 0
                                        ? 'รอผล'
                                        : stockset3.bet3up_1)
                                  "
                                >
                                  {{ a }}
                                </td>
                                <td
                                  v-if="
                                    (a =
                                      $store.state.lottostocksum3 === 0
                                        ? 'รอผล'
                                        : $store.state.lottostocksum3)
                                  "
                                >
                                  {{ a }}
                                </td>
                              </tr>

                              <!--  ฮั่งเส็งรอบเช้า 4 -->
                              <tr
                                v-for="stockset4 in stockset4"
                                :key="stockset4"
                              >
                                <th scope="row">
                                  {{ stockset4.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset4.datestart }} ออกผล |
                                    {{ stockset4.dateend }}</v-chip
                                  >
                                </th>
                                <td
                                  v-if="
                                    (a =
                                      stockset4.bet3up_1 === 0
                                        ? 'รอผล'
                                        : stockset4.bet3up_1)
                                  "
                                >
                                  {{ a }}
                                </td>
                                <td
                                  v-if="
                                    (a =
                                      $store.state.lottostocksum4 === 0
                                        ? 'รอผล'
                                        : $store.state.lottostocksum4)
                                  "
                                >
                                  {{ a }}
                                </td>
                              </tr>
                              <!--  ฮั่งเส็งรอบบ่าย 5 -->
                              <tr
                                v-for="stockset5 in stockset5"
                                :key="stockset5"
                              >
                                <th scope="row">
                                  {{ stockset5.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset5.datestart }} ออกผล |
                                    {{ stockset5.dateend }}</v-chip
                                  >
                                </th>
                                <td
                                  v-if="
                                    (a =
                                      stockset5.bet3up_1 === 0
                                        ? 'รอผล'
                                        : stockset5.bet3up_1)
                                  "
                                >
                                  {{ a }}
                                </td>
                                <td
                                  v-if="
                                    (a =
                                      $store.state.lottostocksum5 === 0
                                        ? 'รอผล'
                                        : $store.state.lottostocksum5)
                                  "
                                >
                                  {{ a }}
                                </td>
                              </tr>
                              <!--  จีนรอบเช้า  6-->
                              <tr
                                v-for="stockset6 in stockset6"
                                :key="stockset6"
                              >
                                <th scope="row">
                                  {{ stockset6.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset6.datestart }} ออกผล |
                                    {{ stockset6.dateend }}</v-chip
                                  >
                                </th>
                                <td
                                  v-if="
                                    (a =
                                      stockset6.bet3up_1 === 0
                                        ? 'รอผล'
                                        : stockset6.bet3up_1)
                                  "
                                >
                                  {{ a }}
                                </td>
                                <td
                                  v-if="
                                    (a =
                                      $store.state.lottostocksum6 === 0
                                        ? 'รอผล'
                                        : $store.state.lottostocksum6)
                                  "
                                >
                                  {{ a }}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </v-card>
                      </v-container>
                    </v-card>
                  </template>
                </v-simple-table>
              </template>
            </v-card>
          </div>
        </div>
      </div>
    </v-row>
  </v-container>
</template>
