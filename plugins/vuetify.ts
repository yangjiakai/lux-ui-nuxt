import '@mdi/font/css/materialdesignicons.css'
import "@/assets/scss/main.scss";
import { createVuetify } from 'vuetify'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labsComponents from 'vuetify/labs/components'

import {
  BLUE_THEME,
  GRAY_THEME,
} from "@/theme/LightTheme";
import {
  DARK_BLUE_THEME,
} from "@/theme/DarkTheme";

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
  })
  app.vueApp.use(vuetify)

})