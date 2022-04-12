<template>
  <v-container>
    <v-row>
      <!-- หวยรัฐ -->
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <v-card class="rounded-xl" dark>
              <template>
                <v-card>
                  <v-card-title> </v-card-title>
                  <h4 class="text-center">
                    <span v-for="imgloas in lottoloa" :key="imgloas.index">
                      <img :src="imgloas.imgloa" width="30" /> หวย ลาว</span
                    >
                  </h4>
                  <table class="table table-bordered table-dark">
                    <thead>
                      <tr>
                        <th scope="col">วันที่</th>

                        <th scope="col">3ตัวบน</th>
                        <th scope="col">2ตัวล่าง</th>
                      </tr>
                    </thead>
                    <tr v-for="typeloa in lottoloa" :key="typeloa.index">
                      <td height="60">
                        {{ typeloa.nameloa }}
                      </td>
                      <td>
                        {{ typeloa.lottothaibet2uploa || "รอผล" }}
                      </td>
                      <td>
                        {{ typeloa.lottothaibet2uploa || "รอผล" }}
                      </td>
                    </tr>
                  </table>
                </v-card>
              </template>
            </v-card>
          </div>
          <div class="col-md-6">
            <v-card class="rounded-xl" dark>
              <v-card>
                <v-card-title> </v-card-title>
                <h4 class="text-center">
                  <span v-for="imghanois in lottohanoi" :key="imghanois.index">
                    <img :src="imghanois.imghanoi" width="30" /> หวย
                    เวียดนาม</span
                  >
                </h4>
                <h4 class="text-center"></h4>
                <table class="table table-bordered table-dark">
                  <thead>
                    <tr>
                      <th scope="col">วันที่</th>
                      <th>หวย</th>
                      <th scope="col">3ตัวบน</th>
                      <th scope="col">2ตัวล่าง</th>
                    </tr>
                  </thead>
                  <tr v-for="typeloa in lottohanoi" :key="typeloa.index">
                    <td height="60">
                      {{ typeloa.namehanoi }}
                    </td>
                    <td>{{ typeloa.typehanoi }}</td>
                    <td>
                      {{ typeloa.lottothaibet2downhanoi || "รอผล" }}
                    </td>
                    <td>
                      {{ typeloa.lottothaibet3downp2hanoi || "รอผล" }}
                    </td>
                  </tr>
                  <tr v-for="typeloa in lottonanoivip" :key="typeloa.id">
                    <td height="60">
                      {{ typeloa.namehanoivip }}
                    </td>
                    <td>
                      {{ typeloa.typehanoivip }}
                    </td>
                    <td>
                      {{ typeloa.lottothaibet3upp1hanoivip || "รอผล" }}
                    </td>
                    <td>
                      {{ typeloa.lottothaibet2downhanoivip || "รอผล" }}
                    </td>
                  </tr>
                </table>
              </v-card>
            </v-card>
          </div>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
// import Clock from "@/components/Clock.vue";
export default {
  data() {
    return {
      lottoloa: [
        {
          id: 1,
          typeloa: "หวยลาว",
          imgloa: require("@/assets/icons/laos.png"),
          nameloa: "16 มีนาคม 2565",
          lottothailoa: `973124`,
          lottothaibet2uploa: `24`,
          lottothaibet3downp2loa: `606`,
        },
      ],
      lottohanoi: [
        {
          typehanoi: "หวยฮานอย",
          imghanoi: require("@/assets/icons/vietnam.png"),
          namehanoi: "16 มีนาคม 2565",
          lottothaihanoi: `607064`,
          lottothaibet2downhanoi: `08`,
          lottothaibet3downp2hanoi: `606`,
        },
      ],
      lottonanoivip: [
        {
          typehanoivip: "หวยฮานอย VIP",
          imghanoivip: require("@/assets/icons/vietnam.png"),
          namehanoivip: "16 มีนาคม 2565",
          lottothaihanoivip: `607064`,
          lottothaibet2downhanoivip: `08`,
          lottothaibet3upp1hanoivip: `333`,
        },
      ],

      lottonanoi4d: [
        {
          typehanoi4d: " หวยฮานอย 4D",
          imghanoi4d: require("@/assets/icons/vietnam.png"),
          namehanoi4d: "16 มีนาคม 2565",
          lottothaihanoi4d: `607064`,
          lottothaibet2uphanoi4d: `18`,
          lottothaibet2downhanoi4d: `08`,
          lottothaibet3upp1hanoi4d: `333`,
          lottothaibet3upp2hanoi4d: `350`,
          lottothaibet3downp1hanoi4d: `573`,
          lottothaibet3downp2hanoi4d: `606`,
        },
      ],

      lottonanoiEXTRA: [
        {
          typehanoiEXTRA: "หวยฮานอย EXTRA",
          imghanoiEXTRA: require("@/assets/icons/vietnam.png"),
          namehanoiEXTRA: "16 มีนาคม 2565",
          lottothaihanoiEXTRA: `607064`,
          lottothaibet2uphanoiEXTRA: `18`,
          lottothaibet2downhanoiEXTRA: `08`,
          lottothaibet3upp1hanoiEXTRA: `333`,
          lottothaibet3upp2hanoiEXTRA: `350`,
          lottothaibet3downp1hanoiEXTRA: `573`,
          lottothaibet3downp2hanoiEXTRA: `606`,
        },
      ],
    };
  },
  components: {
    // Clock,
  },
};
</script>

<style></style>
