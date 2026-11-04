import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-symbols-outlined/material-symbols-outlined.css";
import "@quasar/extras/material-symbols-rounded/material-symbols-rounded.css";
import "quasar/src/css/index.sass";
import "@/assets/scss/main.scss";

import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"; // 召喚

import App from "./App.vue";
import router from "./router";
import quasarLang from "quasar/lang/ja";

import {
  Quasar,
  AppFullscreen,
  Dialog,
  Loading,
  Notify,
  LocalStorage,
  SessionStorage,
} from "quasar";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate).use(({ store }) => {
  store.$router = markRaw(router);
});

app.use(router);
app.use(pinia);

app.use(Quasar, {
  plugins: {
    Loading,
    AppFullscreen,
    Dialog,
    Notify,
    LocalStorage,
    SessionStorage,
  }, // import Quasar plugins and add here
  config: {
    loading: {
      message: "処理中...",
      backgroundColor: "blue-3",
    },
    brand: {
      primary: "#006ca1",
      secondary: "#4c4c4c",
      accent: "#fbfb00",
    },
    screen: {
      bodyClasses: true,
    },
  },
  lang: quasarLang,
});

app.mount("#app");
