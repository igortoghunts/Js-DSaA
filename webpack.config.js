const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    open: 'Google Chrome',
    port: 3000,
    publicPath: '/',
    contentBase: './public',
    hot: true,
    stats: 'minimal',
  },
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'alg.js',
  },
  mode: 'development',
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  devtool: 'inline-source-map',
};
