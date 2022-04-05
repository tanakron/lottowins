import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: {},
    isLogged: true,
    isLottothai: true,
    isLottobank: true,
    isstocklottery: true,
    isstockthailottery: true,
    //date lotto thai
    datelottothai: "1 เมษายน 2565",
    datestocklottery: "04 เมษายน 2565",
    datestockthailottery: "04 เมษายน 2565",
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
