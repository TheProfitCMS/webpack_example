'use strict';

let log = require('./components/log');
import polygon from './components/polygon_class';

// EXPORT to Global
window.log = log;


if(DEV_MODE){
  log("Hello World!");
}

// EXPORT to common var
exports.log = log;