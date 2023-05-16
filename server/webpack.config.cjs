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
      assert: require.resolve('assert/'),
      "util": require.resolve("util"),
      "os": require.resolve("os-browserify/browser"),
      "http": require.resolve("stream-http"),
      "net": require.resolve("net"),
      "url": require.resolve("url"),
      "async_hooks": require.resolve("async_hooks")
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    errorDetails: true
  },
  mode: 'production'
};