module.exports = {
  extends: ['./airbnb.js', './comments.js', './typescript.js', './prettier.js'].map(
    require.resolve,
  ),
};
