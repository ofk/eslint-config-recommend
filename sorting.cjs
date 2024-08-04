const perfectionist = require('eslint-plugin-perfectionist');

const recommendedNatural = perfectionist.configs['recommended-natural'];

// https://perfectionist.dev/

const turnOff = {
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
};

Object.keys(recommendedNatural.rules).forEach((name) => {
  recommendedNatural.rules[name][1].ignoreCase = false;
});

const bestPractices = {
  rules: {
    ...recommendedNatural.rules,
    // https://perfectionist.dev/rules/sort-imports
    'perfectionist/sort-imports': [
      'error',
      {
        ...recommendedNatural.rules['perfectionist/sort-imports'][1],
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
  },
};

module.exports = {
  default: [recommendedNatural, turnOff, bestPractices],
  legacy: {
    extends: ['plugin:perfectionist/recommended-natural-legacy'],
    rules: { ...turnOff.rules, ...bestPractices.rules },
  },
};
