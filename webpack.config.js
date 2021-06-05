const path = require('path')

const config = {
  entry: ['@babel/polyfill' , path.resolve(__dirname, 'src/index.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js' 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
}

module.exports = config