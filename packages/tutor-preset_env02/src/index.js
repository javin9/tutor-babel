/*
 * @Desc: 
 * @FilePath: /tutor-babel/packages/tutor-preset_env02/src/index.js
 * @Author: liujianwei1
 * @Date: 2021-05-17 17:26:23
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

import '@babel/polyfill'
var promise = Promise.resolve('babel useBuiltIns entry demo')
console.log(promise)