import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    count: 0,
  }),
  getters: {
    next(state) {
      return state.count + 1
    },
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
