<template>
  <v-container>
    <v-row>
      <!-- หวยรัฐ -->
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <v-card class="rounded-xl">
              <template>
                <v-card>
                  <v-card-title> </v-card-title>
                  <h4 class="text-center">หวย</h4>
                  <Clock></Clock>
                  <div class="container">
                    <div class="row">
                      <div class="card border-success">
                        <div class="card-header bg-transparent border-success">
                          <img
                            src="@/assets/icons/lotto.png"
                            class="img-circle"
                          />
                          รอบวันที่ 1 เมษายน 2565
                        </div>
                        <div
                          class="card-body text-success"
                          v-for="lotto in lottothaiday"
                          :key="lotto"
                        >
                          <img :src="lotto.img" width="30" />
                          {{ lotto.type }}
                          <h5 class="card-title">ผลการออกรางวัล</h5>

                          <v-chip color="success">
                            <p class="card-text">970618</p></v-chip
                          >
                          <!-- //สามตัวหน้า -->
                        </div>

                        <!-- //สามตัวหลัง -->

                        <div class="card-footer bg-transparent border-success">
                          <p class="card-text">1 เมษายน 2565</p>
                        </div>
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
          type: "หวยลาว",
          img: require("@/assets/icons/laos.png"),
          name: "16 มีนาคม 2565",
          lottothai: `607064`,
          lottothaibet2up: `18`,
          lottothaibet2down: `08`,
          lottothaibet3upp1: `333`,
          lottothaibet3upp2: `350`,
          lottothaibet3downp1: `573`,
          lottothaibet3downp2: `606`,
        },

        {
          type: "หวยฮานอย",
          img: require("@/assets/icons/vietnam.png"),
          name: "16 มีนาคม 2565",
          lottothai: `607064`,
          lottothaibet2up: `18`,
          lottothaibet2down: `08`,
          lottothaibet3upp1: `333`,
          lottothaibet3upp2: `350`,
          lottothaibet3downp1: `573`,
          lottothaibet3downp2: `606`,
        },
        {
          type: "หวยฮานอย VIP",
          img: require("@/assets/icons/vietnam.png"),
          name: "16 มีนาคม 2565",
          lottothai: `607064`,
          lottothaibet2up: `18`,
          lottothaibet2down: `08`,
          lottothaibet3upp1: `333`,
          lottothaibet3upp2: `350`,
          lottothaibet3downp1: `573`,
          lottothaibet3downp2: `606`,
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
