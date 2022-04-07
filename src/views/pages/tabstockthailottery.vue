<template>
  <v-container>
    <v-row>
      <!-- หวยรัฐ -->
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <v-card class="rounded-xl">
              <template>
                <v-card>
                  <v-card-title> </v-card-title>
                  <h4 class="text-center">หวย ลาว</h4>
                  <Clock></Clock>
                  <div class="container">
                    <div class="row">
                      <div class="card border-success text-center">
                        <div class="card-header bg-transparent border-success">
                          <img
                            src="@/assets/icons/lotto.png"
                            class="img-circle"
                          />
                          รอบวันที่ 1 เมษายน 2565
                        </div>
                        <span v-for="lotto in lottothaiday" :key="lotto">
                          <img :src="lotto.imgloa" width="30" />
                          {{ lotto.typeloa }}
                        </span>

                        <h5 class="card-title">ผลการออกรางวัล</h5>
                        <p v-for="lotto in lottothaiday" :key="lotto">
                          {{ lotto.lottothailoa }}
                        </p>

                        <div class="row">
                          <div class="col-6">
                            <h5 class="card-title">สามตัวบน</h5>
                            <p v-for="lotto in lottothaiday" :key="lotto">
                              {{ lotto.lottothaibet2uploa }}
                            </p>
                          </div>
                          <div class="col-6">
                            <h5 class="card-title">สองตัวล่าง</h5>
                            <p v-for="lotto in lottothaiday" :key="lotto">
                              {{ lotto.lottothaibet2downloa }}
                            </p>
                          </div>
                        </div>

                        <div
                          class="card-footer bg-transparent border-success"
                        ></div>
                      </div>
                    </div>
                  </div>
                </v-card>
              </template>
            </v-card>
          </div>
          <div class="col-md-6">
            <v-card class="rounded-xl">
              <template>
                <v-card>
                  <v-card-title> </v-card-title>
                  <h4 class="text-center">หวย ฮานอย</h4>
                  <Clock></Clock>
                  <div class="container">
                    <div class="row">
                      <div class="card border-success text-center">
                        <div class="card-header bg-transparent border-success">
                          <img
                            src="@/assets/icons/lotto.png"
                            class="img-circle"
                          />
                          รอบวันที่ 1 เมษายน 2565
                        </div>
                        <span v-for="lotto in lottothaiday" :key="lotto">
                          <img :src="lotto.imghanoi" width="30" />
                          {{ lotto.typehanoi }}
                        </span>

                        <h5 class="card-title">ผลการออกรางวัล</h5>
                        <p v-for="lotto in lottothaiday" :key="lotto">
                          {{ lotto.lottothaihanoi }}
                        </p>
                        <div class="row">
                          <div class="col-6">
                            <h5 class="card-title">สองตัวบน</h5>
                            <p v-for="lotto in lottothaiday" :key="lotto">
                              {{ lotto.lottothaibet2uphanoi }}
                            </p>
                          </div>
                          <div class="col-6">
                            <h5 class="card-title">สองตัวล่าง</h5>
                            <p v-for="lotto in lottothaiday" :key="lotto">
                              {{ lotto.lottothaibet2downhanoi }}
                            </p>
                          </div>
                        </div>
                        <div
                          class="card-footer bg-transparent border-success"
                        ></div>
                      </div>
                    </div>
                  </div>
                </v-card>
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
      lottothaiday: [
        {
          typeloa: "หวยลาว",
          imgloa: require("@/assets/icons/laos.png"),
          nameloa: "16 มีนาคม 2565",
          lottothailoa: `973124`,
          lottothaibet2uploa: `24`,
          lottothaibet2downloa: `08`,
          lottothaibet3upp1loa: `124`,
          lottothaibet3upp2loa: `350`,
          lottothaibet3downp1loa: `573`,
          lottothaibet3downp2loa: `606`,
        },

        {
          typehanoi: "หวยฮานอย",
          imghanoi: require("@/assets/icons/vietnam.png"),
          namehanoi: "16 มีนาคม 2565",
          lottothaihanoi: `607064`,
          lottothaibet2uphanoi: `18`,
          lottothaibet2downhanoi: `08`,
          lottothaibet3upp1hanoi: `333`,
          lottothaibet3upp2hanoi: `350`,
          lottothaibet3downp1hanoi: `573`,
          lottothaibet3downp2hanoi: `606`,
        },
        {
          typehanoivip: "หวยฮานอย VIP",
          imghanoivip: require("@/assets/icons/vietnam.png"),
          namehanoivip: "16 มีนาคม 2565",
          lottothaihanoivip: `607064`,
          lottothaibet2uphanoivip: `18`,
          lottothaibet2downhanoivip: `08`,
          lottothaibet3upp1hanoivip: `333`,
          lottothaibet3upp2hanoivip: `350`,
          lottothaibet3downp1hanoivip: `573`,
          lottothaibet3downp2hanoivip: `606`,
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
