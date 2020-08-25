const { isInstalled } = require('./utils');

module.exports = {
  rules: {
    // Prohibit default export.
    // see. https://basarat.gitbook.io/typescript/main-1/defaultisbad
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    // Use console.{warn,error} intentionally. So suppress the warning.
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // Define types more strictly.
        '@typescript-eslint/explicit-function-return-type': 'error',
        // Allow single extends empty interface.
        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: true,
          },
        ],
        // temp
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
          },
        ],
        ...(isInstalled('react')
          ? {
              // Use type, not PropTypes.
              'react/prop-types': 'off',
            }
          : {}),
      },
    },
  ],
};
