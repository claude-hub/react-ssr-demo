const path = require('path');
const nodeExternal = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
  // 为了忽略诸如path、fs等内置模块。
  target: 'node',
  entry: path.resolve(__dirname, '../src/server/index.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'server.js',
  },
  // 以忽略节点\模块文件夹中的所有模块
  externals: [nodeExternal()],
});
