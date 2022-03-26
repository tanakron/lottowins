<template>
  <div>
    <v-container>
      <v-col cols="12">
        <v-card dark>
          <div class="container">
            <img src="@/assets/logo2.png" alt="" />
            <div class="row">
              <div class="col-5 ma-4 pa-10 d-fa">
                <h5>ยินดีต้อนรับเข้าสู่ล็อตโต้วิน</h5>
                <v-btn rounded color="green darken-4" width="200" dark>
                  เข้าสู่ระบบ
                </v-btn>
              </div>
              <div class="col-1"></div>

              <div class="col-5 ma-4 pa-10">
                <v-card dark class="col-8">
                  <v-btn color="success"
                    ><img src="@/assets/line.png" width="25" />
                    ลงชื่อเข้าใช้ด้วย LINE
                  </v-btn>
                  <v-divider></v-divider>
                  <h5>เป็นสมาชิกกับเราแล้วหรือยัง?</h5>
                  <v-btn class="ma-2" outlined color="success">
                    <v-icon class="ml-3">account_circle</v-icon>
                    สมัครสมาชิก
                  </v-btn>
                </v-card>
              </div>
            </div>
          </div>
        </v-card>
        <v-card dark>
          <v-carousel
            cycle
            height="200"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <template v-slot:prev="{ on, attrs }">
              <v-btn color="success" v-bind="attrs" v-on="on">ย้อนกลับ</v-btn>
            </template>
            <template v-slot:next="{ on, attrs }">
              <v-btn color="info" v-bind="attrs" v-on="on">ถัดไป</v-btn>
            </template>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="text-h2">{{ slide }}</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-container>
    <v-main class="dark lighten-3">
      <v-container grid-list-xs>
        <v-card dark>
          <div class="container">
            <div class="row">
              <div class="col">1 of 3</div>
              <div class="col-6">2 of 3 (wider)</div>
              <div class="col">3 of 3</div>
            </div>
            <div class="row">
              <div class="col">1 of 3</div>
              <div class="col-5">2 of 3 (wider)</div>
              <div class="col">3 of 3</div>
            </div>
          </div>
        </v-card>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["indigo", "warning", "pink darken-2", "red lighten-1"],
      slides: [
        "หวยลาวExtra :18:00:00",
        "หวยดาวโจนส์ VIP : 05:00:00",
        "หวยดาวโจนส์ STAR :05:00:00 ",
        "หุ้นดาวโจนส์ : 15:00:00",
      ],
    };
  },
};
</script>

<style></style>
