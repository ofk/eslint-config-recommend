const reactRefresh = require('eslint-plugin-react-refresh');
const { isInstalled } = require('./isInstalled.cjs');

module.exports = {
  default: isInstalled('react')
    ? [
        // https://github.com/ArnaudBarre/eslint-plugin-react-refresh
        {
          plugins: {
            'react-refresh': reactRefresh,
          },
          rules: {
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
          },
        },
      ]
    : [],
};
