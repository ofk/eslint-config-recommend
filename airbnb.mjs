import { FlatCompat } from '@eslint/eslintrc';

import { isInstalled } from './isInstalled.cjs';

const compat = new FlatCompat();

export default compat.extends(
  // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#usage
  ...(isInstalled('react')
    ? ['eslint-config-airbnb', 'eslint-config-airbnb/hooks']
    : ['eslint-config-airbnb/base']),
);
