const path = require("path");

module.exports = {

  mode: 'development', // production
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "public", "js"),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    port: 9000,
  },
};