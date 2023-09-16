import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0 
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  getters: {
    double(state) {
      // autocompletion! ✨
      return state.count * state.count
    }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
