import { createClient } from "honox/client";

createClient({
  island_root: "/src",
  ISLAND_FILES: {
    ...import.meta.glob("/src/islands/**/[a-zA-Z0-9[-]+.(tsx|ts)"),
    ...import.meta.glob("/src/routes/**/_[a-zA-Z0-9[-]+.island.(tsx|ts)"),
  },
});
