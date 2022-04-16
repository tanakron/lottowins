<template>
  <div class="d-flex justify-content-center ma-3">
    <v-card dark width="auto" height="auto" rounded="xl">
      <div class="col">
        <h4>เรทราคา</h4>
        <v-chip class="ma-2">3ตัวบน <v-chip color="pink"> 900</v-chip> </v-chip>
        <v-chip class="ma-2"
          >3ตัวโต๊ด <v-chip color="pink"> 150</v-chip>
        </v-chip>
        <v-chip class="ma-2"
          >3ตัวหลัง <v-chip color="pink"> 450</v-chip></v-chip
        >
        <v-chip class="ma-2"
          >3ตัวหน้า <v-chip color="pink"> 450</v-chip></v-chip
        >
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "จ่ายบาทล่ะ ",
        },
        {
          name: "จ่ายบาทล่ะ ",
        },
        {
          name: "จ่ายบาทล่ะ ",
        },
        {
          name: "จ่ายบาทล่ะ ",
        },
        {
          name: "จ่ายบาทล่ะ ",
        },
        {
          name: "จ่ายบาทล่ะ ",
        },
      ],
    };
  },
};
</script>

<style></style>
