'use strict';

import log from './components/log';

// EXPORT to Global
// EXPORT to common var APP
window.log  = log;
exports.log = log;

if(DEV_MODE){
  log("ORDER PAGE!")
}