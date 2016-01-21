'use strict';

module.exports = {
  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  // cheap-inline-module-source-map
  devtool: "source-map",

  // the base path which will be used to resolve entry points
  context: __dirname + '/__src/assets',
  entry: {
    application: './javascripts/application.js'
  },

  output: {
    path: __dirname + '/public/assets',
    filename: "./javascripts/[name].js",
    library: 'app'
  }
}