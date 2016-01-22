'use strict';

// let log = require('./components/log');
// let Polygon = require('./components/polygon_class');
import log     from './components/log';
import Polygon from './components/polygon_class';

// import about  from './components/about';
// import orders from './components/orders';

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

// On Ready
$(function(){
  log("Hello World from On ready");

  $('.js--app--routing-btn').on('click', function(e){
    var btn     = $(e.target);
    var content = $('.js--app--content');

    require.ensure([], function(require){

      var module_name = btn.data('module');
      var module      = require("./components/" + module_name);

      module.init();
    })
  })
})