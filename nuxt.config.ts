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
  modules: [
    '@pinia/nuxt',
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins ||= [];
        config.plugins.push(
          vuetify({
            styles: { configFile: resolve("/assets/scss/variables.scss") },
          }));
      });
    },
    ['@nuxtjs/google-fonts', {
      families: {
        Quicksand: true,
        Inter: [400, 700],
        'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
      }
    }],
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
