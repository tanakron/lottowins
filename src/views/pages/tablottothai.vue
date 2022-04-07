<template>
  <v-container>
    <v-row>
      <!-- หวยรัฐ -->
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <v-card class="rounded-xl">
              <template>
                <v-card v-for="datatabs in datatab" :key="datatabs">
                  <v-card-title> </v-card-title>
                  <h4 class="text-center">หวยรัฐบาลไทย</h4>
                  <Clock></Clock>

                  <div class="container">
                    <div class="row">
                      <div class="card border-success text-center">
                        <div class="card-header bg-transparent border-success">
                          <img
                            src="@/assets/icons/lotto.png"
                            class="img-circle"
                          />
                          {{ datatabs.lottoday }}
                        </div>
                        <div class="card-body text-success">
                          <h5 class="card-title">ผลการออกรางวัล</h5>
                          <v-chip color="success">
                            <p class="card-text">
                              {{ datatabs.type_one }}
                            </p></v-chip
                          >
                        </div>
                        <!-- //สามตัวหน้า -->
                        <div class="row">
                          <div class="col-6">
                            <h5 class="card-title">สามตัวหน้า</h5>
                            <v-chip color="success" small>
                              <p class="card-text">{{ datatabs.bet3up_1 }}</p>
                            </v-chip>
                            <v-chip color="success" small>
                              <p class="card-text">
                                {{ datatabs.bet3up_2 }}
                              </p></v-chip
                            >
                          </div>
                          <div class="col-6">
                            <h5 class="card-title">สามตัวหลัง</h5>
                            <v-chip color="success" small>
                              <p class="card-text">
                                {{ datatabs.bet3down_1 }}
                              </p></v-chip
                            >

                            <v-chip color="success" small>
                              <p class="card-text">
                                {{ datatabs.bet3down_2 }}
                              </p></v-chip
                            >
                          </div>
                        </div>
                        <div class="card-body text-success"></div>
                        <!-- //สามตัวหลัง -->

                        <div class="card-body text-success">
                          <h5 class="card-title">สองตัวล่าง</h5>
                          <v-chip color="success" small>
                            <p class="card-text">
                              {{ datatabs.bet2down }}
                            </p></v-chip
                          >
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
// import Counttime from "@/components/Counttime.vue";
export default {
  data() {
    return {
      datatab: [],
      // lottothaiday: [
      //   {
      //     name: "16 มีนาคม 2565",
      //     lottothai: `607064`,
      //     lottothaibet2up: `18`,
      //     lottothaibet2down: `08`,
      //     lottothaibet3upp1: `333`,
      //     lottothaibet3upp2: `350`,
      //     lottothaibet3downp1: `573`,
      //     lottothaibet3downp2: `606`,
      //   },
      //   {
      //     name: "1 เมษายน 2565",
      //     lottothai: "970618",
      //     lottothaibet2up: `18`,
      //     lottothaibet2down: `10`,
      //     lottothaibet3upp1: `333`,
      //     lottothaibet3upp2: `391`,
      //     lottothaibet3downp1: `578`,
      //     lottothaibet3downp2: `870`,
      //   },
      //   {
      //     name: "16 เมษายน 2565",
      //     lottothai: "รอผล",
      //     lottothaibet2up: `รอผล`,
      //     lottothaibet2down: `รอผล`,
      //     lottothaibet3upp1: `รอผล`,
      //     lottothaibet3upp2: `รอผล`,
      //     lottothaibet3downp1: `รอผล`,
      //     lottothaibet3downp2: `รอผล`,
      //   },
      // ],
    };
  },
  components: {
    Clock,
  },
  mounted() {
    fetch("http://localhost:3000/lottothaiset/setday")
      .then((res) => res.json())
      .then((data) => (this.datatab = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
