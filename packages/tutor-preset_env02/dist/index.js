"use strict";

require("core-js/modules/web.timers.js");

require("core-js/modules/web.immediate.js");

require("core-js/modules/web.dom.iterable.js");

var promise = Promise.resolve('babel useBuiltIns entry demo');
console.log(promise);
