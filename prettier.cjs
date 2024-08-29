const prettier = require('eslint-config-prettier');

const { isInstalled } = require('./isInstalled.cjs');

// https://github.com/prettier/eslint-config-prettier

module.exports = isInstalled('prettier')
  ? {
      flat: [prettier],
      legacy: {
        extends: ['prettier'],
      },
    }
  : {
      flat: [],
      legacy: {},
    };
