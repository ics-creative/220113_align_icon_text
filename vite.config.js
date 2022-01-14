const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  base: "/220113_align_icon_text",
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        top: resolve(__dirname, "index.html"),
        layout: resolve(__dirname, "01-layout/index.html"),
        animation: resolve(__dirname, "02-animation/index.html"),
        etc: resolve(__dirname, "03-etc/index.html"),
      },
    },
  },
});
