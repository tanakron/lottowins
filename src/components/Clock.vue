<template>
  <div id="clock" class="ma-2">
    <v-chip color="primary"> {{ time }}</v-chip>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Clock",
  data() {
    return {
      time: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.time = moment(Date()).format("h:mm:ss ");
    }, 1000);
  },
};
</script>

<style></style>
