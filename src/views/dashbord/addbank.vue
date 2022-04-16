<template>
  <v-app
    ><template>
      <div class="text-center d-inline-flex justify-center">
        <v-btn
          rounded
          color="pink"
          class="white--text ma-4"
          @click.prevent="$router.push('/mainuse')"
          >Back</v-btn
        >
        <div class="col-md-6">
          <v-card class="rounded-xl" color="blue-grey darken-4">
            <v-sheet
              class="white--text d-flex justify-center"
              color="amber lighten-1"
              elevation="4"
              height="auto"
              width="auto"
            >
              <v-badge left color="primary">
                <span slot="badge">ฝาก</span>
                <!--slot can be any component-->
                <v-icon large color="blue-grey darken-4"
                  >account_balance</v-icon
                >
              </v-badge>
            </v-sheet>

            <v-row align="center" justify="space-around" class="ma-12">
              <div v-if="(a = addbank)">
                <v-card-title class="white--text"> บัญชีฝาก : </v-card-title>
                <h3 class="white--text">เลขบัญชี</h3>
              </div>
              <div class="white--text">
                เพิ่มบัญชี ฝากถอน* <small> ชื่อต้องตรงกันเท่านั้น</small>
              </div>
            </v-row>
            <template>
              <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="red" dark v-bind="attrs" v-on="on" rounded>
                      เพิ่มบัญชีฝาก
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">เพิ่มบัญชี</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              label="ID"
                              v-model="a"
                              required
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              label="เลขบัญชี"
                              v-model.trim="b"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-autocomplete
                              :items="[
                                'ธนาคารกรุงเทพ',
                                'ธนาคารกสิกรไทย',
                                'ธนาคารกรุงไทย',
                                'ธนาคารทหารไทยธนชาต',
                                'ธนาคารไทยพาณิชย์',
                                'ธนาคารกรุงศรีอยุธยา',
                                'ธนาคารเกียรตินาคินภัทร',
                                'ธนาคารซีไอเอ็มบีไทย',
                                'ธนาคารทิสโก้',
                                'ธนาคารยูโอบี',
                                'ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร',
                                'ธนาคารออมสิน',
                                'ธนาคารซิตี้แบงก์',
                              ]"
                              label="ธนาคาร"
                              multiple
                              v-model="c"
                            ></v-autocomplete>
                          </v-col>
                        </v-row>
                      </v-container>
                      <p>ID {{ a }}</p>

                      <p>ธนาคารฝาก {{ c }}</p>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialog = false">
                        ปิด
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="dialog = false">
                        บันทึก
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </template>
          </v-card>
        </div>
      </div>
    </template></v-app
  >
</template>

<script>
export default {
  data() {
    return {
      a: "",
      b: "",
      c: "",
      dialog: false,
    };
  },
};
</script>

<style></style>
