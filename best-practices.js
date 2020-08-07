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
};
