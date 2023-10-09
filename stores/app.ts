import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    mainSidebar: true,

  }),
  persist: [
    {
      paths: [],
      storage: localStorage,
    },
  ],

  getters: {

  },
  actions: {


  },
})