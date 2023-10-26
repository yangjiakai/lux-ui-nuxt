import { defineStore } from 'pinia'

export const useChartThemeStore = defineStore({
  id: 'chartTheme',
  state: () => ({
    backgroundColor: "rgba(0,0,0,0)",
    foreColor: "#7379A9",
    // colors: ["#4782FB", "#47C4F4", "#AD64E9"],
    colors: ["#479BC9", "#5765E1", "#834A9F"],
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