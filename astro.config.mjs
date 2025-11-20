import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://devinekask.github.io/",
  base: "/workflows",
  integrations: [
    starlight({
      title: "Workflows",
      favicon: "/favicon.ico",
      customCss: ["./src/styles/custom.css"],
      lastUpdated: true,
      editLink: {
        baseUrl: "https://github.com/devinekask/workflows/edit/main/",
      },
      logo: {
        src: "./src/assets/img/devinelogo.svg",
      },
      sidebar: [
        {
          label: "Terminal",
          slug: "terminal-01",
        },
        {
          label: "Git",
          autogenerate: { directory: "git" },
        },
        {
          label: "Modules",
          autogenerate: { directory: "modules" },
        },
        {
          label: "Vite",
          slug: "vite-01-intro",
        },
        {
          label: "Homebrew",
          slug: "homebrew-01-intro",
        },
        {
          label: "Code quality",
          autogenerate: { directory: "code quality" },
        },
        {
          label: "Deployment",
          autogenerate: { directory: "deployment" },
        },
      ],
    }),
  ],
});
