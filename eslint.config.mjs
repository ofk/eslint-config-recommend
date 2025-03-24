/* eslint-disable import/no-unresolved */
import defineConfig from '@ofk/eslint-config-recommend';

export default defineConfig({
  ignores: ['dist'],
  imports: { node: true },
});
