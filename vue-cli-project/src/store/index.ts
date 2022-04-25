import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
  },
  getters: {
    next(state) {
      return state.count + 1
    },
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
})
