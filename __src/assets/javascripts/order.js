'use strict';

import $   from 'jquery';
import log from './components/log';

// EXPORT to Global
// window.$ = require('jquery');
window.$ = $;

// EXPORT to common var APP
window.log  = log;
exports.log = log;

if(DEV_MODE){
  log("ORDER PAGE!")
}