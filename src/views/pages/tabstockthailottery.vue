<template>
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
                      หวยหุ้นไทย {{ $store.state.datestockthailottery }}
                    </v-chip>
                  </div>

                  <tr>
                    <th>หวยหุ้นไทย</th>
                    <th class="text-left">2ตัวบน</th>
                    <th class="text-left">2ตัวล่าง</th>
                    <th class="text-left">3ตัวบน</th>
                    <th class="text-left">3ตัวล่าง</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
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
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
  },
};
</script>

<style></style>
