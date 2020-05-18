import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    islogin: false
  },
  actions: {
    login(state) {
      state.islogin = true;
    }
  },
  getters: {
    islogin: state => {
      return state.islogin;
    }
  }
});
