'use strict';

var log = function() {
  try {
    // debugger;
    return console.log.apply(console, arguments);
  } catch (_error) {}
};

// module.exports = log;
export default log;