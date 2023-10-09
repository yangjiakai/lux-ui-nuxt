import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    mainSidebar: true,
    localCode: "en",
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

    setLocalCode(localCode: string) {
      this.localCode = localCode;
    },
  },
})