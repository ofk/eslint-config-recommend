const { isInstalled } = require('./utils');

module.exports = {
  rules: {
    // Import sorting
    // https://eslint.org/docs/rules/sort-imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    ...(isInstalled('react')
      ? {
          // Prop-types sorting
          // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
          'react/sort-prop-types': [
            'error',
            {
              ignoreCase: false,
              callbacksLast: true,
              requiredFirst: true,
              sortShapeProp: true,
              noSortAlphabetically: false,
            },
          ],
        }
      : {}),
  },
};
