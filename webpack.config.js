module.exports = {
  entry:  __dirname + "/app.js",
  output: {
    path: __dirname + "/output",
    filename: "bundle.js"
  },

  module: {
    loaders: [{
      test: /jquery(\.min)?\.js$/,
      loader: 'expose?jQuery'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    }, {
      test: /\.(eot|woff2?|ttf|svg)$/,
      loader: 'file-loader'
    }]
  }
}
