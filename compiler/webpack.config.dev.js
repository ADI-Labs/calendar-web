"use strict";

var path = require("path");
var entryPath = path.resolve(process.cwd(), "client");
var srcPath = path.resolve(process.cwd(), "app");
var outPath = path.resolve(process.cwd(), "dist");
var assetsPath = path.resolve(srcPath, "assets")
var HtmlWebpackPlugin = require("html-webpack-plugin");
var autoprefixer = require("autoprefixer");
var webpack = require("webpack");

module.exports = {
  debug: true,
  devtool: "#source-map",
  // Not even used because we use webpack-dev-middleware,
  // not webpack-dev-server.
  devServer: {
    // contentBase technically not needed...
    // b/c everything is served from mem
    contentBase: outPath,
    historyApiFallback: true,
    hot: true,
    inline: true,
    proxy: { "/api/*": "http://localhost:5000" },
    stats: { chunks: false }
  },
  target: "node",
  resolve: {
    alias: {
      "assets": assetsPath,
      "app": srcPath
    },
    root: srcPath
  },
  entry: [
    "babel-polyfill",
    entryPath,
    "webpack-hot-middleware/client"
  ],
  output: {
    filename: "[name].bundle.js",
    path: outPath,
    pathinfo: true,
    publicPath: "/"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        srcPath,
        entryPath
      ],
      loader: "babel"
    }, {
      test: /\.css$/,
      include: path.resolve(assetsPath, "css"),
      loaders: [
        "style",
        "css",
        "postcss"
      ]
    }, {
      test: /\.styl$/,
      include: path.resolve(assetsPath, "styles"),
      loaders: [
        "style",
        "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
        "postcss",
        "stylus"
      ]
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      include: assetsPath,
      loader: "file"
    }]
  },
  postcss: [autoprefixer],
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.ejs",
      favicon: path.resolve(assetsPath, "images/favicon.png"),
      template: path.resolve(assetsPath, "template.dev.ejs")
    }),
    new webpack.DefinePlugin({
      "global": JSON.stringify({}), // fix babel-polyfill in node env.
      "process.env.NODE_ENV": JSON.stringify("development"),
      "__DEV__": true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProgressPlugin(function(percentage, message) {
      process.stderr.write(message + "\r");
    }),
    new webpack.ProvidePlugin({
      "fetch": "isomorphic-fetch"
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
