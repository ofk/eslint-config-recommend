const reactRefresh = require('eslint-plugin-react-refresh');
const { isInstalled } = require('./isInstalled.cjs');

// https://github.com/ArnaudBarre/eslint-plugin-react-refresh

const bestPractices = {
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};

module.exports = {
  default: isInstalled('react')
    ? [
        {
          plugins: {
            'react-refresh': reactRefresh,
          },
          ...bestPractices,
        },
      ]
    : [],
  legacy: isInstalled('react')
    ? {
        plugins: ['react-refresh'],
        ...bestPractices,
      }
    : {},
};
