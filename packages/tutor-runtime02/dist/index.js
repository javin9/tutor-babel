/*
 * @Desc: 
 * @FilePath: /tutor-babel/packages/tutor-runtime02/dist/index.js
 * @Author: liujianwei1
 * @Date: 2021-05-18 15:36:27
 * @LastEditors: liujianwei1
 * @Reference Desc: 
 */
"use strict"

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"))

function foo () {
  return _foo.apply(this, arguments)
}

function _foo () {
  _foo = (0, _asyncToGenerator2.default)(function* () {
    return 1
  })
  return _foo.apply(this, arguments)
}
