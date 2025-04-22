const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://vite-react-alpha-lemon.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
