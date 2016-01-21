'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
console.log(`NODE ENV => ${ NODE_ENV }`);

const DEV_MODE = NODE_ENV == 'development';
console.log(`DEV MODE => ${ DEV_MODE }`);

// cheap-inline-module-source-map | source-map
const SOURCE_MAP_TYPE = DEV_MODE ? 'source-map' : null;

const webpack = require('webpack');

module.exports = {
  watch: DEV_MODE,

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: SOURCE_MAP_TYPE,

  // the base path which will be used to resolve entry points
  context: __dirname + '/__src/assets',
  entry: {
    application: './javascripts/application.js'
  },

  output: {
    path: __dirname + '/public/assets',
    filename: "./javascripts/[name].js",
    library: 'app'
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      DEV_MODE: DEV_MODE
    })
  ]
}