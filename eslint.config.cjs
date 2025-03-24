/* eslint-disable @typescript-eslint/no-require-imports */
const defineConfig = require('@ofk/eslint-config-recommend');

module.exports = defineConfig({
  ignores: ['dist'],
  imports: { node: true },
});
