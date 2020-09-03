// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const { preprocessTypescript } = require('@nrwl/cypress/plugins/preprocessor');

module.exports = function (on, config) {
  on(
    'file:preprocessor',
    preprocessTypescript(config, (wpConfig) => {
      wpConfig.node = {
        fs: 'empty',
        child_process: 'empty',
        readline: 'empty',
      };
      wpConfig.module.rules.push({
        test: /\.feature$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/loader',
          },
        ],
      });
      return wpConfig;
    })
  );
};
