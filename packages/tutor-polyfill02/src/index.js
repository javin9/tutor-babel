/*
 * @Desc:
 * @FilePath: /tutor-babel/packages/tutor-polyfill02/src/index.js
 * @Author: liujianwei1
 * @Date: 2021-05-17 13:40:04
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

import "./polyfill"

var promise = Promise.resolve('hello babel')
console.log(promise)