<template>
  <div class="container">
    <v-card class="d-flex justify-center" dark>
      <v-card width="600" height="500" :elevation="24" class="ma-3">
        <v-form>
          <v-row>
            <div class="col">
              <v-icon class="ma-2">person_add_alt</v-icon> ชื่อผู้ใช้
              <v-text-field
                label="username"
                class="ma-2"
                v-model="username"
                solo
              >
              </v-text-field>
              <v-icon class="ma-2">vpn_key</v-icon> รหัสผ่าน
              <v-text-field
                label="password"
                class="ma-2"
                type="text"
                v-model="password"
                solo
              ></v-text-field>
              <v-icon class="ma-2">add_ic_call</v-icon> เบอร์โทร
              <v-text-field
                label="number Tel"
                class="ma-2"
                type="password"
                v-model="number"
                solo
              ></v-text-field>
            </div>
            <div class="col">
              <v-checkbox
                v-model="checkbox1"
                :label="`จำฉันไว้ในระบบ`"
              ></v-checkbox>
              <v-sheet
                class="pl-10 ma-6 primary--text"
                @click.prevent="$router.push('/')"
              >
                เข้าสู่ระบบ
              </v-sheet>
            </div>
          </v-row>
          <v-btn
            rounded
            color="success"
            class="ma-3"
            @click.prevent="$router.push('/mainuse')"
            outlined
            dark
          >
            ยืนยันสมัครสมาชิก
          </v-btn>
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
