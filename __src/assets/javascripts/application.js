'use strict';

let log = require('./components/log');

// EXPORT to Global
window.log = log;


if(DEV_MODE){
  log("Hello World!");
}

// EXPORT to common var
exports.log = log;