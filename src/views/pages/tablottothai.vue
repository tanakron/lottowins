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
                  <v-card-title> <h3>หวยรัฐบาลไทย</h3> </v-card-title>

                  <div class="container">
                    <div class="d-flex bd-highlight"></div>
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
export default {
  data() {
    return {
      time: "",
      desserts: [
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
};
</script>

<style></style>
