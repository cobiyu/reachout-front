import axios from "../axios";

export default {
  namespaced: true,
  state: {
    member: {},
  },
  getters: {
    member: state => state.member,
  },
  actions: {
    async getMemberData({ commit }) {
      return axios.get('http://localhost:8080/auth')
      .then((response)=> {
        commit('setMemberData', response.data);
      })
      .catch((err) => {
        return Promise.resolve();
      })
    },
    async signOut({ commit }) {
      return axios.get('http://localhost:8080/sign_out')
      .then((response)=> {
        commit('setMemberData', {});
      })
      .catch((err) => {
        return Promise.resolve();
      })
    },
  },
  mutations: {
    setMemberData(state, memberInfo) {
      state.member = memberInfo;
    },
  }
}
