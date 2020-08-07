module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
      rules: {
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
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.jsx', '.tsx'],
          },
        ],
      },
    },
  ],
};
