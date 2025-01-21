import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://cleanuri.com", // Target API
  //       changeOrigin: true, // Adjust the Origin header to match the target
  //       rewrite: (path) => path.replace(/^\/api/, ""), // Remove '/api' prefix
  //     },
  //   },
  // },
});
