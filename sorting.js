const { isInstalled } = require('./utils');

module.exports = {
  extends: 'plugin:perfectionist/recommended-natural',
  rules: {
    // https://eslint-plugin-perfectionist.azat.io/rules/sort-imports
    // https://eslint-plugin-perfectionist.azat.io/rules/sort-named-imports
    'sort-imports': 'off',
    'import/order': 'off',

    // https://eslint-plugin-perfectionist.azat.io/rules/sort-interfaces
    // https://eslint-plugin-perfectionist.azat.io/rules/sort-object-types
    '@typescript-eslint/adjacent-overload-signatures': 'off',

    // https://eslint-plugin-perfectionist.azat.io/rules/sort-jsx-props
    'react/jsx-sort-props': 'off',
    'perfectionist/sort-jsx-props': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        groups: ['reserved', 'unknown'],
        'custom-groups': {
          reserved: '{key,ref}',
        },
      },
    ],

    // https://eslint-plugin-perfectionist.azat.io/rules/sort-objects
    'sort-keys': 'off',

    // https://eslint-plugin-perfectionist.azat.io/rules/sort-intersection-types
    // https://eslint-plugin-perfectionist.azat.io/rules/sort-union-types
    '@typescript-eslint/sort-type-constituents': 'off',
    'perfectionist/sort-union-types': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        'nullable-last': true,
      },
    ],

    // https://eslint-plugin-perfectionist.azat.io/rules/sort-svelte-attributes
    'perfectionist/sort-svelte-attributes': 'off',

    // https://eslint-plugin-perfectionist.azat.io/rules/sort-vue-attributes
    'perfectionist/sort-vue-attributes': 'off',
  },
};
