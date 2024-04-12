const { isInstalled } = require('./utils');

module.exports = isInstalled('react')
  ? {
      // https://github.com/ArnaudBarre/eslint-plugin-react-refresh
      plugins: ['react-refresh'],
      rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      },
    }
  : {};
