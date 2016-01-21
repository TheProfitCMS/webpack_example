'use strict';

module.exports = function() {
  try {
    debugger;
    return console.log.apply(console, arguments);
  } catch (_error) {}
};