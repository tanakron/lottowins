<template>
  <v-container>
    <v-row>
      <!-- หวยรัฐ -->
      <div class="container">
        <div class="row">
          <div class="col">
            <v-card class="rounded-xl">
              <template>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <div class="d-flex justify-start mb-6 mt-3">
                        <img
                          src="@/assets/icons/088-thailand.png"
                          width="50"
                          class="ml-2"
                        />
                        <v-chip class="ma-2" color="success" outlined>
                          <img src="@/assets/icons/005-gamble.png" width="50" />
                          หวยธนาคาร
                        </v-chip>
                      </div>

                      <tr>
                        <th>หวยธนาคาร</th>
                        <th class="text-left">เลข</th>
                        <th class="text-left">2ตัวบน</th>
                        <th class="text-left">2ตัวล่าง</th>
                        <th class="text-left">3ตัวบน</th>
                        <th class="text-left">3ตัวล่าง</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>
                          {{ item.name }}
                          <v-chip color="pink" class="white--text">
                            {{ item.date }}</v-chip
                          >
                        </td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.calories }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </template>
            </v-card>
          </div>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "หวยออมสิน",
          date: "16 เมษายน 2565 ",
          calories: 159984,
        },
        {
          name: "หวย ธกส",
          date: "16 เมษายน 2565",
          calories: 237,
        },
      ],
    };
  },
};
</script>

<style></style>
