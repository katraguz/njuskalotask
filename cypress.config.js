const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "2rk3dy",
  e2e: {

    baseUrl: 'https://www.njuskalo.hr',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
