const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  mode: 'development', // production
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    port: 9000,
  },
  plugins: [new HtmlWebpackPlugin({ template: 'public/index.html' })]
};