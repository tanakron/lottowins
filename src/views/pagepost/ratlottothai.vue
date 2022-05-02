<template>
  <div class="d-flex justify-content-center ma-3">
    <v-card dark width="auto" height="auto" rounded="xl">
      <div class="col-md-12">
        <div class="continer">
          <template>
            <div>
              <div class="text-center mb-4">
                <v-btn color="primary" @click="alert = !alert">
                  รายการเล่น
                </v-btn>
              </div>
              <v-alert
                :value="alert"
                class="pa-6"
                color="info"
                dark
                border="top"
                icon="mdi-home"
                transition="scale-transition"
              >
                <div class="col-md-12">
                  <v-card width="auto" dark>
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">เลข/หวย</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="getplays in getplay" :key="getplays._id">
                            <span
                              v-if="getplays.idusers == iduser"
                              class="pa-md-4 mx-lg"
                            >
                              {{ getplays.bet3up }}
                              {{ getplays.bet2up }}
                              {{ getplays.bet1up }}
                              {{ getplays.bet1down }} |
                              {{ getplays.typegame }}
                            </span>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-card>
                </div>
              </v-alert>
            </div>
          </template>
        </div>
      </div>
      <div class="col">
        <h4>เรทราคา</h4>
        <v-chip class="ma-2">3ตัวบน <v-chip color="pink"> 900</v-chip> </v-chip>
        <v-chip class="ma-2"
          >3ตัวโต๊ด <v-chip color="pink"> 150</v-chip>
        </v-chip>
        <v-chip class="ma-2"
          >3ตัวหลัง <v-chip color="pink"> 450</v-chip></v-chip
        >
        <v-chip class="ma-2"
          >3ตัวหน้า <v-chip color="pink"> 450</v-chip></v-chip
        >
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  async mounted() {
    await fetch(`http://localhost:3000/getplaylotto/palyid`)
      .then((res) => res.json())
      .then((data) => (this.getplay = data))
      .catch((err) => console.log(err.message));
  },
  data() {
    return {
      alert: false,
      iduser: this.$cookie.get("id"),
      getplay: [],
      desserts: [
        {
          name: "จ่ายบาทล่ะ ",
        },
        {
          name: "จ่ายบาทล่ะ ",
        },
        {
          name: "จ่ายบาทล่ะ ",
        },
        {
          name: "จ่ายบาทล่ะ ",
        },
        {
          name: "จ่ายบาทล่ะ ",
        },
        {
          name: "จ่ายบาทล่ะ ",
        },
      ],
    };
  },
};
</script>

<style></style>
