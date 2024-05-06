import { showRoutes } from "hono/dev";
import { createApp } from "honox/server";

const app = createApp({
  root: "/src/routes",
  NOT_FOUND: import.meta.glob("/src/routes/**/_404.(ts|tsx)", {
    eager: true,
  }),
  ERROR: import.meta.glob("/src/routes/**/_error.(ts|tsx)", {
    eager: true,
  }),
  RENDERER: import.meta.glob("/src/routes/**/_renderer.tsx", {
    eager: true,
  }),
  MIDDLEWARE: import.meta.glob("/src/routes/**/_middleware.(ts|tsx)", {
    eager: true,
  }),
  ROUTES: import.meta.glob("/src/routes/**/!(_*|*.test|*.spec).(ts|tsx|mdx)", {
    eager: true,
  }),
});

showRoutes(app);

export default app;
