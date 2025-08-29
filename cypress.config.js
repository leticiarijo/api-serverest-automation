const { defineConfig } = require("cypress");
import fs from 'fs';


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://serverest.dev/",
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
