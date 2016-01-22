'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
console.log(`NODE ENV => ${ NODE_ENV }`);

// $ webpack
// $ NODE_ENV=development webpack
const DEV_MODE = NODE_ENV == 'development';
console.log(`DEV MODE => ${ DEV_MODE }`);

// $ NODE_ENV=production webpack
const PROD_MODE = NODE_ENV == 'production';
console.log(`PROD MODE => ${ PROD_MODE }`);

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
    application: './javascripts/application.js',
    order:       './javascripts/order.js'
  },

  output: {
    path: __dirname + '/public/assets',
    filename: "./javascripts/[name].js",

    publicPath: __dirname + '/public/assets/',

    libraryTarget: "var",
    library: ['APP']
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'app-common',
      chanks: ['application', 'order']
    }),

    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      DEV_MODE: DEV_MODE
    })
  ],

  resolve: {
    alias: {
      jquery: __dirname + "/bower_components/jquery/dist/jquery.js"
    }
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
        plugins: ['transform-runtime']
      }
    }]
  }
}

// Uglify on Production mode

if(PROD_MODE){
 module.exports.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
 );
}