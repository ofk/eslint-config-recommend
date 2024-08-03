const globals = require('globals');

const config = require('./config.cjs');

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
    },
  },
  ...config,
];
