const { isInstalled } = require('./utils');

module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
      rules: {
        // cf. https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v18.2.0/packages/eslint-config-airbnb-base/rules/variables.js#L21-L22
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        // cf. https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v18.2.0/packages/eslint-config-airbnb-base/rules/variables.js#L41-L42
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: true, classes: true, variables: true },
        ],
        'import/extensions': [
          'error',
          {
            '.ts': 'never',
            '.tsx': 'never',
            '.d.ts': 'never',
            '.js': 'never',
            '.jsx': 'never',
          },
        ],
        ...(isInstalled('react')
          ? {
              'react/jsx-filename-extension': [
                'error',
                {
                  extensions: ['.jsx', '.tsx'],
                },
              ],
            }
          : {}),
      },
    },
  ],
};
