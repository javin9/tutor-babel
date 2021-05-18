"use strict";

require("core-js/modules/es6.array.copy-within.js");

/*
 * @Desc: 
 * @FilePath: /tutor-babel/packages/tutor-preset_env03/src/index.js
 * @Author: liujianwei1
 * @Date: 2021-05-17 17:26:32
 * @LastEditors: liujianwei1
 * @Reference Desc: 
 */
//新的语法
//这里不需要手动导入 @babel/polyfill
//新的语法
var array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(0, 3, 4));
console.log(array1.copyWithin(1, 3));
