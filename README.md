# @ofk/eslint-config-recommend

[![npm](https://img.shields.io/npm/v/@ofk/eslint-config-recommend)](https://npmjs.com/package/@ofk/eslint-config-recommend)
![ci](https://github.com/ofk/eslint-config-recommend/actions/workflows/ci.yml/badge.svg)

This is an my eslint config.

It uses [@ofk/eslint-config](https://github.com/ofk/eslint-config) as a base, has [Prettier](https://prettier.io/) baked in, and overrides some rules I've seen ourselves having to change often.

## Quick start

1. Install the following dev-dependencies:

   ```sh
   npm install --save-dev @ofk/eslint-config-recommend eslint prettier typescript
   ```

2. Extend the `@ofk/eslint-config-recommend` config in your `eslint.config.js`:

   ```js
   import config from '@ofk/eslint-config-recommend';

   export default config();
   ```

3. Run `eslint` on your project as part of your `lint` and `format` scripts:

   ```js
   "scripts": {
     "lint": "eslint . && prettier --check .",
     "format": "eslint --fix . && prettier --write .",
     "pretest": "npm run lint",
     "test": "test command"
   }
   ```

4. (Optional) Set up prettier config in `prettier` key in your `package.json`:

   ```js
   "prettier": "@ofk/eslint-config-recommend/.prettierrc.json"
   ```

   Read more about shared configs [here](https://prettier.io/blog/2019/04/12/1.17.0.html#config), especially if you need to extend/override the default configuration.
