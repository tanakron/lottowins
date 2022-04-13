<template>
  <div class="col">
    <div class="backdrop ma-3" @click="closeModal">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
  components: {},
};
</script>

<style scoped>
.modal {
  width: 20px;
  padding: 20px;
  margin: 2px auto;
  background: rgb(105, 105, 105);
  border: 10px;
  border-radius: 10px;
}
.backdrop {
  top: 10;
  position: fixed;
  background: rgb(0, 148, 86);
  width: 30%;
  height: 30%;
}
.modal h3 {
  color: aquamarine;
  border: none;
  padding: 10px 15px;
}
</style>
