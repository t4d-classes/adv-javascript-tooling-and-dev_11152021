const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/app.ts'
  },
  resolve: {
    extensions: ['.ts', '.tsx', 'js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: {
      type: 'umd',
      name: '[name]',
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