/// <reference types="vitest" />
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/

export default () => {
  const env = loadEnv("mock", process.cwd(), "");
  const processEnvValues = {
    "process.env": Object.entries(env).reduce((prev, [key, val]) => {
      return {
        ...prev,
        [key]: val,
      };
    }, {}),
  };

  return defineConfig({
    plugins: [react()],
    define: processEnvValues,
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "src/shared/config/setupTests.ts",
      include: ["src/**/*.test.{ts,tsx}"],
    },
    server: {
      port: 3000,
      cors: {
        credentials: true,
        origin: "*",
      },
      proxy: {
        "/api": {
          target: "http://localhost:9000/api",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  });
};
