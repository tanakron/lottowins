<template>
  <v-contianer>
    <v-row>
      <div></div>
      <v-card
        dark
        height="225"
        width="auto"
        class="d-flex justify-center mt-2 mx-auto"
      >
        <!-- <v-img src="@/assets/imgs/1200.jpg" /> -->
        <v-card> </v-card>

        <v-container>
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
                    <h5 class="modal-title" id="exampleModalLabel">
                      สมัครสมาชิก
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-info"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">Save</button>
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
                    <p class="text-secondary">เข้าสู่ระบบ</p>
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-info"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </v-row>
        </v-container>
      </v-card>
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
    </v-row>
    <img />

    <v-container>
      <v-chip class="ma-3 light-blue darken-4 white--text" Default>
        ประกาศผลรางวัล {{ time }}
      </v-chip>
    </v-container>
    <div class="container">
      <div class="row">
        <!-- หวยรัฐบาลไทย -->
        <div class="col"><tablottothai v-if="$store.state.isLottothai" /></div>
        <!-- หวยธนาคาร -->
        <div class="col"><tablottobank v-if="$store.state.isLottobank" /></div>
      </div>
      <div class="row">
        <!-- หวยหุ้นต่างประเทศ -->
        <div class="col">
          <stocklottery v-if="$store.state.isstocklottery" />
          <stockthailottery v-if="$store.state.isstockthailottery" />
          <!-- หวยหุ้นต่างประเทศ -->
        </div>
        <!-- หวยหุ้นไทย -->
      </div>

      <div class="row">
        <!-- จับยี่กี VIP -->
        <div class="col"></div>
        <!-- ยี่กีVIP -->
        <div class="col">ยี่กีVIP</div>
      </div>
    </div>
  </v-contianer>
</template>

<script>
import moment from "moment";
export default {
  mounted() {
    setInterval(() => {
      this.time = moment(Date()).format("h:mm:ss ");
    }, 1000);
  },
  data() {
    return {
      time: "",
      account: {
        username: "",
        password: "",
      },
    };
  },
  components: {
    tablottothai: require("@/views/pages/tablottothai.vue").default,
    tablottobank: require("@/views/pages/tablottobank.vue").default,
    stocklottery: require("@/views/pages/tabstocklottery.vue").default,
    stockthailottery: require("@/views/pages/tabstockthailottery.vue").default,
  },

  methods: {
    submit() {
      this.$store.dispatch({
        type: "doLogin",
        username: this.account.username,
        password: this.account.password,
      });
    },
  },
};
</script>

<style></style>
