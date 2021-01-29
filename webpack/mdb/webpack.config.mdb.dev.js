const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.mdb.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    inline: true,
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: Path.resolve(__dirname, '../../src/mdb/index.html'),
      inject: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          Path.resolve(__dirname, '../../src'),
          Path.resolve(__dirname, '../../mdb')
        ],
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.js$/,
        include: [
          Path.resolve(__dirname, '../../src'),
          Path.resolve(__dirname, '../../mdb')
        ],
        loader: 'babel-loader',
      },
    ],
  },
});
