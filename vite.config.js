import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compress from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(), // React plugin for Vite
    compress({ algorithm: "gzip" }), // Enable gzip compression for production
  ],
  build: {
    target: "esnext", // Modern JavaScript target
    minify: "terser", // Minify using Terser for smaller bundles
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Split vendor libraries
        },
      },
    },
    assetsInlineLimit: 4096, // Inline assets below 4 KB for better loading
  },
  esbuild: {
    drop: ["console", "debugger"], // Remove console and debugger statements in production
  },
  server: {
    open: true, // Automatically open the app in the browser
    cors: true, // Enable CORS for API calls
  },
});
