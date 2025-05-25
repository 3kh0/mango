import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: "3kh0.net",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  compatibilityDate: "2024-11-01",
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxt/fonts",
    "@nuxt/icon",
    "nuxt-umami",
  ],
  umami: {
    id: "ab5f5820-5c1d-4035-bbfc-8815f46dbfa2",
    host: "https://data.3kh0.net",
    autoTrack: true,
  },
  robots: {
    blockNonSeoBots: true,
    blockAiBots: true,
  },
});
