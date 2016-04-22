"use strict";

var path = require("path");
var entryPath = path.resolve(process.cwd(), "client");
var srcPath = path.resolve(process.cwd(), "app");
var outPath = path.resolve(process.cwd(), "dist");
var assetsPath = path.resolve(srcPath, "assets")
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var autoprefixer = require("autoprefixer");
var webpack = require("webpack");

module.exports = {
  resolve: {
    alias: {
      "assets": assetsPath,
      "app": srcPath,
      "react": "react-lite",
      "react-dom": "react-lite"
    },
    root: srcPath
  },
  entry: {
    vendor: [
      "babel-polyfill",
      "immutable",
      "isomorphic-fetch",
      "moment",
      "react",
      "react-dom",
      "react-css-modules",
      "react-redux",
      "react-router",
      "react-router-redux",
      "redux",
      "redux-actions",
      "redux-immutablejs",
      "redux-promise",
      "redux-thunk",
      "reselect"
    ],
    index: entryPath
  },
  output: {
    path: outPath,
    publicPath: "/",
    filename: "js/[name]-[hash].bundle.js"
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
      loader: ExtractTextPlugin.extract(
        "style",
        "css!postcss"
      )
    }, {
      test: /\.styl$/,
      include: path.resolve(assetsPath, "styles"),
      loader: ExtractTextPlugin.extract(
        "style",
        "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!stylus"
      )
    }, {
      test: /.*\.(gif|png|jpe?g|svg)$/i,
      include: assetsPath,
      loaders: [
        "file?hash=sha512&digest=hex&name=images/[hash].[ext]",
        "image-webpack?"
        + JSON.stringify({
          progressive: true,
          optimizationLevel: 7,
          interlaced: false,
          pngquant: {
            quality: "65-90",
            speed: 2,
            verbose: true
          }
        })
      ]
    }]
  },
  postcss: [autoprefixer],
  plugins: [
    new ExtractTextPlugin(
      "css/[name]-[hash].css",
      { allChunks: true }
    ),
    new HtmlWebpackPlugin({
      filename: "index.ejs",
      favicon: path.resolve(assetsPath, "images/favicon.png"),
      template: path.resolve(assetsPath, "template.prod.ejs")
    }),
    new webpack.DefinePlugin({
      "global": JSON.stringify({}), // fix babel-polyfill in node env.
      "process.env.NODE_ENV": JSON.stringify("production"),
      "__DEV__": false
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]), // saves ~100k from build
    new webpack.ProgressPlugin(function(percentage, message) {
      process.stderr.write(message + "\r");
    }),
    new webpack.ProvidePlugin({
      "fetch": "isomorphic-fetch"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "js/[name]-[hash].js"
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        warnings: false
      }
    })
  ]
};
