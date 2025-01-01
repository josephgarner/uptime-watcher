import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "./",
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      shared: path.resolve(__dirname, "../../packages/shared/src"),
    },
  },
});
