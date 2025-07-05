const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'https://restful-booker.herokuapp.com', 
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]]
  ,timeout: 10000
});
