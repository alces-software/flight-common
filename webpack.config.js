/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
/* global process, __dirname */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var env = process.env.NODE_ENV;

var appName = "flight-common";
var devtool, pathinfo, plugins, loaders;

if (env === "production") {
  devtool = "source-map";
  pathinfo = false;

  plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"',
      __PRODUCTION__: true,
      __DEVELOPMENT__: false,
      __TEST__: false,
      __UNIVERSAL__: false
    }),
    new ExtractTextPlugin(appName + ".[hash].css"),
    new webpack.optimize.UglifyJsPlugin({
      compress : {
        screw_ie8 : true,   // eslint-disable-line camelcase
        warnings: false
      },
      mangle : {
        screw_ie8 : true   // eslint-disable-line camelcase
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ];

  loaders = [
    {
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("css!sass")
    },
    {
      test: /\.json$/,
      loader: 'json'
    }
  ]

} else {
  devtool = "cheap-module-inline-source-map";
  pathinfo = true;

  plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __PRODUCTION__: false,
      __DEVELOPMENT__: true,
      __TEST__: false,
      __UNIVERSAL__: false
    })
  ];

  loaders = [
    {
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.css$/,
      loader: "style!css?sourceMap"
    },
    {
      test: /\.scss$/,
      loader: "style!css?sourceMap!sass?sourceMap"
    },
    {
      test: /\.json$/,
      loader: 'json'
    }
  ]

}

module.exports = {
  context: __dirname + '/src',
  devtool: devtool,
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  },
  resolve: {
    root: [
      path.resolve('src'),
      path.resolve('src/modules')
    ],
    extensions: [
      '', '.js'
    ]
  },
  output: {
    pathinfo: pathinfo,
    libraryTarget: 'umd',
    library: appName
  },
  plugins: plugins,
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: loaders.concat([
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,   loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader" },
      { test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader" },
      { test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader" },
      { test: /\.png(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "url-loader?limit=100000" },
      { test: /\.md$/,     loaders: ["html", "markdown"]}
    ])
  }
};
