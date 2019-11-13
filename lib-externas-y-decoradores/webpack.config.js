var path = require('path');
var entryPath = path.join(__dirname, 'src');
var outputPath = path.join(__dirname, 'dist');

module.exports = {
  entry: path.join(entryPath, 'app.ts'),
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.(css|sass|scss)$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  },
  resolve: {
    extensions: ['.js', '.ts']
  }
}