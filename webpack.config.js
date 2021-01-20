const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      { test: /\.ejs$/, loader: 'ejs-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/layout.js",
      page: 'home',
      filename: 'index.html',
      title: 'Home'
    }),
    new HtmlWebpackPlugin({
      template: "src/layout.js",
      page: 'about',
      filename: 'about.html',
      title: 'About'
    }),
  ]
};
