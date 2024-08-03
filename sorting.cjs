const perfectionist = require('eslint-plugin-perfectionist');

const recommendedNatural = perfectionist.configs['recommended-natural'];

// https://eslint-plugin-perfectionist.azat.io/

const turnOff = {
  rules: {
    // https://eslint-plugin-perfectionist.azat.io/rules/sort-interfaces
    // https://eslint-plugin-perfectionist.azat.io/rules/sort-object-types
    '@typescript-eslint/adjacent-overload-signatures': 'off',

    // https://eslint-plugin-perfectionist.azat.io/rules/sort-intersection-types
    // https://eslint-plugin-perfectionist.azat.io/rules/sort-union-types
    '@typescript-eslint/sort-type-constituents': 'off',

    // https://eslint-plugin-perfectionist.azat.io/rules/sort-imports
    // https://eslint-plugin-perfectionist.azat.io/rules/sort-named-imports
    'import/order': 'off',

    // https://eslint-plugin-perfectionist.azat.io/rules/sort-jsx-props
    'react/jsx-sort-props': 'off',

    // https://eslint-plugin-perfectionist.azat.io/rules/sort-imports
    // https://eslint-plugin-perfectionist.azat.io/rules/sort-named-imports
    'sort-imports': 'off',

    // https://eslint-plugin-perfectionist.azat.io/rules/sort-objects
    'sort-keys': 'off',
  },
};

const bestPractices = {
  rules: {
    // https://eslint-plugin-perfectionist.azat.io/rules/sort-imports
    'perfectionist/sort-imports': [
      'error',
      {
        ...recommendedNatural.rules['perfectionist/sort-imports'][1],
        internalPattern: [
          '@/**', // next.js default pattern
        ],
      },
    ],
    // https://eslint-plugin-perfectionist.azat.io/rules/sort-jsx-props
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
