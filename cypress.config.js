// cypress.config.js
const { defineConfig } = require("cypress");
const { installPlugin } = require("@chromatic-com/cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      installPlugin(on, config);
    },
    baseUrl: "http://localhost:5173/",
    experimentalRunAllSpecs: true,
  },
});
