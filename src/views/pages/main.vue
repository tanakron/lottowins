<template>
  <v-contianer>
    <v-row>
      <div></div>
      <v-card
        dark
        height="225"
        width="auto"
        class="d-flex justify-center mt-2 mx-auto"
      >
        <v-img src="@/assets/imgs/1200.jpg" />
        <v-card> </v-card>

        <v-container>
          <v-row>
            <!-- Modal สมัครสมาชิก -->
            <div
              class="modal fade text-secondary"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      สมัครสมาชิก
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-info"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">Save</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal  เข้าสู่ระบบ -->
            <div
              class="modal fade text-secondary"
              id="registerModal"
              tabindex="-1"
              aria-labelledby="registerModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 id="registerModalLabel">เข้าสู่ระบบ</h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <p class="text-secondary">เข้าสู่ระบบ</p>
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-info"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </v-row>
        </v-container>
      </v-card>
      <div class="d-flex justify-content-between">
        <button
          type="button"
          class="btn btn-light px-5 text-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src="@/assets/imgs/click.gif" width="30" />
          สมัครสมาชิก
        </button>
        <button
          type="button"
          class="btn btn-light px-5 text-primary"
          data-bs-toggle="modal"
          data-bs-target="#registerModal"
        >
          <img src="@/assets/imgs/money-bag.gif" width="30" />
          เข้าสู่ระบบ
        </button>
      </div>
    </v-row>
    <img />
    <v-container
      ><v-row>
        <!-- หวยรัฐ -->
        <div class="container">
          <div class="row">
            <div class="col">
              <v-card>
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
                            <img
                              src="@/assets/icons/005-gamble.png"
                              width="50"
                            />
                            หวยรัฐ
                          </v-chip>
                        </div>

                        <tr>
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
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </template>
              </v-card>
            </div>
            <div class="col">
              <v-card>
                หวยรัฐ<template>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">2ตัวบน</th>
                          <th class="text-left">2ตัวล่าง</th>
                          <th class="text-left">3ตัวบน</th>
                          <th class="text-left">3ตัวล่าง</th>
                          <th class="text-left"></th>
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
            <div class="col">
              <v-card>
                หวยรัฐ<template>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">3ตัวหน้า</th>
                          <th class="text-left">3ตัวล่าง</th>
                          <th class="text-left">2ตัวล่าง</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in desserts" :key="item.name">
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
  </v-contianer>
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
