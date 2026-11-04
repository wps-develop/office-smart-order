import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

import fs from "fs";
import path from "path";

const proxy_server_base_url =
  process.env.VITE_BASE_URL ?? "https://dev70.wps-speed.com:40443/";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        loadPaths: ["."],
      },
      scss: {
        // constants と mixins を全 vue ファイルに自動で流し込む
        additionalData: `
        @use "@/assets/scss/_quasar.scss" as *;
        @use "@/assets/scss/_constants.scss";
        @use "@/assets/scss/_mixins.scss";
      `,
      },
    },
  },

  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: "src/quasar-variables.scss",
    }),
    process.env.NODE_ENV === "development" ? VueDevTools() : null,
  ],
  base: "/smart-order/",
  server: {
    proxy: {
      "/api": {
        target: proxy_server_base_url,
        secure: false,
        changeOrigin: true,
      },
    },
    https: {
      key: fs.existsSync("../certs/192.168.11.84-key.pem")
        ? fs.readFileSync("../certs/192.168.11.84-key.pem")
        : fs.readFileSync("../localhost-key.pem"),
      cert: fs.existsSync("../certs/192.168.11.84.pem")
        ? fs.readFileSync("../certs/192.168.11.84.pem")
        : fs.readFileSync("../localhost.pem"),
    },
    host: true,
    port: 3029,
    watch: {
      usePolling: true,
    },
  },
});
