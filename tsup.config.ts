import { defineConfig } from 'tsup';

export default defineConfig({
  banner: {
    js: `import { createRequire } from 'module'; const require = createRequire(import.meta.url);`,
  },
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  skipNodeModulesBundle: true,
});
