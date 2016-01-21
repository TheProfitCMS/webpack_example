'use strict';

module.exports = {
  // the base path which will be used to resolve entry points
  context: __dirname + '/src/assets',
  entry: './javascripts/app.js',

  output: {
    filename: './public/assets/javascripts/application.js'
  }
}