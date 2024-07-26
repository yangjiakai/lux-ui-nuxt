import { createResolver } from "@nuxt/kit";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

const { resolve } = createResolver(import.meta.url);
// PWA Config
const title = "Vuetify 3 + Nuxt 3 Awesome Admin";
const shortTitle = "Lux Admin";
const description = "Lux-Admin,Awesome Nuxt3-Vuetify3 Admin";
const image =
  "https://github.com/yangjiakai/lux-nuxt3/blob/main/assets/images/banner.png";
const url = "https://lux-vuetify3-nuxt3.netlify.app/";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ["@/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: { shim: false },
  build: { transpile: ["vuetify"] },
  sourcemap: { server: false, client: false },
  routeRules: {
    "/**": { ssr: false },
  },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins ||= [];
        config.plugins.push(
          vuetify({
            styles: { configFile: resolve("/assets/scss/variables.scss") },
          })
        );
      });
    },
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Quicksand: [500],
          Inter: [400, 700],
          "Josefin+Sans": true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100],
          },
        },
      },
    ],
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  app: {
    head: {
      title: "Lux-Nuxt3",
      meta: [
        { name: "description", content: description },
        {
          property: "og:url",
          content: url,
        },
        {
          property: "og:image:secure_url",
          content: image,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:image",
          content: image,
        },
        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:url",
          content: url,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:image",
          content: image,
        },
      ],
    },
  },
});
