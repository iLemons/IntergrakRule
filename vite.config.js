import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // base: "/IntergrakRule",
    base: env.VITE_PROJECT_BASE,
    plugins: [react()],
    server: {
      port: 5188,
    },
  };
});
