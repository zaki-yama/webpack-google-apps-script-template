import webpack from 'webpack';
import path from 'path';
import GasPlugin from 'gas-webpack-plugin';
import Dotenv from 'dotenv-webpack';

export default {
  context: path.resolve(__dirname, './lib'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './src'),
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new GasPlugin(),
    new Dotenv(),
  ],
};
