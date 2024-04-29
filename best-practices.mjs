// eslint-disable-next-line import/extensions
import jsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';

import { isInstalled } from './isInstalled.cjs';

export default [
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
    },
  },
  ...(isInstalled('react')
    ? [
        {
          rules: {
            // Disable this rule if it conflicts with some rules.
            // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
            'react/function-component-definition': 'off',
          },
        },
      ]
    : []),
  ...(isInstalled('react') && isInstalled('vite')
    ? [
        {
          // Use JSX runtime.
          rules: jsxRuntime.rules,
        },
      ]
    : []),
];

export const typescript = [
  {
    rules: {
      // Enforce using type imports.
      // https://typescript-eslint.io/rules/consistent-type-imports/
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports',
          prefer: 'type-imports',
        },
      ],

      // Define types more strictly.
      // https://typescript-eslint.io/rules/explicit-function-return-type/
      '@typescript-eslint/explicit-function-return-type': 'error',

      // Enforce using property signature for functions.
      // https://typescript-eslint.io/rules/method-signature-style/
      '@typescript-eslint/method-signature-style': ['error', 'property'],

      // Allow single extends empty interface.
      // https://typescript-eslint.io/rules/no-empty-interface/
      '@typescript-eslint/no-empty-interface': [
        'error',
        {
          allowSingleExtends: true,
        },
      ],
      // Disallow type imports with side effects.

      // https://typescript-eslint.io/rules/no-import-type-side-effects/
      '@typescript-eslint/no-import-type-side-effects': 'error',

      // Prevents unnecessary condition instead of no-constant-condition.
      // https://typescript-eslint.io/rules/no-unnecessary-condition/
      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        {
          allowConstantLoopConditions: true,
          allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        },
      ],

      // Relax a warning rule for unused variables.
      // https://typescript-eslint.io/rules/no-unused-vars/
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      // Disabled until no-restricted-syntax rules change
      // cf. https://github.com/airbnb/javascript/issues/1122
      // https://typescript-eslint.io/rules/prefer-for-of/
      '@typescript-eslint/prefer-for-of': 'off',

      // Disallow inline type imports.
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

      // Disable for @typescript-eslint/no-unnecessary-condition
      'no-constant-condition': 'off',

      // Suppress no-floating-promises
      // https://typescript-eslint.io/rules/no-floating-promises/
      // https://eslint.org/docs/latest/rules/no-void
      'no-void': [
        'error',
        {
          allowAsStatement: true,
        },
      ],
    },
  },
  ...(isInstalled('react')
    ? [
        {
          rules: {
            // Allow JSX props spreading in the tsx file.
            // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
            'react/jsx-props-no-spreading': 'off',
            // Use type, not PropTypes.
            // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
            'react/prop-types': 'off',
            // Use default parameters, not DefaultProps
            // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
            'react/require-default-props': 'off',
          },
        },
      ]
    : []),
];
