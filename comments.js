module.exports = {
  // https://mysticatea.github.io/eslint-plugin-eslint-comments/#%F0%9F%93%96-usage
  extends: ['plugin:eslint-comments/recommended'],
  rules: {
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
    ],
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
    'eslint-comments/no-unused-disable': 'error',
  },
};
