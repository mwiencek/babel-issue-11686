module.exports = function (api) {
  api.cache(false);
  return {
    plugins: [
      ['@babel/plugin-transform-react-jsx', {
        runtime: 'automatic',
      }],
      '@babel/plugin-transform-react-constant-elements',
    ],
  };
};
