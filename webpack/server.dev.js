const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {

  context: path.resolve(__dirname, '../server'),
  entry: [
    'webpack/hot/poll?1500',
    'babel-regenerator-runtime',
    './index',
  ],
  mode: 'development',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'server.bundle.js',
  },
  watch: true,
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  target: 'node',
  externals: [
    nodeExternals({
      whitelist: [
        'webpack/hot/poll?1500',
        'bootstrap/dist/css/bootstrap.css',
      ],
    }),
  ],

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(css|scss)$/, loader: 'null-loader' },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new StartServerPlugin('server.bundle.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        ENV: JSON.stringify('server'),
        BABEL_ENV: JSON.stringify('node'),
        SCRIPT_URL: JSON.stringify('http://localhost:8888/dist/bundle.js'),
      },
    }),
    new Dotenv()
  ],
  optimization: {
    namedModules: true,
    noEmitOnErrors: true,
  },
};
