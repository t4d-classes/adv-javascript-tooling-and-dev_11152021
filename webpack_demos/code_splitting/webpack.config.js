const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  mode: 'development', // production
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'vendor',
    },
    vendor: './src/vendor.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle-[chunkhash:6].js',
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    port: 9000,
  },
  plugins: [new HtmlWebpackPlugin({ template: 'public/index.html' })],
  externals: {
    'jquery': 'jQuery',
  },
};