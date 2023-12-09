// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";

export default defineConfig({
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        chitietsanpham: resolve(__dirname, "chitietsanpham/index.html"),
        danhmucsanpham: resolve(__dirname, "danhmucsanpham/index.html"),
      },
    },
  },
});
