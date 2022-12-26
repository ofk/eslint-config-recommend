const { isInstalled } = require('./utils');

module.exports = {
  rules: {
    // Prohibit default export.
    // see. https://basarat.gitbook.io/typescript/main-1/defaultisbad
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    // Use console.{warn,error} intentionally. So suppress the warning.
    // https://eslint.org/docs/rules/no-console
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    ...(isInstalled('react')
      ? {
          // Disable this rule if it conflicts with some rules.
          // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
          'react/function-component-definition': 'off',
        }
      : {}),
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // Enforce using type imports.
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
          },
        ],
        // Define types more strictly.
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        '@typescript-eslint/explicit-function-return-type': 'error',
        // Enforce using property signature for functions.
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
        '@typescript-eslint/method-signature-style': ['error', 'property'],
        // Allow single extends empty interface.
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: true,
          },
        ],
        // Prevents unnecessary condition instead of no-constant-condition.
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
        'no-constant-condition': 'off',
        '@typescript-eslint/no-unnecessary-condition': [
          'warn',
          {
            allowConstantLoopConditions: true,
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
          },
        ],
        // Relax a warning rule for unused variables.
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
          },
        ],
        ...(isInstalled('react')
          ? {
              // Define type Props = {}.
              // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
              '@typescript-eslint/ban-types': [
                'error',
                {
                  extendDefaults: true,
                  types: {
                    '{}': false,
                  },
                },
              ],
              // Allow JSX props spreading in the tsx file.
              // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
              'react/jsx-props-no-spreading': 'off',
              // Use type, not PropTypes.
              // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
              'react/prop-types': 'off',
              // Use default parameters, not DefaultProps
              // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
              'react/require-default-props': 'off',
            }
          : {}),
      },
    },
  ],
};
