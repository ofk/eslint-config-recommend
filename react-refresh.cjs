const reactRefresh = require('eslint-plugin-react-refresh');
const tseslint = require('typescript-eslint');

const { isInstalled } = require('./isInstalled.cjs');

// https://github.com/ArnaudBarre/eslint-plugin-react-refresh

module.exports = isInstalled('react')
  ? {
      flat: [
        {
          plugins: {
            'react-refresh': reactRefresh,
          },
        },
      ],
      legacy: {
        plugins: ['react-refresh'],
      },
      recommended: tseslint.config({
        rules: {
          'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        },
      }),
    }
  : {
      flat: [],
      legacy: {},
      recommended: [],
    };
