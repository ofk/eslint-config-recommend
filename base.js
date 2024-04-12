module.exports = {
  extends: [
    './airbnb.js',
    './react-refresh.js',
    './comments.js',
    './typescript.js',
    './prettier.js',
  ].map(require.resolve),
};
