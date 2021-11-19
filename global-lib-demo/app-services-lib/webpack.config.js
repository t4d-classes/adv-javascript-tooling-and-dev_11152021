const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    services: './src/app.services.ts'
  },
  resolve: {
    extensions: ['.ts', '.tsx', 'js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[name].js',
    library: {
      type: 'umd',
      name: ['app', '[name]'],
      umdNamedDefine: true,
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      }
    ]
  }
}