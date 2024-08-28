import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // deploy到GitHub时，配置基础路径
  base: "/Home-Page",
  // 配置@路径, 应用组件时使用@代替./src/
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": join(__dirname, "src"),
    },
  },
});
