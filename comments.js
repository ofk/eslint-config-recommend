module.exports = {
  // https://eslint-community.github.io/eslint-plugin-eslint-comments/
  extends: ['plugin:@eslint-community/eslint-comments/recommended'],
  rules: {
    // https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
    '@eslint-community/eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
    ],
    // https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
    '@eslint-community/eslint-comments/no-unused-disable': 'error',
  },
};
