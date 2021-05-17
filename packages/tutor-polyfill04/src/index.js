/*
 * @Desc:
 * @FilePath: /tutor-babel/packages/tutor-polyfill04/src/index.js
 * @Author: liujianwei1
 * @Date: 2021-05-17 14:34:37
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

import "core-js/stable"
import "regenerator-runtime/runtime"

var promise = Promise.resolve('hello babel')
console.log(promise)