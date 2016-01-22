'use strict';

// let log = require('./components/log');
import log from './components/log';

// EXPORT to Global
window.log = log;

if(DEV_MODE){
  log("Hello World!")
}

// let Polygon = require('./components/polygon_class');
import Polygon from './components/polygon_class';

window.Polygon = Polygon;

if( DEV_MODE ){
  log( Polygon )
}

// EXPORT to common var APP
exports.log     = log;
exports.Polygon = Polygon;