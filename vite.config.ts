import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // any call to /rpc/* will be forwarded...
      "/rpc": {
        target: "https://devnet.dplabs-internal.com",
        changeOrigin: true,
        secure: false,              // if you’re on a self‑signed cert
        rewrite: (path) => path.replace(/^\/rpc/, ""),
      },
    },
  },
});
