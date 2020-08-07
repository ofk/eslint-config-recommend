module.exports = {
  extends: ['plugin:eslint-comments/recommended'],
  rules: {
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
    ],
    'eslint-comments/no-unused-disable': 'error',
  },
};
