module.exports = {
  rules: {
    // Use console.{warn,error} intentionally. So suppress the warning.
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
  },
};
