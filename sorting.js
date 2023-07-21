const { isInstalled } = require('./utils');

module.exports = {
  rules: {
    // Import sorting
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
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
    // https://typescript-eslint.io/rules/consistent-type-imports/
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],
    ...(isInstalled('react')
      ? {
          // Prop-types sorting
          // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
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
