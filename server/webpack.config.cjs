const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  resolve: {
    fallback: {
      zlib: require.resolve('browserify-zlib'),
      querystring: require.resolve('querystring-es3'),
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
      fs: false,
      stream: require.resolve('stream-browserify'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  mode: 'production'
};