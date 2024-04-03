import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    theme: 'light',
    mainSidebar: true,

  }),
  persist: [
    {
      paths: ["theme"],
      storage: localStorage,
    },
  ],

  getters: {

  },
  actions: {
    toggleSidebar() {
      this.mainSidebar = !this.mainSidebar
    },

    setTheme(theme: string) {
      this.theme = theme
    }
  },
})