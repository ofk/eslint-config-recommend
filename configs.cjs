const { FlatCompat } = require('@eslint/eslintrc');
const globals = require('globals');
const tseslint = require('typescript-eslint');

const airbnbDefine = require('./airbnb.cjs');
const eslintCommentsDefine = require('./eslint-comments.cjs');
const perfectionistDefine = require('./perfectionist.cjs');
const prettierDefine = require('./prettier.cjs');
const reactRefreshDefine = require('./react-refresh.cjs');
const typescriptDefine = require('./typescript.cjs');

const compat = new FlatCompat();
const airbnb = [...airbnbDefine.compat(compat), ...airbnbDefine.recommended];
const typescript = [...typescriptDefine.compat(compat), ...typescriptDefine.recommended];
const reactRefresh = [...reactRefreshDefine.flat, ...reactRefreshDefine.recommended];
const eslintComments = [...eslintCommentsDefine.flat, ...eslintCommentsDefine.recommended];
const perfectionist = [...perfectionistDefine.flat, ...perfectionistDefine.recommended];
const prettier = [...prettierDefine.flat];

const all = [
  ...airbnb,
  ...typescript,
  ...reactRefresh,
  ...eslintComments,
  ...perfectionist,
  ...prettier,
];
const browser = tseslint.config(
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
    },
  },
  ...all,
);

module.exports = {
  airbnb,
  all,
  browser,
  eslintComments,
  perfectionist,
  prettier,
  reactRefresh,
  typescript,
};
