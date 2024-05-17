const comments = require('@eslint-community/eslint-plugin-eslint-comments/configs');

// https://eslint-community.github.io/eslint-plugin-eslint-comments/

const bestPractices = {
  rules: {
    // https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
    '@eslint-community/eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    // https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
    '@eslint-community/eslint-comments/no-unused-disable': 'error',
  },
};

module.exports = {
  default: [comments.recommended, bestPractices],
  legacy: {
    extends: ['plugin:@eslint-community/eslint-comments/recommended'],
    ...bestPractices,
  },
};
