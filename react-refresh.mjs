import reactRefresh from 'eslint-plugin-react-refresh';

import { isInstalled } from './isInstalled.cjs';

export default isInstalled('react')
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
  : [];
