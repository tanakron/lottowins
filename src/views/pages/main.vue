<template>
  <v-contianer>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-row>
      <!-- Modal สมัครสมาชิก -->
      <div
        class="modal fade text-secondary"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">สมัครสมาชิก</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="col">
                <v-chip>เบอร์โทร</v-chip>
                <v-form @submit.prevent="submit">
                  <v-text-field
                    label="เบอร์โทร"
                    single-line
                    solo
                    class="ma-4"
                  ></v-text-field>
                </v-form>
              </div>
            </div>
            <div class="modal-footer">
              <v-btn type="button" data-bs-dismiss="modal"> Close </v-btn>
              <v-col class="my-1">
                <v-btn type="submit" color="success"> ลงทะเบียน</v-btn>
              </v-col>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal  เข้าสู่ระบบ -->
      <div
        class="modal fade text-secondary"
        id="registerModal"
        tabindex="-1"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 id="registerModalLabel">เข้าสู่ระบบ</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <v-form>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Isolation_Mode"
                  data-name="Isolation Mode"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path
                    d="M11,14H5a5.006,5.006,0,0,0-5,5v5H3V19a2,2,0,0,1,2-2h6a2,2,0,0,1,2,2v5h3V19A5.006,5.006,0,0,0,11,14Z"
                    fill="#0062ae"
                  />
                  <path
                    d="M8,12A6,6,0,1,0,2,6,6.006,6.006,0,0,0,8,12ZM8,3A3,3,0,1,1,5,6,3,3,0,0,1,8,3Z"
                    fill="#0062ae"
                  />
                  <polygon
                    points="21 10 21 7 18 7 18 10 15 10 15 13 18 13 18 16 21 16 21 13 24 13 24 10 21 10"
                    fill="#0062ae"
                  />
                </svg>
                ชื่อผู้ใช้
                <v-text-field
                  v-model="username"
                  label="ชื่อผู้ใช้"
                  class="ma-2"
                  solo
                >
                </v-text-field>

                <svg
                  id="Layer_1"
                  height="20"
                  viewBox="0 0 24 24"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                >
                  <path
                    d="m15.989 12.7v-2.7a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h2.685a1.016 1.016 0 0 0 .922-.6 4.522 4.522 0 0 0 .376-2.377 3.491 3.491 0 0 0 -3.506-3.023 4.537 4.537 0 0 0 -3.208 1.329l-7.908 7.906a7.368 7.368 0 0 0 -3.881.048 7.5 7.5 0 0 0 2.036 14.717 7.654 7.654 0 0 0 .784-.041 7.529 7.529 0 0 0 6.428-5.429 7.334 7.334 0 0 0 .047-3.88l.65-.65a1.984 1.984 0 0 0 .575-1.3zm-10.489 7.3a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1 -1.5 1.5z"
                    fill="#0062ae"
                  />
                </svg>
                รหัสผ่าน
                <v-text-field
                  v-model="password"
                  type="password"
                  label="รหัสผ่าน"
                  class="ma-2"
                  solo
                ></v-text-field>
              </v-form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger white--text"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button type="button" class="btn btn-success white--text">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </v-row>

    <img />

    <v-container>
      <div class="d-flex justify-content-between">
        <button
          type="button"
          class="btn btn-light px-5 text-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src="@/assets/imgs/click.gif" width="30" />
          สมัครสมาชิก
        </button>
        <button
          type="button"
          class="btn btn-light px-5 text-primary"
          data-bs-toggle="modal"
          data-bs-target="#registerModal"
        >
          <img src="@/assets/imgs/money-bag.gif" width="30" />
          เข้าสู่ระบบ
        </button>
      </div>
    </v-container>
    <div class="container">
      <div class="row">
        <!-- หวยรัฐบาลไทย -->
        <div class="col">
          <tablottothai v-if="$store.state.isLottothai" />
        </div>
        <!-- หวยธนาคาร -->
        <div class="col">
          <tablottobank v-if="$store.state.isLottobank" />
        </div>
      </div>
      <div class="row">
        <!-- หวยหุ้นต่างประเทศ -->
        <div class="col">
          <stocklottery v-if="$store.state.isstocklottery" />
          <stockthailottery v-if="$store.state.isstockthailottery" />
          <!-- หวยหุ้นต่างประเทศ -->
          <tablottoyeeke v-if="$store.state.issLottoyeeke" />
        </div>
        <!-- หวยหุ้นไทย -->
      </div>

      <div class="row">
        <!-- จับยี่กี VIP -->
        <div class="col"></div>
        <!-- ยี่กีVIP -->
        <div class="col"></div>
      </div>
    </div>
  </v-contianer>
</template>

<script>
import moment from "moment";
export default {
  methods: {
    submit() {
      this.$store.dispatch({
        type: "doLogin",
        username: this.account.username,
        password: this.account.password,
      });
    },
  },
  data() {
    return {
      time: "",
      otp: "",
      length: 10,

      first: "",
      account: {
        username: "",
        password: "",
      },
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
  computed: {
    isActive() {
      return this.otp.length === this.length;
    },
  },
  components: {
    tablottothai: require("@/views/pages/tablottothai.vue").default,
    tablottobank: require("@/views/pages/tablottobank.vue").default,
    stocklottery: require("@/views/pages/tabstocklottery.vue").default,
    stockthailottery: require("@/views/pages/tabstockthailottery.vue").default,
    tablottoyeeke: require("@/views/pages/tablottoyeeke.vue").default,
  },
  mounted() {
    setInterval(() => {
      this.time = moment(Date()).format("h:mm:ss ");
    }, 1000);
  },
};
</script>

<style></style>
