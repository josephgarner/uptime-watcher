import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
  plugins: [
    VitePluginNode({
      adapter: "express",
      appPath: "./src/server.ts", // Path to your server entry
    }),
  ],
  server: {
    port: 4000,
  },
});
