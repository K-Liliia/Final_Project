const { defineConfig } = require('cypress')
const {allureCypress} = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    baseUrl: "https://api.clickup.com/api/v2",
    env: {
      token: 'pk_2144419997_FYG8LWOXN4N816EUCCV0E0YAGXF3LEUI'
    },
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    }
  },
})