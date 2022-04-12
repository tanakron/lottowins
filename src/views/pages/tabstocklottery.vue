<script>
// import moment from "moment";
// import Clock from "@/components/Clock.vue";
export default {
  methods: {
    showLocaleTime: function () {
      // var time = this;
      // setInterval(function () {
      //   time.localTime = new Date().toLocaleTimeString();
      // }, 1000);
    },
  },

  data() {
    return {
      localTime: false,
      stockset1: [{ img: require("@/assets/icons/southkorea.png") }],
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
      stockset13: [],
      stockset14: [],
      stockset15: [],
      setlotto: [
        {
          name: "หุ้นเกาหลี",
        },
        {
          name: "นิเคอิรอบเช้า",

          img: require("@/assets/icons/japan.png"),
        },
        {
          name: "นิเคอิรอบบ่าย",

          img: require("@/assets/icons/japan.png"),
        },
        {
          name: "ฮั่งเส็งรอบเช้า",

          img: require("@/assets/icons/hongkong.png"),
        },
        {
          name: "ฮั่งเส็งรอบบ่าย",

          img: require("@/assets/icons/hongkong.png"),
        },
        {
          name: "จีนรอบเช้า",

          img: require("@/assets/icons/china.png"),
        },
        {
          name: "จีนรอบบ่าย",

          img: require("@/assets/icons/china.png"),
        },
        {
          name: "หุ้นไต้หวัน",

          img: require("@/assets/icons/taiwan.png"),
        },
        {
          name: "หุ้นสิงคโปร์",

          img: require("@/assets/icons/singapore.png"),
        },
        {
          name: "หุ้นอียิปต์",

          img: require("@/assets/icons/egypt.png"),
        },
        {
          name: "หุ้นเยอรมัน",

          img: require("@/assets/icons/germany.png"),
        },
        {
          name: "หุ้นอังกฤษ",

          img: require("@/assets/icons/england.png"),
        },
        {
          name: "หุ้นรัสเซีย",

          img: require("@/assets/icons/russia.png"),
        },
        {
          name: "หุ้นอินเดีย",

          img: require("@/assets/icons/india.png"),
        },
        {
          name: "หุ้นดาวน์โจน",

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

    //13
    fetch("http://localhost:3000/lottothaiset/set13")
      .then((res) => res.json())
      .then((data) => (this.stockset13 = data))
      .catch((err) => console.log(err.message));
    //14
    fetch("http://localhost:3000/lottothaiset/set14")
      .then((res) => res.json())
      .then((data) => (this.stockset14 = data))
      .catch((err) => console.log(err.message));
    //15
    fetch("http://localhost:3000/lottothaiset/set15")
      .then((res) => res.json())
      .then((data) => (this.stockset15 = data))
      .catch((err) => console.log(err.message));
  },

  components: {
    // Clock,
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
                <v-simple-table dark class="white--text">
                  <template v-slot:default>
                    <thead>
                      <div class="d-flex justify-start mb-6 mt-3">
                        <img
                          src="@/assets/icons/088-thailand.png"
                          width="50"
                          class="ml-2"
                        />
                        <div>
                          <!-- <h1 v-if="(localTime = !localTime)">
                            {{ localTime }}
                          </h1> -->
                        </div>
                        <v-chip class="ma-2" color="success" outlined>
                          <img src="@/assets/icons/005-gamble.png" width="50" />
                          <span class="material-icons"> language </span>
                          หวยหุ้นต่างประเทศ {{ $store.state.datestocklottery }}
                        </v-chip>
                      </div>

                      <tr>
                        <th>หวยหุ้นต่างประเทศ</th>
                      </tr>
                    </thead>
                    <v-card>
                      <v-container grid-list-xs>
                        <v-card>
                          <div class="row">
                            <div class="col ma-3">
                              <!-- <span
                                v-for="setlottoset in setlotto"
                                :key="setlottoset.index"
                              >
                                {{ setlottoset.name }}
                                <img :src="setlottoset.img" width="30" />
                              </span> -->
                            </div>
                          </div>
                        </v-card>
                        <v-card>
                          <table class="table white--text">
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
                                :key="stockset1.index"
                              >
                                <th scope="row">
                                  <img :src="stockset1.img" width="30" />
                                  {{ stockset1.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset1.datestart }} ออกผล |
                                    {{ stockset1.dateend }}</v-chip
                                  >
                                </th>
                                <td>
                                  {{ $store.state.lottostocksum1up3 || "รอผล" }}
                                </td>
                                <td>
                                  {{ $store.state.lottostocksum1 || "รอผล" }}
                                </td>
                              </tr>
                              <!--  นิเคอิรอบเช้า  2 -->
                              <tr
                                v-for="stockset2 in stockset2"
                                :key="stockset2.index"
                              >
                                <th scope="row">
                                  {{ stockset2.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset2.datestart }} ออกผล |
                                    {{ stockset2.dateend }}</v-chip
                                  >
                                </th>
                                <td>
                                  {{ $store.state.lottostocksum2up3 || "รอผล" }}
                                </td>
                                <td>
                                  {{ $store.state.lottostocksum2 || "รอผล" }}
                                </td>
                              </tr>
                              <!--  นิเคอิรอบบ่าย 3 -->
                              <tr
                                v-for="stockset3 in stockset3"
                                :key="stockset3.index"
                              >
                                <th scope="row">
                                  {{ stockset3.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset3.datestart }} ออกผล |
                                    {{ stockset3.dateend }}</v-chip
                                  >
                                </th>
                                <td>
                                  {{ $store.state.lottostocksum3up3 || "รอผล" }}
                                </td>
                                <td>
                                  {{ $store.state.lottostocksum3 || "รอผล" }}
                                </td>
                              </tr>

                              <!--  ฮั่งเส็งรอบเช้า 4 -->
                              <tr
                                v-for="stockset4 in stockset4"
                                :key="stockset4.index"
                              >
                                <th scope="row">
                                  {{ stockset4.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset4.datestart }} ออกผล |
                                    {{ stockset4.dateend }}</v-chip
                                  >
                                </th>
                                <td>
                                  {{ $store.state.lottostocksum4up3 || "รอผล" }}
                                </td>
                                <td>
                                  {{ $store.state.lottostocksum4 || "รอผล" }}
                                </td>
                              </tr>
                              <!--  ฮั่งเส็งรอบบ่าย 5 -->
                              <tr
                                v-for="stockset5 in stockset5"
                                :key="stockset5.index"
                              >
                                <th scope="row">
                                  {{ stockset5.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset5.datestart }} ออกผล |
                                    {{ stockset5.dateend }}</v-chip
                                  >
                                </th>
                                <td>
                                  {{ $store.state.lottostocksum5up3 || "รอผล" }}
                                </td>
                                <td>
                                  {{ $store.state.lottostocksum5 || "รอผล" }}
                                </td>
                              </tr>
                              <!--  จีนรอบเช้า  6-->
                              <tr
                                v-for="stockset6 in stockset6"
                                :key="stockset6.index"
                              >
                                <th scope="row">
                                  {{ stockset6.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset6.datestart }} ออกผล |
                                    {{ stockset6.dateend }}</v-chip
                                  >
                                </th>
                                <td>
                                  {{ $store.state.lottostocksum6up3 || "รอผล" }}
                                </td>
                                <td>
                                  {{ $store.state.lottostocksum6 || "รอผล" }}
                                </td>
                              </tr>
                              <!--  จีนรอบบ่าย  7 -->
                              <tr
                                v-for="stockset7 in stockset7"
                                :key="stockset7.index"
                              >
                                <th scope="row">
                                  {{ stockset7.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset7.datestart }} ออกผล |
                                    {{ stockset7.dateend }}</v-chip
                                  >
                                </th>
                                <td>
                                  {{ $store.state.lottostocksum7up3 || "รอผล" }}
                                </td>
                                <td>
                                  {{ $store.state.lottostocksum7 || "รอผล" }}
                                </td>
                              </tr>

                              <!--  หุ้นไต้หวัน 8 -->
                              <tr
                                v-for="stockset8 in stockset8"
                                :key="stockset8.index"
                              >
                                <th scope="row">
                                  {{ stockset8.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset8.datestart }} ออกผล |
                                    {{ stockset8.dateend }}</v-chip
                                  >
                                </th>
                                <td>
                                  {{ $store.state.lottostocksum8up3 || "รอผล" }}
                                </td>
                                <td>
                                  {{ $store.state.lottostocksum8 || "รอผล" }}
                                </td>
                              </tr>
                              <!--  หุ้นสิงคโปร์ 9 -->
                              <tr
                                v-for="stockset9 in stockset9"
                                :key="stockset9.index"
                              >
                                <th scope="row">
                                  {{ stockset9.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset9.datestart }} ออกผล |
                                    {{ stockset9.dateend }}</v-chip
                                  >
                                </th>
                                <td>
                                  {{ $store.state.lottostocksum9up3 || "รอผล" }}
                                </td>
                                <td>
                                  {{ $store.state.lottostocksum9 || "รอผล" }}
                                </td>
                              </tr>
                              <!--  หุ้นอียิปต์10 -->
                              <tr
                                v-for="stockset10 in stockset10"
                                :key="stockset10.index"
                              >
                                <th scope="row">
                                  {{ stockset10.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset10.datestart }} ออกผล |
                                    {{ stockset10.dateend }}</v-chip
                                  >
                                </th>
                                <td>
                                  {{
                                    $store.state.lottostocksum10up3 || "รอผล"
                                  }}
                                </td>
                                <td>
                                  {{ $store.state.lottostocksum10 || "รอผล" }}
                                </td>
                              </tr>
                              <!--  หุ้นเยอรมัน11 -->
                              <tr
                                v-for="stockset11 in stockset11"
                                :key="stockset11.index"
                              >
                                <th scope="row">
                                  {{ stockset11.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset11.datestart }} ออกผล |
                                    {{ stockset11.dateend }}</v-chip
                                  >
                                </th>
                                <td>
                                  {{
                                    $store.state.lottostocksum11up3 || "รอผล"
                                  }}
                                </td>
                                <td>
                                  {{ $store.state.lottostocksum11 || "รอผล" }}
                                </td>
                              </tr>

                              <!--  หุ้นอังกฤษ 12 -->
                              <tr
                                v-for="stockset12 in stockset12"
                                :key="stockset12.index"
                              >
                                <th scope="row">
                                  {{ stockset12.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset12.datestart }} ออกผล |
                                    {{ stockset12.dateend }}</v-chip
                                  >
                                </th>
                                <td>
                                  {{
                                    $store.state.lottostocksum12up3 || "รอผล"
                                  }}
                                </td>
                                <td>
                                  {{ $store.state.lottostocksum12 || "รอผล" }}
                                </td>
                              </tr>

                              <!--  หุ้นรัสเซีย 13 -->
                              <tr
                                v-for="stockset13 in stockset13"
                                :key="stockset13.index"
                              >
                                <th scope="row">
                                  {{ stockset13.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset13.datestart }} ออกผล |
                                    {{ stockset13.dateend }}</v-chip
                                  >
                                </th>
                                <td>
                                  {{
                                    $store.state.lottostocksum13up3 || "รอผล"
                                  }}
                                </td>
                                <td>
                                  {{ $store.state.lottostocksum13 || "รอผล" }}
                                </td>
                              </tr>

                              <!--  หุ้นอินเดีย 14 -->
                              <tr
                                v-for="stockset14 in stockset14"
                                :key="stockset14.index"
                              >
                                <th scope="row">
                                  {{ stockset14.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset14.datestart }} ออกผล |
                                    {{ stockset14.dateend }}</v-chip
                                  >
                                </th>
                                <td>
                                  {{
                                    $store.state.lottostocksum14up3 || "รอผล"
                                  }}
                                </td>
                                <td>
                                  {{ $store.state.lottostocksum14 || "รอผล" }}
                                </td>
                              </tr>
                              <!--  หุ้นดาวน์โจน 15 -->
                              <tr
                                v-for="stockset15 in stockset15"
                                :key="stockset15.index"
                              >
                                <th scope="row">
                                  {{ stockset15.type_name }}
                                  <v-chip color="red" class="white--text">
                                    ปิดรับ | {{ stockset15.datestart }} ออกผล |
                                    {{ stockset15.dateend }}</v-chip
                                  >
                                </th>
                                <td>
                                  {{
                                    $store.state.lottostocksum15up3 || "รอผล"
                                  }}
                                </td>
                                <td>
                                  {{ $store.state.lottostocksum15 || "รอผล" }}
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
