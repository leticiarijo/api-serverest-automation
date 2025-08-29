const { defineConfig } = require("cypress");
import fs from 'fs';


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://serverest.dev/",
    reporter: "mochawesome",
    reporterOptions: {
    reportDir: "cypress/mochawesome-reports",
    overwrite: false,
    html: false,
    json: true
  } ,
    setupNodeEvents(on, config) {
      on('task', {
        deleteFile(path) {
          if (fs.existsSync(path)) {
            fs.unlinkSync(path);
            return null;
          }
          return null;
        },
      });
    },
  },
});
