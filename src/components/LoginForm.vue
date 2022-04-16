<template>
  <div class="container">
    <v-card class="d-flex justify-center" dark rounded="xl">
      <v-card width="600" height="300" :elevation="24" class="ma-3">
        <v-form>
          <v-row>
            <div class="col">
              <v-icon class="ma-2">person_add_alt</v-icon> ชื่อผู้ใช้
              <v-text-field
                label="username"
                class="ma-2"
                v-model="username"
                :rules="$store.state.usernameRules"
                solo
              >
              </v-text-field>
              <v-icon class="ma-2">vpn_key</v-icon> รหัสผ่าน
              <v-text-field
                label="password"
                class="ma-2"
                type="password"
                v-model="password"
                :rules="$store.state.passwordRules"
                solo
              ></v-text-field>
            </div>
            <div class="col">
              <v-checkbox
                v-model="checkbox1"
                :label="`จำฉันไว้ในระบบ`"
              ></v-checkbox>
              <v-btn rounded color="teal accent-2  " class="ma-2" outlined dark>
                เข้าสู่ระบบ
              </v-btn>
              <v-btn
                rounded
                color="lime accent-2  "
                class="ma-2"
                outlined
                @click.prevent="$router.push('/RegisterForm')"
                dark
              >
                สมัครสมาชิก</v-btn
              >
            </div>
          </v-row>
        </v-form>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["text"],
  data() {
    return { checkbox1: true, checkbox2: false };
  },
};
</script>

<style></style>
