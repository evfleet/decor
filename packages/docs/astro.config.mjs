import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable React for the Algolia search component.
    react(),
  ],
  site: `https://astro.build`,
});
