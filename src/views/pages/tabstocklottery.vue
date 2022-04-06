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
                        <v-chip class="ma-2" color="success" outlined>
                          <img src="@/assets/icons/005-gamble.png" width="50" />
                          หวยหุ้นต่างประเทศ {{ $store.state.datestocklottery }}
                        </v-chip>
                      </div>

                      <tr>
                        <th>หวยหุ้นต่างประเทศ</th>
                        <th class="text-left">2ตัวบน</th>
                        <th class="text-left">2ตัวล่าง</th>
                        <th class="text-left">3ตัวบน</th>
                        <th class="text-left">3ตัวล่าง</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>
                          <img :src="item.img" width="30" /> {{ item.name }}
                          <Clock></Clock>
                        </td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.calories }}</td>
                      </tr>
                    </tbody>
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

<script>
import Clock from "@/components/Clock.vue";
export default {
  data() {
    return {
      desserts: [
        {
          name: "หุ้นเกาหลี",
          calories: 159,
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
  components: {
    Clock,
  },
};
</script>

<style></style>
