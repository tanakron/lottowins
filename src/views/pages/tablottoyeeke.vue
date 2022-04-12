<template>
  <!-- หวยยี่กี -->
  <div>
    <v-chip color="teal accent-3"> ผลหวยยี่กี </v-chip>

    <div class="grid">
      <div class="col ma-3">
        <div class="row">
          <v-card
            class="ma-3 shadow p-3 mb-5 bg-body rounded border border-primary"
            width="auto"
            height="auto"
            v-for="yekee in $store.state.yeekeeall1"
            :key="yekee.id"
          >
            <div class="text-center">
              <div class="card-header teal accent-3">
                <img src="@/assets/icons/lotto.png" /> ยี่กี
              </div>

              <v-icon>update </v-icon> {{ yekee.content }}
              <v-avatar size="30" color="red">{{ yekee.tab1 }} </v-avatar>
              {{ yekee.times }}
              <v-card>
                <v-progress-circular
                  :rotate="360"
                  :size="100"
                  :width="15"
                  :value="value"
                  color="red"
                >
                  {{ value }}
                </v-progress-circular>
                <p>
                  สามตัวบน |
                  <v-chip class="ma-2" color="success" outlined>
                    {{ yekee.yeekeeupdate2 || "รอผล" }}</v-chip
                  >
                </p>
                <p>
                  สองตัวล่าง |
                  <v-chip class="ma-2" color="success" outlined>
                    {{ yekee.yeekeeupdate3 || "รอผล" }}</v-chip
                  >
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
            width="auto"
            height="auto"
            v-for="yekee in $store.state.yeekeeall2"
            :key="yekee"
          >
            <div class="text-center">
              <div class="card-header amber accent-2">
                <img src="@/assets/icons/lotto.png" /> ยี่กี
              </div>
              <v-icon>update </v-icon> {{ yekee.content }}
              <v-avatar size="30" color="red">{{ yekee.tab2 }} </v-avatar>
              {{ yekee.times }}
              <v-card-title> </v-card-title>

              <v-card>
                <v-progress-circular
                  :rotate="360"
                  :size="100"
                  :width="15"
                  :value="value"
                  color="info"
                >
                  {{ (a = value) }}
                </v-progress-circular>
                <p>
                  สามตัวบน |
                  <v-chip class="ma-2" color="success" outlined>
                    {{ yekee.yeekeeupdate2 || "รอผล" }}</v-chip
                  >
                </p>
                <p>
                  สองตัวล่าง |
                  <v-chip class="ma-2" color="success" outlined>{{
                    yekee.yeekeeupdate3 || "รอผล"
                  }}</v-chip>
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
            width="auto"
            height="auto"
            v-for="yekee in $store.state.yeekeeall3"
            :key="yekee"
          >
            <div class="text-center">
              <div class="card-header yellow accent-3">
                <img src="@/assets/icons/lotto.png" /> ยี่กี
              </div>
              {{ yekee.tab3 }}
              <v-card-title> </v-card-title>
              <v-icon>update </v-icon> {{ yekee.content }}
              <v-avatar size="30" color="red">{{ yekee.tab3 }} </v-avatar>
              {{ yekee.times }}
              <v-card>
                <v-progress-circular
                  :rotate="360"
                  :size="100"
                  :width="15"
                  :value="value"
                  color="pink darken-2"
                >
                  {{ (a = value) }}
                </v-progress-circular>
                <p>
                  สามตัวบน |
                  <v-chip class="ma-2" color="success" outlined>{{
                    yekee.yeekeeupdate2 || "รอผล"
                  }}</v-chip>
                </p>
                <p>
                  สองตัวล่าง |
                  <v-chip class="ma-2" color="success" outlined>{{
                    yekee.yeekeeupdate3 || "รอผล"
                  }}</v-chip>
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
            width="auto"
            height="auto"
            v-for="yekee in $store.state.yeekeeall4"
            :key="yekee"
          >
            <div class="text-center">
              <div class="card-header deep-orange accent-3">
                <img src="@/assets/icons/lotto.png" /> ยี่กี
              </div>
              {{ yekee.tab4 }}
              <v-card-title> </v-card-title>
              <v-icon>update </v-icon> {{ yekee.content }}
              <v-avatar size="30" color="red">{{ yekee.tab4 }} </v-avatar>
              {{ yekee.times }}
              <v-card>
                <v-progress-circular
                  :rotate="360"
                  :size="100"
                  :width="15"
                  :value="value"
                  color="purple accent-4"
                >
                  {{ (a = value) }}
                </v-progress-circular>
                <p>
                  สามตัวบน |
                  <v-chip class="ma-2" color="success" outlined>{{
                    yekee.yeekeeupdate2 || "รอผล"
                  }}</v-chip>
                </p>
                <p>
                  สองตัวล่าง |
                  <v-chip class="ma-2" color="success" outlined>{{
                    yekee.yeekeeupdate3 || "รอผล"
                  }}</v-chip>
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
            width="auto"
            height="auto"
            v-for="yekee in $store.state.yeekeeall5"
            :key="yekee"
          >
            <div class="text-center">
              <div class="card-header cyan lighten-1">
                <img src="@/assets/icons/lotto.png" /> ยี่กี
              </div>

              <v-card-title> </v-card-title>
              <v-icon>update </v-icon> {{ yekee.content }}
              <v-avatar size="30" color="red"> {{ yekee.tab5 }}</v-avatar>
              {{ yekee.times }}
              <v-card>
                <v-progress-circular
                  :rotate="360"
                  :size="100"
                  :width="15"
                  :value="value"
                  color="yellow accent-4"
                >
                  {{ (a = value) }}
                </v-progress-circular>
                <p>
                  สามตัวบน |
                  <v-chip class="ma-2" color="success" outlined>{{
                    yekee.yeekeeupdate2 || "รอผล"
                  }}</v-chip>
                </p>
                <p>
                  สองตัวล่าง |
                  <v-chip class="ma-2" color="success" outlined>{{
                    yekee.yeekeeupdate3 || "รอผล"
                  }}</v-chip>
                </p>
              </v-card>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Clock from "@/components/Clock.vue";
export default {
  data() {
    return {
      interval: {},
      value: 0,
      tab: null,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 1500) {
        return (this.value = 0);
      }
      this.value += 1;
    }, 500);
  },
  components: {
    // Clock,
  },
};
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
