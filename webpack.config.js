const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'my-bundle.js',
    path: path.resolve(__dirname, 'build'),
   },
  module: {
    rules: [{
       test: /\.scss$/i,
       
        use: ['style-loader',MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
    },
     {
        test: /\.js$/,
        exclude: /node_modules/,
        use:['babel-loader']
      }]
  },
  plugins: [new MiniCssExtractPlugin({
      filename:'style1.css'
    }),
    new HtmlWebpackPlugin({
    template:'src/index.html',
    }),
    
   ],
  devServer: {
    port: 4445,
    open: true,
    
  },
};