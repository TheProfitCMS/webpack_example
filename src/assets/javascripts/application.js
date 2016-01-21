'use strict';

let log = require('./components/log');

// EXPORT to Global
window.log = log;

// EXPORT to common var
exports.log = log;