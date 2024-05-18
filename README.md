# @ofk/eslint-config-recommend

This is an my eslint config.

It uses [Airbnb TypeScript](https://github.com/iamturns/eslint-config-airbnb-typescript) as a base, has [Prettier](https://prettier.io/) and [TypeScript ESLint](https://typescript-eslint.io/) baked in, and overrides some rules I've seen ourselves having to change often.

## Quick start

1. Install the following dev-dependencies:

   ```sh
   npm install --save-dev @ofk/eslint-config-recommend @typescript-eslint/eslint-plugin@^7.0.0 @typescript-eslint/parser@^7.0.0 eslint prettier typescript
   ```

2. Extend the `@ofk/eslint-config-recommend` config in your `.eslintrc` (or `eslintConfig` key in your `package.json`):

   ```js
   "eslintConfig": {
     "extends": "@ofk/eslint-config-recommend"
   }
   ```

3. Run `eslint` on your project as part of your `lint` and `format` scripts:

   ```js
   "scripts": {
     "lint": "eslint --ext .js,.jsx,.ts,.tsx .",
     "format": "npm run lint -- --fix",
     "pretest": "npm run lint",
     "test": "test command"
   }
   ```

4. (Optional) Set up prettier config in `prettier` key in your `package.json`:

   ```js
   "prettier": "@ofk/eslint-config-recommend/.prettierrc"
   ```

   Read more about shared configs [here](https://prettier.io/blog/2019/04/12/1.17.0.html#config), especially if you need to extend/override the default configuration.
