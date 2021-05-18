"use strict";

require("core-js/modules/es.array.flat.js");

require("core-js/modules/es.promise.js");

/*
 * @Desc:
 * @FilePath: /tutor-babel/packages/tutor-preset_env06/src/index.js
 * @Author: liujianwei1
 * @Date: 2021-05-18 11:43:39
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
Promise.resolve('ddd');
