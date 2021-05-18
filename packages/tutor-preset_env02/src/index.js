/*
 * @Desc: 
 * @FilePath: /tutor-babel/packages/tutor-preset_env02/src/index.js
 * @Author: liujianwei1
 * @Date: 2021-05-17 17:26:23
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

//手动引入@babel/polyfill
import '@babel/polyfill'
const array1 = ['a', 'b', 'c', 'd', 'e']

console.log(array1.copyWithin(0, 3, 4))

console.log(array1.copyWithin(1, 3))