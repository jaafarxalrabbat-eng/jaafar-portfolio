import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Works on GitHub Pages even if the repository name changes.
  base: "./",
  plugins: [react(), tailwindcss()],
});
