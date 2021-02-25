const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: ['whatwg-fetch', path.join(__dirname, '..', 'src', 'index.js')],
  module: {
    rules: [
      // Babel use for js files
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },

      // Copy use images to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Inline fonts and svg
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.join('src', 'img'),
          to: path.join('img'),
          noErrorOnMissing: true,
        },
      ],
    }),
    new LodashModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.join(__dirname, '..', 'src', 'template.html'),
      filename: 'index.html',
    }),
    new ESLintPlugin({
      files: [__dirname, '.', 'src', 'config'],
      formatter: 'table',
    }),
  ],
};
