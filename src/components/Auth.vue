<template>
  <div id="signedin" class="m-3">
    <h5>ท่านเข้าสู่ระบบแล้ว</h5>
    <br />
    <a href="#" @click="link_click">ออกจากระบบ</a>
  </div>
</template>

<script>
export default {
  name: "SignedIn",
  methods: {
    link_click(event) {
      event.preventDefault();
      fetch("/api/session/del")
        .then((response) => response.text())
        .then(() => location.reload())
        .catch((err) => alert(err));
    },
  },
};
</script>

<style></style>
