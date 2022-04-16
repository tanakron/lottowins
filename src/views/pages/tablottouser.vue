<template>
  <div>
    <v-row>
      <div class="col d-flex justify-center mb-4">
        <v-sheet
          class="d-flex justify-center rounded-xl"
          color="amber accent-4"
          elevation="4"
          height="80"
          width="210"
        >
          <v-chip>เดิมพัน</v-chip>
          <img src="@/assets/imgs/003-lottery.png" width="60" />
          <h5 class="ma-1">แทงหวยยี่กี</h5></v-sheet
        >
      </div>

      <div class="col d-flex justify-center mb-4">
        <v-sheet
          class="d-flex justify-center rounded-xl"
          color="amber accent-4"
          elevation="4"
          height="80"
          width="210"
          @click.prevent="$router.push('/playlottomain')"
        >
          <v-chip>เดิมพัน</v-chip>
          <img src="@/assets/imgs/003-lottery.png" width="60" />
          <h5 class="ma-1">หวยรัฐ</h5>
        </v-sheet>
      </div>

      <div class="col d-flex justify-center mb-4">
        <v-sheet
          class="d-flex justify-center rounded-xl"
          color="amber accent-4"
          elevation="4"
          height="80"
          width="210"
        >
          <v-chip>เดิมพัน</v-chip>
          <img src="@/assets/imgs/003-lottery.png" width="60" />
          <h5 class="ma-1">หวยหุ้น</h5>
          <!-- <v-chip color="pink" class="ma-1 white--text"
            >ดาวน์โจน / นิเคอิ</v-chip
          > -->
        </v-sheet>
      </div>

      <div class="col d-flex justify-center mb-4">
        <v-sheet
          class="d-flex justify-center rounded-xl"
          color="amber accent-4"
          elevation="4"
          height="80"
          width="210"
          @click.prevent="$router.push('/playlotto')"
        >
          <v-chip>เดิมพัน</v-chip>
          <img src="@/assets/imgs/003-lottery.png" width="60" />
          <h5 class="ma-1">หวยชุด</h5>
          <!-- <v-chip color="pink" class="ma-1 white--text">ลาว / ฮานอย</v-chip> -->
        </v-sheet>
      </div>
      <div class="col d-flex justify-center mb-4">
        <v-sheet
          class="d-flex justify-center rounded-xl"
          color="amber accent-4"
          elevation="4"
          height="80"
          width="200"
          @click.prevent="$router.push('/playlottobank')"
        >
          <v-chip>เดิมพัน</v-chip>
          <img src="@/assets/imgs/003-lottery.png" width="60" />
          <h5 class="ma-2">หวยธนาคาร</h5>
          <!-- <v-chip color="pink" class="ma-1 white--text">ออมสิน/ธกส</v-chip> -->
        </v-sheet>
        <!-- {{ timeLeftString }} -->
      </div>
    </v-row>
  </div>
</template>

<script>
// import moment from "moment";
export default {
  data() {
    //     return {
    //       //   datetime: new Date(),
    //       //   datetime: new Date(),
    //       //   timeLeft: 15,
    //       //   timeLeftString: "",
    //       //   timer: 0,
    //     };
    //   },
    //   watch: {
    //     datetime: function (val) {
    //       const timeZero = moment("200-04-12 ");
    //       this.timeLeftString = timeZero.add(val, "seconds").format("HH:mm:ss");
    //     },
    //   },
    //   mounted() {
    //     this.timeLeft = 10;
    //     this.timer = setInterval(() => {
    //       if (this.timeLeft <= 1) {
    //         clearInterval(this.timer);
    //         // alert("Done");
    //       } else {
    //         this.timeLeft--;
    //       }
    //     }, 500);
    //   },
  },
};
</script>

<style></style>
