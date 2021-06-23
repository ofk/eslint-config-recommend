module.exports = {
  extends: ['./base.js', './best-practices.js', './sorting.js'].map(require.resolve),
};
