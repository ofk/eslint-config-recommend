# @ofk/eslint-config-recommend

This is an my eslint config.

It uses [Airbnb's](https://github.com/airbnb/javascript) as a base, has [Prettier](https://prettier.io/) and [TypeScript ESLint](https://typescript-eslint.io/) baked in, and overrides some rules I've seen ourselves having to change often.

## Quick start

1. Install the following dev-dependencies:

   ```
   npm install --save-dev @ofk/eslint-config-recommend eslint prettier typescript
   ```

2. Extend the `@ofk/eslint-config-recommend` config in your `.eslintrc` (or `eslintConfig` key in your `package.json`):

   ```json
   "eslintConfig": {
     "extends": "@ofk/eslint-config-recommend"
   }
   ```

3. Run `eslint` on your project as part of your `lint` and `format` scripts:

   ```json
   "scripts": {
     "lint": "eslint --ext .js,.jsx,.ts,.tsx .",
     "format": "npm run lint -- --fix",
     "pretest": "npm run lint",
     "test": "test command"
   }
   ```

4. (Optional) Set up prettier config in `prettier` key in your `package.json`:

   ```json
   "prettier": "@ofk/eslint-config-recommend/.prettierrc"
   ```

   Read more about shared configs [here](https://prettier.io/blog/2019/04/12/1.17.0.html#config), especially if you need to extend/override the default configuration.
