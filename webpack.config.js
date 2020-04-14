const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader'
         }
      }, { test: /\.css$/, use: 'css-loader' }
   ]
  },
  plugins: [
    new HtmlWebpackPlugin({
       template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}