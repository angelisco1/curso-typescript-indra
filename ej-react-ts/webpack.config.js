var path = require('path');
var entryPath = path.join(__dirname, 'src');
var outputPath = path.join(__dirname, 'dist');

module.exports = {
  entry: path.join(entryPath, 'app.tsx'),
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  }
}