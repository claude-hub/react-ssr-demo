const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
  entry: path.resolve(__dirname, '../src/client/index.js'),
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'client.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
});
