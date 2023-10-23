import '@mdi/font/css/materialdesignicons.css'
import "@/assets/scss/main.scss";
import { createVuetify } from 'vuetify'

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labsComponents from 'vuetify/labs/components'
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import VueApexCharts from "vue3-apexcharts";

import { createI18n, useI18n } from "vue-i18n";
import messages from '@/locales/messages';

import {
  BLUE_THEME,
  GRAY_THEME,
} from "@/theme/LightTheme";
import {
  DARK_BLUE_THEME,
} from "@/theme/DarkTheme";

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true
});


export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    directives,
    components: {
      ...labsComponents,
      ...components
    },
    theme: {
      defaultTheme: "GRAY_THEME",
      themes: {
        BLUE_THEME,
        GRAY_THEME,
        DARK_BLUE_THEME
      },
    },
    locale: {
      adapter: createVueI18nAdapter({ i18n, useI18n }),
    },
    defaults: {
      VBtn: {
        rounded: "md",
      },
    }
  })
  app.vueApp.use(vuetify);
  app.vueApp.use(VueApexCharts);
  app.vueApp.use(i18n);
})