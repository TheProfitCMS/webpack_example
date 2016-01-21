'use strict';

module.exports = function() {
  try {
    return console.log.apply(console, arguments);
  } catch (_error) {}
};