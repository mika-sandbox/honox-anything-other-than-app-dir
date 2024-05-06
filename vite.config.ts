import pages from "@hono/vite-cloudflare-pages";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [client({ entry: "/src/client.ts" })],
    };
  }
  return {
    plugins: [
      honox({
        entry: "/src/server.ts",
        islandComponents: {
          isIsland: (id) => {
            return path
              .resolve(path.join(import.meta.dirname, "src", id))
              .includes("islands");
          },
        },
      }),
      pages(),
    ],
  };
});
