'use strict';

let log = require('./components/log');

// EXPORT to Global
window.log = log;

log("Hello World!");

// EXPORT to common var
exports.log = log;