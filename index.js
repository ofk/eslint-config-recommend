module.exports = {
  extends: ['./base.js', './best-practices.js'].map(require.resolve),
};
