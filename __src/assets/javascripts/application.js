'use strict';

// let log = require('./components/log');
// let Polygon = require('./components/polygon_class');
import log from './components/log';
import Polygon from './components/polygon_class';

// EXPORT to Global
window.log     = log;
window.Polygon = Polygon;
window.$       = require('jquery');

// EXPORT to common var APP
exports.log     = log;
exports.Polygon = Polygon;

if( DEV_MODE ){
  log("Hello World!")
  log( Polygon )
}