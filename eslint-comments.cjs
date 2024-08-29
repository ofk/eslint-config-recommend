const comments = require('@eslint-community/eslint-plugin-eslint-comments/configs');
const tseslint = require('typescript-eslint');

// https://eslint-community.github.io/eslint-plugin-eslint-comments/

module.exports = {
  flat: [comments.recommended],
  legacy: {
    extends: ['plugin:@eslint-community/eslint-comments/recommended'],
  },
  recommended: tseslint.config({
    rules: {
      // https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
      '@eslint-community/eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
      // https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
      '@eslint-community/eslint-comments/no-unused-disable': 'error',
    },
  }),
};
