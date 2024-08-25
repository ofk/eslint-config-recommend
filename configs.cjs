const globals = require('globals');

const config = require('./config.cjs');

module.exports = {
  browser: [
    {
      languageOptions: {
        ecmaVersion: 'latest',
        globals: globals.browser,
      },
    },
    ...config,
  ],
};
