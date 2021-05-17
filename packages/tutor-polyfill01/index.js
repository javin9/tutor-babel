/*
 * @Desc:
 * @FilePath: /tutor-babel/packages/tutor-polyfill01/index.js
 * @Author: liujianwei1
 * @Date: 2021-05-17 13:25:04
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */
const map = new Map()
map.set('ab', 1)
const value = map.get('ab')
console.log(value)