const path = require('path');

module.exports = {
   
  entry: './src/index.js',
  output: {
    filename: 'my-bundle.js',
    path: path.resolve(__dirname, 'build'),
   },
 mode:'development',
  devServer: {
    port: 4445,
    open: true,
    
  },
};