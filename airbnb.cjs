// eslint-disable-next-line import/extensions
const jsxRuntime = require('eslint-plugin-react/configs/jsx-runtime.js');
const tseslint = require('typescript-eslint');

const { isInstalled } = require('./isInstalled.cjs');

// https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
const legacyExtends = isInstalled('react')
  ? ['eslint-config-airbnb', 'eslint-config-airbnb/hooks']
  : ['eslint-config-airbnb/base'];

module.exports = {
  compat: (compat) => compat.extends(...legacyExtends),
  legacy: {
    extends: legacyExtends,
  },
  recommended: tseslint.config(
    {
      rules: {
        // Prohibit default export.
        // see. https://basarat.gitbook.io/typescript/main-1/defaultisbad
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',

        // Use console.{warn,error} intentionally. So suppress the warning.
        // https://eslint.org/docs/rules/no-console
        'no-console': [
          'warn',
          {
            allow: ['warn', 'error', 'assert'],
          },
        ],

        ...(isInstalled('react')
          ? {
              // Fix airbnb default rule.
              // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
              'jsx-a11y/label-has-associated-control': [
                'error',
                {
                  assert: 'either', // changed
                  controlComponents: [],
                  depth: 25,
                  labelAttributes: [],
                  labelComponents: [],
                },
              ],
              // Disable this rule if it conflicts with some rules.
              // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
              'react/function-component-definition': 'off',
            }
          : {}),
      },
    },
    ...(isInstalled('react') && isInstalled('vite') ? [jsxRuntime] : []),
    ...(isInstalled('react') && isInstalled('next') ? [jsxRuntime] : []),
  ),
};
