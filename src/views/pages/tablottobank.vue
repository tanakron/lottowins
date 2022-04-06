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
                  <h4 class="text-center">หวยรัฐบาลไทย</h4>
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
                        <div class="card-body text-success">
                          <h5 class="card-title">ผลการออกรางวัล</h5>
                          <v-chip color="success">
                            <p class="card-text">970618</p></v-chip
                          >
                        </div>
                        <!-- //สามตัวหน้า -->
                        <div class="card-body text-success">
                          <h5 class="card-title">สามตัวหน้า</h5>
                          <v-chip color="success" small>
                            <p class="card-text">738</p></v-chip
                          >

                          <v-chip color="success" small>
                            <p class="card-text">391</p></v-chip
                          >
                        </div>
                        <!-- //สามตัวหลัง -->
                        <div class="card-body text-success">
                          <h5 class="card-title">สามตัวหลัง</h5>
                          <v-chip color="success" small>
                            <p class="card-text">578</p></v-chip
                          >

                          <v-chip color="success" small>
                            <p class="card-text">870</p></v-chip
                          >
                        </div>
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
          name: "1 เมษายน 2565",
          lottothai: "970618",
          lottothaibet2up: `18`,
          lottothaibet2down: `10`,
          lottothaibet3upp1: `333`,
          lottothaibet3upp2: `391`,
          lottothaibet3downp1: `578`,
          lottothaibet3downp2: `870`,
        },
        {
          name: "16 เมษายน 2565",
          lottothai: "รอผล",
          lottothaibet2up: `รอผล`,
          lottothaibet2down: `รอผล`,
          lottothaibet3upp1: `รอผล`,
          lottothaibet3upp2: `รอผล`,
          lottothaibet3downp1: `รอผล`,
          lottothaibet3downp2: `รอผล`,
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
