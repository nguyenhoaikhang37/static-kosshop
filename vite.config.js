// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "product-portfolio": resolve(__dirname, "product-portfolio/index.html"),
        "product-detail": resolve(__dirname, "product-detail/index.html"),
        brand: resolve(__dirname, "brand/index.html"),
        showrooms: resolve(__dirname, "showrooms/index.html"),
        "main-news": resolve(__dirname, "main-news/index.html"),
        "detail-news": resolve(__dirname, "detail-news/index.html"),
        "news-with-category": resolve(
          __dirname,
          "news-with-category/index.html"
        ),
        "other-contents": resolve(__dirname, "other-contents/index.html"),
        cart: resolve(__dirname, "cart/index.html"),
        payment: resolve(__dirname, "payment/index.html"),
        "thank-you": resolve(__dirname, "thank-you/index.html"),
      },
    },
  },
});
