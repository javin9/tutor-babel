/*
 * @Desc:
 * @FilePath: /tutor-babel/packages/tutor-polyfill03/src/index.js
 * @Author: liujianwei1
 * @Date: 2021-05-17 13:40:04
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

import "@babel/polyfill"

var promise = Promise.resolve('hello babel')
console.log(promise)