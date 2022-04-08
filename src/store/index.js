import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: {},
    isLogged: true,
    isLottothai: true,
    isLottobank: true,
    isstocklottery: true,
    isstockthailottery: true,
    issLottoyeeke: true,
    //date lotto thai
    datelottothai: "1 เมษายน 2565",
    datestocklottery: moment(new Date()).format("DD / MM / YYYY "),
    datestockthailottery: "04 เมษายน 2565",
    //set time หวยหุ้น
    stockset1: moment(new Date()).format("HH:mm"),
    lottostocksum1: "11", // ออกผลหวย หุ้น
    lottostocksum2: "22",
    lottostocksum3: "33",
    lottostocksum4: "44",
    lottostocksum5: "55",
    lottostocksum6: "66",
    lottostocksum7: "77",
    lottostocksum8: "88",
    //ผลยี่กี
    yeekeeall: [
      { tab: "1", content: "จับยี่กี รอบที่ 1" },
      { tab: "2", content: "จับยี่กี รอบที่ 1" },
      { tab: "3", content: "จับยี่กี รอบที่ 1" },
      { tab: "4", content: "จับยี่กี รอบที่ 1" },
      { tab: "5", content: "จับยี่กี รอบที่ 1" },
      { tab: "6", content: "จับยี่กี รอบที่ 1" },
      { tab: "7", content: "จับยี่กี รอบที่ 1" },
      { tab: "8", content: "จับยี่กี รอบที่ 1" },
      { tab: "9", content: "จับยี่กี รอบที่ 1" },
      { tab: "10", content: "จับยี่กี รอบที่ 1" },
    ],
    yeekeeall1: [
      { tab1: "1", content: "Tab 1 Content" },
      { tab1: "2", content: "Tab 2 Content" },
      { tab1: "3", content: "Tab 3 Content" },
      { tab1: "4", content: "Tab 4 Content" },
      { tab1: "5", content: "Tab 5 Content" },
      { tab1: "6", content: "Tab 6 Content" },
      { tab1: "7", content: "Tab 7 Content" },
      { tab1: "8", content: "Tab 8 Content" },
      { tab1: "9", content: "Tab 9 Content" },
      { tab1: "10", content: "Tab 10 Content" },
      { tab1: "11", content: "Tab 1 Content" },
      { tab1: "12", content: "Tab 2 Content" },
      { tab1: "13", content: "Tab 3 Content" },
      { tab1: "14", content: "Tab 4 Content" },
      { tab1: "15", content: "Tab 5 Content" },
      { tab1: "16", content: "Tab 6 Content" },
      { tab1: "17", content: "Tab 7 Content" },
      { tab1: "18", content: "Tab 8 Content" },
      { tab1: "19", content: "Tab 9 Content" },
      { tab1: "20", content: "Tab 10 Content" },
    ],
    yeekeeall2: [
      //ตัด
      { tab2: "21", content: "Tab 1 Content" },
      { tab2: "22", content: "Tab 2 Content" },
      { tab2: "23", content: "Tab 3 Content" },
      { tab2: "24", content: "Tab 4 Content" },
      { tab2: "25", content: "Tab 5 Content" },
      { tab2: "26", content: "Tab 6 Content" },
      { tab2: "27", content: "Tab 7 Content" },
      { tab2: "28", content: "Tab 8 Content" },
      { tab2: "29", content: "Tab 9 Content" },
      { tab2: "30", content: "Tab 10 Content" },
      { tab2: "31", content: "Tab 1 Content" },
      { tab2: "32", content: "Tab 2 Content" },
      { tab2: "33", content: "Tab 3 Content" },
      { tab2: "34", content: "Tab 4 Content" },
      { tab2: "35", content: "Tab 5 Content" },
      { tab2: "36", content: "Tab 6 Content" },
      { tab2: "37", content: "Tab 7 Content" },
      { tab2: "38", content: "Tab 8 Content" },
      { tab2: "39", content: "Tab 9 Content" },
      { tab2: "40", content: "Tab 10 Content" },
    ],
    yeekeeall3: [
      //ตัด
      { tab3: "41", content: "Tab 1 Content" },
      { tab3: "42", content: "Tab 2 Content" },
      { tab3: "43", content: "Tab 3 Content" },
      { tab3: "44", content: "Tab 4 Content" },
      { tab3: "45", content: "Tab 5 Content" },
      { tab3: "46", content: "Tab 6 Content" },
      { tab3: "47", content: "Tab 7 Content" },
      { tab3: "48", content: "Tab 8 Content" },
      { tab3: "49", content: "Tab 9 Content" },
      { tab3: "50", content: "Tab 10 Content" },
      { tab3: "51", content: "Tab 1 Content" },
      { tab3: "52", content: "Tab 2 Content" },
      { tab3: "53", content: "Tab 3 Content" },
      { tab3: "54", content: "Tab 4 Content" },
      { tab3: "55", content: "Tab 5 Content" },
      { tab3: "56", content: "Tab 6 Content" },
      { tab3: "57", content: "Tab 7 Content" },
      { tab3: "58", content: "Tab 8 Content" },
      { tab3: "59", content: "Tab 9 Content" },
      { tab3: "60", content: "Tab 10 Content" },
    ],
    yeekeeall4: [
      //ตัด
      { tab4: "61", content: "Tab 1 Content" },
      { tab4: "62", content: "Tab 2 Content" },
      { tab4: "63", content: "Tab 3 Content" },
      { tab4: "64", content: "Tab 4 Content" },
      { tab4: "65", content: "Tab 5 Content" },
      { tab4: "66", content: "Tab 6 Content" },
      { tab4: "67", content: "Tab 7 Content" },
      { tab4: "68", content: "Tab 8 Content" },
      { tab4: "69", content: "Tab 9 Content" },
      { tab4: "70", content: "Tab 10 Content" },
      { tab4: "71", content: "Tab 1 Content" },
      { tab4: "72", content: "Tab 2 Content" },
      { tab4: "73", content: "Tab 3 Content" },
      { tab4: "74", content: "Tab 4 Content" },
      { tab4: "75", content: "Tab 5 Content" },
      { tab4: "76", content: "Tab 6 Content" },
      { tab4: "77", content: "Tab 7 Content" },
      { tab4: "78", content: "Tab 8 Content" },
      { tab4: "79", content: "Tab 9 Content" },
      { tab4: "80", content: "Tab 10 Content" },
    ],
    yeekeeall5: [
      //ตัด
      { tab5: "81", content: "Tab 1 Content" },
      { tab5: "82", content: "Tab 2 Content" },
      { tab5: "83", content: "Tab 3 Content" },
      { tab5: "84", content: "Tab 4 Content" },
      { tab5: "85", content: "Tab 5 Content" },
      { tab5: "86", content: "Tab 6 Content" },
      { tab5: "87", content: "Tab 7 Content" },
      { tab5: "88", content: "Tab 8 Content" },
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
  modules: {},
});
