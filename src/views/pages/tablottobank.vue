<template>
  <v-container>
    <v-row>
      <!-- หวยรัฐ -->
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <v-card class="rounded-xl" dark>
              <template>
                <v-card v-for="datatabs in datatab" :key="datatabs.index">
                  <v-card-title> </v-card-title>
                  <h4 class="text-center">
                    <img src="@/assets/imgs/aom.png" width="50" class="ml-2" />
                    หวยธนาคาร
                  </h4>

                  <div class="container">
                    <div class="row">
                      <div class="card border-success text-center">
                        <div
                          class="card-header bg-transparent border-success text-success"
                        >
                          <img
                            src="@/assets/icons/lotto.png"
                            class="img-circle"
                          />
                          {{ datatabs.lottoday }}
                        </div>
                        <div class="card-body text-success">
                          <h5 class="card-title">
                            <img src="@/assets/imgs/aom.png" width="30" />ออมสิน
                          </h5>
                          <v-chip color="success">
                            <p class="card-text">
                              {{ datatabs.type_one }}
                            </p></v-chip
                          >
                        </div>

                        <div class="row">
                          <div class="col-6">
                            <h5 class="card-title text-success">สามตัวบน</h5>
                            <v-chip color="success" small>
                              <p class="card-text">{{ datatabs.bet3up_1 }}</p>
                            </v-chip>
                          </div>
                          <div class="col-6">
                            <h5 class="card-title text-success">สองตัวล่าง</h5>
                            <v-chip color="success" small>
                              <p class="card-text">
                                {{ datatabs.bet3down_1 }}
                              </p></v-chip
                            >
                          </div>
                        </div>
                        <div class="card-body text-success">
                          <v-divider></v-divider>
                        </div>
                        <div>
                          <h5 class="card-title text-success">
                            <img src="@/assets/imgs/tks.png" width="40" /> ธกส
                          </h5>
                          <v-chip color="success">
                            <p class="card-text">
                              {{ datatabs.type_one }}
                            </p></v-chip
                          >
                          <div class="row">
                            <div class="col-6">
                              <h5 class="card-title text-success">สามตัวบน</h5>
                              <v-chip color="success" small>
                                <p class="card-text">{{ datatabs.bet3up_1 }}</p>
                              </v-chip>
                            </div>
                            <div class="col-6">
                              <h5 class="card-title text-success">
                                สองตัวล่าง
                              </h5>
                              <v-chip color="success" small>
                                <p class="card-text">
                                  {{ datatabs.bet3down_1 }}
                                </p></v-chip
                              >
                            </div>
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
// import Clock from "@/components/Clock.vue";
// import Counttime from "@/components/Counttime.vue";
export default {
  data() {
    return {
      datatab: [],
    };
  },
  components: {
    // Clock,
  },
  async mounted() {
    await fetch("http://localhost:3000/lottothaiset/setday")
      .then((res) => res.json())
      .then((data) => (this.datatab = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
