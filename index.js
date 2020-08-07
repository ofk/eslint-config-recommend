module.exports = {
  extends: ['./airbnb.js', './typescript.js', './prettier.js'].map(require.resolve),
};
