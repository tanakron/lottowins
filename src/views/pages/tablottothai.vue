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
                          หวยรัฐ {{ $store.state.datelottothai }}
                        </v-chip>
                      </div>

                      <tr>
                        <th class="text-left">หวยรัฐบาลไทย</th>
                        <th class="text-left">2ตัวบน</th>
                        <th class="text-left">2ตัวล่าง</th>
                        <th class="text-left">3ตัวหน้า</th>
                        <th class="text-left">3ตัวล่าง</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>
                          {{ item.name }}
                          <v-chip class="blue darken-4 white--text">
                            {{ item.lottothai }}</v-chip
                          >
                        </td>
                        <td>{{ item.lottothaibet2up }}</td>
                        <td>{{ item.lottothaibet2down }}</td>
                        <td>
                          {{ item.lottothaibet3upp1 }},{{
                            item.lottothaibet3upp2
                          }}
                        </td>

                        <td>
                          {{ item.lottothaibet3downp1 }},{{
                            item.lottothaibet3downp2
                          }}
                        </td>
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
