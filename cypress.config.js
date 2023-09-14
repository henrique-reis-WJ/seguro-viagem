const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'phodw6',
  viewportWidth: 1440,
  viewportHeight: 900,

  e2e: {
    baseUrl:"https://hub-dev.portoseguro.com.br/loja/travel_insurance",
    setupNodeEvents(on, config) {
    }
  },
});
