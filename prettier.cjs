const prettier = require('eslint-config-prettier');

// https://github.com/prettier/eslint-config-prettier

module.exports = {
  default: [prettier],
  legacy: {
    extends: ['prettier'],
  },
};
