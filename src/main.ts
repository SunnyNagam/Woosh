import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Vuetify
import { createVuetify } from "vuetify";
import { createRouter, createWebHistory } from "vue-router";
import Explore from "./Explore.vue";
import Woosh from "./Woosh.vue";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Icons
import { aliases, mdi } from "vuetify/iconsets/mdi";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/explore",
      name: "explore",
      component: Explore,
    },
    {
      path: "/",
      name: "home",
      component: Woosh,
    },
  ],
});

const wooshTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#F2F3F1",
    primary: "#1E60AD",
    "primary-darken-1": "#133C6C",
    secondary: "#F0BCD4",
    "secondary-darken-1": "#E27DAC",
    error: "#DA4167",
    // vv default vv
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

const app = createApp(App);
app.use(
  createVuetify({
    theme: {
      defaultTheme: "wooshTheme",
      themes: {
        wooshTheme,
      },
    },
    components,
    directives,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: { mdi },
    },
  })
);
app.use(router);
app.mount("#app");
