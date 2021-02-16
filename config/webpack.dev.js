const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  target: 'web', // fix bug: doesn't work hot reload with browserlist
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    open: true,
    contentBase: path.join(__dirname, '..', 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [

  ],
});
