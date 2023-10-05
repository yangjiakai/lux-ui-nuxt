import { createResolver } from "@nuxt/kit";
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const { resolve } = createResolver(import.meta.url);
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  ssr: true,
  devtools: { enabled: true },
  typescript: { shim: false },
  build: { transpile: ["vuetify"] },
  sourcemap: { server: false, client: false },
  routeRules: {
    '/**': { ssr: false }
  },

  hooks: {
    "vite:extendConfig": (config: any) => {
      config.plugins.push(
        vuetify({
          styles: { configFile: resolve("/assets/scss/variables.scss") },
        })
      );
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
