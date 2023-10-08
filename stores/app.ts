import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    theme: "dark",
    size: "medium",
  }),
  persist: [
    {
      paths: ['theme', "size"],
      storage: localStorage,
    },
  ],

  getters: {

  },
  actions: {
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
    }
  },
})