<template>
  <!-- หวยยี่กี -->
  <div>
    <v-chip> ผลหวยยี่กี </v-chip>

    <div class="grid">
      <div>
        <div class="col ma-3">
          <div class="row">
            <v-card
              class="ma-3 shadow p-3 mb-5 bg-body rounded border border-primary"
              width="150"
              height="350"
              v-for="yekee in $store.state.yeekeeall1"
              :key="yekee"
            >
              <div class="text-center">
                <div class="card-header info white--text">
                  <img src="@/assets/icons/lotto.png" /> ยี่กี
                </div>
                <v-card-title>
                  <v-avatar left class="green darken-4 ml-3 white--text">
                    {{ yekee.tab1 }}
                  </v-avatar>
                </v-card-title>
                <v-card>
                  <p>
                    สามตัวบน |
                    <v-chip class="ma-2" color="success" outlined> รอผล</v-chip>
                  </p>
                  <p>
                    สองตัวล่าง |
                    <v-chip class="ma-2" color="success" outlined> รอผล</v-chip>
                  </p>
                </v-card>
              </div>
            </v-card>
          </div>
        </div>
        <div class="col ma-3">
          <div class="row">
            <v-card
              class="ma-3 shadow p-3 mb-5 bg-body rounded border border-primary"
              width="150"
              height="350"
              v-for="yekee in $store.state.yeekeeall2"
              :key="yekee"
            >
              <div class="text-center">
                <div class="card-header info white--text">
                  <img src="@/assets/icons/lotto.png" /> ยี่กี
                </div>
                <v-card-title>
                  <v-avatar left class="green darken-4 ml-3 white--text">
                    {{ yekee.tab2 }}
                  </v-avatar>
                </v-card-title>
                <v-card>
                  <p>
                    สามตัวบน |
                    <v-chip class="ma-2" color="success" outlined> รอผล</v-chip>
                  </p>
                  <p>
                    สองตัวล่าง |
                    <v-chip class="ma-2" color="success" outlined> รอผล</v-chip>
                  </p>
                </v-card>
              </div>
            </v-card>
          </div>
        </div>
        <div class="col ma-3">
          <div class="row">
            <v-card
              class="ma-3 shadow p-3 mb-5 bg-body rounded border border-primary"
              width="150"
              height="350"
              v-for="yekee in $store.state.yeekeeall3"
              :key="yekee"
            >
              <div class="text-center">
                <div class="card-header info white--text">
                  <img src="@/assets/icons/lotto.png" /> ยี่กี
                </div>
                <v-card-title>
                  <v-avatar left class="green darken-4 ml-3 white--text">
                    {{ yekee.tab3 }}
                  </v-avatar>
                </v-card-title>
                <v-card>
                  <p>
                    สามตัวบน |
                    <v-chip class="ma-2" color="success" outlined> รอผล</v-chip>
                  </p>
                  <p>
                    สองตัวล่าง |
                    <v-chip class="ma-2" color="success" outlined> รอผล</v-chip>
                  </p>
                </v-card>
              </div>
            </v-card>
          </div>
        </div>
        <div class="col ma-3">
          <div class="row">
            <v-card
              class="ma-3 shadow p-3 mb-5 bg-body rounded border border-primary"
              width="150"
              height="350"
              v-for="yekee in $store.state.yeekeeall4"
              :key="yekee"
            >
              <div class="text-center">
                <div class="card-header info white--text">
                  <img src="@/assets/icons/lotto.png" /> ยี่กี
                </div>
                <v-card-title>
                  <v-avatar left class="green darken-4 ml-3 white--text">
                    {{ yekee.tab4 }}
                  </v-avatar>
                </v-card-title>
                <v-card>
                  <p>
                    สามตัวบน |
                    <v-chip class="ma-2" color="success" outlined> รอผล</v-chip>
                  </p>
                  <p>
                    สองตัวล่าง |
                    <v-chip class="ma-2" color="success" outlined> รอผล</v-chip>
                  </p>
                </v-card>
              </div>
            </v-card>
          </div>
        </div>
        <div class="col ma-3">
          <div class="row">
            <v-card
              class="ma-3 shadow p-3 mb-5 bg-body rounded border border-primary"
              width="150"
              height="350"
              v-for="yekee in $store.state.yeekeeall5"
              :key="yekee"
            >
              <div class="text-center">
                <div class="card-header info white--text">
                  <img src="@/assets/icons/lotto.png" /> ยี่กี
                </div>
                <v-card-title>
                  <v-avatar left class="green darken-4 ml-3 white--text">
                    {{ yekee.tab5 }}
                  </v-avatar>
                </v-card-title>
                <v-card>
                  <p>
                    สามตัวบน |
                    <v-chip class="ma-2" color="success" outlined> รอผล</v-chip>
                  </p>
                  <p>
                    สองตัวล่าง |
                    <v-chip class="ma-2" color="success" outlined> รอผล</v-chip>
                  </p>
                </v-card>
              </div>
            </v-card>
          </div>
        </div>
        <div class="col ma-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style></style>
