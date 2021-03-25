const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    open: true,
  },
  plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader','css-loader', 'postcss-loader']
        },
        {
            test: /\.(ttf|eot|woff|woff2|svg)$/,
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
        },
    ],
  }
};