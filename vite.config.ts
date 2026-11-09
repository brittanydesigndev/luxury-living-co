import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // Relative base so the built site works on GitHub Pages (/luxury-living-co/),
  // Vercel, Netlify or any other host without changes.
  base: "./",
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  server: { host: "::", port: 8080 },
});
