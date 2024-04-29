import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';

export default [
  // https://eslint-community.github.io/eslint-plugin-eslint-comments/
  comments.recommended,
  {
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
  },
];
