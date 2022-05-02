import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    use_id: [],
    logplay: [
      {
        id: "05511logplay",
        userid: "",
        caditplay: "1000",
        phone: "05151551",
        done: false,
        idplay: new Date(),
      },
    ],
    playlotto: [
      {
        usersname: "",
        userid: "",
        cadit: "1000",
        datetime: "",
        done: false,
        idplay: new Date(),
      },
    ],
    //drawer
    drawer: null,
    usertest: [{ usersname: "", userid: "", cadit: "1000", datetime: "" }],
    caditmain: [{ usersname: "", userid: "", cadit: "100", datetime: "" }],
    username: {},

    //play
    sum: [(v1) => !!v1 || " ใส่จำนวนเงิน"],
    // playbet
    betpayRules: [(v1) => !!v1 || " ใส่ จำนวนเงิน"],

    // login
    usernameRules: [(v1) => !!v1 || " ใส่ username"],
    passwordRules: [(v1) => !!v1 || " ใส่ password"],
    // เบอร์
    numberRules: [(v1) => !!v1 || " ใส่ เบอร์โทร"],

    // cadit users
    isCadit: "0.00",
    isLogged: true,
    isLottothai: true,
    isLottobank: true,
    isstocklottery: true,
    isstockthailottery: true,
    issLottoyeeke: true,
    subtext: false,
    //date lotto thai
    datelottothai: "1 เมษายน 2565",
    datestocklottery: moment(new Date()).format("DD / MM / YYYY "),
    datestockthailottery: "04 เมษายน 2565",
    //set time หวยหุ้น
    stockset1: moment(new Date()).format("HH:mm"),

    lottostocksum1: "11", // ออกผลหวย หุ้น 2 ตัวล่าง
    lottostocksum2: "22",
    lottostocksum3: "33",
    lottostocksum4: "44",
    lottostocksum5: "55",
    lottostocksum6: "66",
    lottostocksum7: "77",
    lottostocksum8: "88",
    lottostocksum9: "99",
    lottostocksum10: "110",
    lottostocksum11: "111",
    lottostocksum12: "112",
    lottostocksum13: "113",
    lottostocksum14: "114",
    lottostocksum15: "115",

    lottostocksum1up3: "111", // ออกผลหวย หุ้น 3 ตัวบน
    lottostocksum2up3: "222",
    lottostocksum3up3: "333",
    lottostocksum4up3: "444",
    lottostocksum5up3: "555",
    lottostocksum6up3: "666",
    lottostocksum7up3: "777",
    lottostocksum8up3: "888",
    lottostocksum9up3: "999",
    lottostocksum10up3: "1100",
    lottostocksum11up3: "1111",
    lottostocksum12up3: "1122",
    lottostocksum13up3: "1133",
    lottostocksum14up3: "1144",
    lottostocksum15up3: "1155",

    //ผลยี่กี
    // yeekeeall: [
    //   { tab: "1", content: "จับยี่กี รอบที่ 1" },
    //   { tab: "2", content: "จับยี่กี รอบที่ 1" },
    //   { tab: "3", content: "จับยี่กี รอบที่ 1" },
    //   { tab: "4", content: "จับยี่กี รอบที่ 1" },
    //   { tab: "5", content: "จับยี่กี รอบที่ 1" },
    //   { tab: "6", content: "จับยี่กี รอบที่ 1" },
    //   { tab: "7", content: "จับยี่กี รอบที่ 1" },
    //   { tab: "8", content: "จับยี่กี รอบที่ 1" },
    //   { tab: "9", content: "จับยี่กี รอบที่ 1" },
    //   { tab: "10", content: "จับยี่กี รอบที่ 1" },
    // ],
    yeekeeall1: [
      {
        tab1: "1",
        content: "เริ่มรอบที่",
        times: "06:00",
        yeekeeupdate2: "12",
        yeekeeupdate3: "122",
      },
      {
        tab1: "2",
        content: "เริ่มรอบที่",
        times: "06:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "3",
        content: "เริ่มรอบที่",
        times: "06:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "4",
        content: "เริ่มรอบที่",
        times: "06:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "5",
        content: "เริ่มรอบที่",
        times: "07:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "6",
        content: "เริ่มรอบที่",
        times: "07:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "7",
        content: "เริ่มรอบที่",
        times: "07:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "8",
        content: "เริ่มรอบที่",
        times: "07:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "9",
        content: "เริ่มรอบที่",
        times: "08:00",
        yeekeeupdate2: "27",
        yeekeeupdate3: "",
      },
      {
        tab1: "10",
        content: "เริ่มรอบที่",
        times: "08:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "11",
        content: "เริ่มรอบที่",
        times: "08:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "12",
        content: "เริ่มรอบที่",
        times: "08:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "13",
        content: "เริ่มรอบที่",
        times: "09:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "14",
        content: "เริ่มรอบที่",
        times: "09:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "15",
        content: "เริ่มรอบที่",
        times: "09:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "16",
        content: "เริ่มรอบที่",
        times: "09:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "17",
        content: "เริ่มรอบที่",
        times: "10:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "18",
        content: "เริ่มรอบที่",
        times: "10:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "19",
        content: "เริ่มรอบที่",
        times: "10:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab1: "20",
        content: "เริ่มรอบที่",
        times: "10:45",
        yeekeeupdate: "87",
        yeekeeupdate3: "",
      },
    ],
    yeekeeall2: [
      //ตัด
      {
        tab2: "21",
        content: "เริ่มรอบที่",
        times: "11:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "22",
        content: "เริ่มรอบที่",
        times: "11:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "23",
        content: "เริ่มรอบที่",
        times: "11:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "24",
        content: "เริ่มรอบที่",
        times: "11:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "25",
        content: "เริ่มรอบที่",
        times: "12:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "26",
        content: "เริ่มรอบที่",
        times: "12:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "27",
        content: "เริ่มรอบที่",
        times: "12:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "28",
        content: "เริ่มรอบที่",
        times: "12:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "29",
        content: "เริ่มรอบที่",
        times: "13:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "30",
        content: "เริ่มรอบที่",
        times: "13:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "31",
        content: "เริ่มรอบที่",
        times: "13:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "32",
        content: "เริ่มรอบที่",
        times: "13:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "33",
        content: "เริ่มรอบที่",
        times: "14:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "34",
        content: "เริ่มรอบที่",
        times: "14:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "35",
        content: "เริ่มรอบที่",
        times: "14:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "36",
        content: "เริ่มรอบที่",
        times: "14:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "37",
        content: "เริ่มรอบที่",
        times: "15:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "38",
        content: "เริ่มรอบที่",
        times: "15:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "39",
        content: "เริ่มรอบที่",
        times: "15:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab2: "40",
        content: "เริ่มรอบที่",
        times: "15:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
    ],
    yeekeeall3: [
      //ตัด
      {
        tab3: "41",
        content: "เริ่มรอบที่",
        times: "16:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "42",
        content: "เริ่มรอบที่",
        times: "16:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "43",
        content: "เริ่มรอบที่",
        times: "16:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "44",
        content: "เริ่มรอบที่",
        times: "16:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "45",
        content: "เริ่มรอบที่",
        times: "17:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "46",
        content: "เริ่มรอบที่",
        times: "18:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "47",
        content: "เริ่มรอบที่",
        times: "18:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "48",
        content: "เริ่มรอบที่",
        times: "18:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "49",
        content: "เริ่มรอบที่",
        times: "19:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "50",
        content: "เริ่มรอบที่",
        times: "19:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "51",
        content: "เริ่มรอบที่",
        times: "19:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "52",
        content: "เริ่มรอบที่",
        times: "19:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "53",
        content: "เริ่มรอบที่",
        times: "20:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "54",
        content: "เริ่มรอบที่",
        times: "20:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "55",
        content: "เริ่มรอบที่",
        times: "20:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "56",
        content: "เริ่มรอบที่",
        times: "20:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "57",
        content: "เริ่มรอบที่",
        times: "21:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "58",
        content: "เริ่มรอบที่",
        times: "21:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "59",
        content: "เริ่มรอบที่",
        times: "21:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab3: "60",
        content: "เริ่มรอบที่",
        times: "21:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
    ],
    yeekeeall4: [
      //ตัด
      {
        tab4: "61",
        content: "เริ่มรอบที่",
        times: "22:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "62",
        content: "เริ่มรอบที่",
        times: "22:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "63",
        content: "เริ่มรอบที่",
        times: "22:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "64",
        content: "เริ่มรอบที่",
        times: "22:45",
        yeekeeupdate: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "65",
        content: "เริ่มรอบที่",
        times: "23:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "66",
        content: "เริ่มรอบที่",
        times: "23:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "67",
        content: "เริ่มรอบที่",
        times: "23:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "68",
        content: "เริ่มรอบที่",
        times: "23:45",
        yeekeeupdate: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "69",
        content: "เริ่มรอบที่",
        times: "00:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "70",
        content: "เริ่มรอบที่",
        times: "00:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "71",
        content: "เริ่มรอบที่",
        times: "00:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "72",
        content: "เริ่มรอบที่",
        times: "00:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "73",
        content: "เริ่มรอบที่",
        times: "01:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "74",
        content: "เริ่มรอบที่",
        times: "01:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "75",
        content: "เริ่มรอบที่",
        times: "01:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "76",
        content: "เริ่มรอบที่",
        times: "01:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "77",
        content: "เริ่มรอบที่",
        times: "02:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "78",
        content: "เริ่มรอบที่",
        times: "02:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "79",
        content: "เริ่มรอบที่",
        times: "02:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab4: "80",
        content: "เริ่มรอบที่",
        times: "02:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
    ],
    yeekeeall5: [
      //ตัด
      {
        tab5: "81",
        content: "เริ่มรอบที่",
        times: "03:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab5: "82",
        content: "เริ่มรอบที่",
        times: "03:15",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab5: "83",
        content: "เริ่มรอบที่",
        times: "03:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab5: "84",
        content: "เริ่มรอบที่",
        times: "03:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab5: "85",
        content: "เริ่มรอบที่",
        times: "04:00",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab5: "86",
        content: "เริ่มรอบที่",
        times: "04:15",
        yeekeeupdate: "87",
        yeekeeupdate3: "",
      },
      {
        tab5: "87",
        content: "เริ่มรอบที่",
        times: "04:30",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
      {
        tab5: "88",
        content: "เริ่มรอบที่",
        times: "04:45",
        yeekeeupdate2: "87",
        yeekeeupdate3: "",
      },
    ],
  },
  getters: {
    isLogin(state) {
      return state.isLogged;
    },
    username(state) {
      return state.username;
    },
  },
  mutations: {
    input(state) {
      let newPlay = {
        usersname: "",
        userid: "",
        cadit: "1000",
        datetime: "",
        done: false,
        idplay: new Date(),
      };
      state.playlotto.push(newPlay);
    },
    SET_LOGGED_IN(state) {
      state.isLogged = true;
    },
    SET_LOGGED_LOG(state) {
      state.isLogged = false;
    },
    SET_USERNAME(state, value) {
      state.isLogged = value;
    },
  },
  actions: {
    doLogin({ commit, dispatch }, { username }) {
      let result = true;
      if (result == true) {
        commit("SET_LOGGED_IN");
        commit("SET_USERNAME", username);
      } else {
        dispatch("doLogout", {});
      }
    },
    doLogout({ commit }) {
      commit("SET_LOGGED_IN");
      commit("SET_USERNAME");
    },
  },
});
