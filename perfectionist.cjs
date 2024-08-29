const perfectionist = require('eslint-plugin-perfectionist');
const tseslint = require('typescript-eslint');

// https://perfectionist.dev/

const recommendedNatural = perfectionist.configs['recommended-natural'];

Object.keys(recommendedNatural.rules).forEach((name) => {
  recommendedNatural.rules[name][1].ignoreCase = false;
});

module.exports = {
  flat: [recommendedNatural],
  legacy: {
    extends: ['plugin:perfectionist/recommended-natural-legacy'],
  },
  recommended: tseslint.config(
    {
      rules: {
        ...recommendedNatural.rules,
        // https://perfectionist.dev/rules/sort-imports
        'perfectionist/sort-imports': [
          'error',
          {
            ...recommendedNatural.rules['perfectionist/sort-imports'][1],
            groups: [
              'type',
              ['builtin', 'external'],
              'internal-type',
              'internal',
              ['parent-type', 'sibling-type', 'index-type'],
              ['parent', 'sibling', 'index'],
              'object',
              'side-effect',
              'style',
              'unknown',
            ],
            internalPattern: [
              '@/**', // next.js default pattern
              '~/**', // remix default pattern
            ],
          },
        ],
        // https://perfectionist.dev/rules/sort-jsx-props
        'perfectionist/sort-jsx-props': [
          'error',
          {
            ...recommendedNatural.rules['perfectionist/sort-jsx-props'][1],
            customGroups: {
              reserved: '{key,ref}',
            },
            groups: ['reserved', 'unknown'],
          },
        ],
        // https://perfectionist.dev/rules/sort-union-types
        'perfectionist/sort-union-types': [
          'error',
          {
            ...recommendedNatural.rules['perfectionist/sort-union-types'][1],
            groups: ['unknown', 'nullish'],
          },
        ],
      },
    },
    {
      rules: {
        // https://perfectionist.dev/rules/sort-interfaces
        // https://perfectionist.dev/rules/sort-object-types
        '@typescript-eslint/adjacent-overload-signatures': 'off',

        // https://perfectionist.dev/rules/sort-intersection-types
        // https://perfectionist.dev/rules/sort-union-types
        '@typescript-eslint/sort-type-constituents': 'off',

        // https://perfectionist.dev/rules/sort-imports
        // https://perfectionist.dev/rules/sort-named-imports
        'import/order': 'off',

        // https://perfectionist.dev/rules/sort-jsx-props
        'react/jsx-sort-props': 'off',

        // https://perfectionist.dev/rules/sort-imports
        // https://perfectionist.dev/rules/sort-named-imports
        'sort-imports': 'off',

        // https://perfectionist.dev/rules/sort-objects
        'sort-keys': 'off',
      },
    },
  ),
};
