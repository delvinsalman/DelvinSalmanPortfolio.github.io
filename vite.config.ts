import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Served from https://delvinsalman.github.io/DelvinSalmanPortfolio.github.io/
export default defineConfig({
  base: "/DelvinSalmanPortfolio.github.io/",
  plugins: [react(), tailwindcss()],
});
