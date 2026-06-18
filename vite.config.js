import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// React + Vite. `public/` is served at the site root (assets, uploads).
export default defineConfig({
  plugins: [react()],
  server: { open: true },
});
