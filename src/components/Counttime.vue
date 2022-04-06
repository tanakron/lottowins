<template>
  <div>
    <span id="timecount">{{ countDown }}</span>
  </div>
</template>

<script>
import moment from "moment";
export default {
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
  name: "timecount",
};
</script>

<style></style>
