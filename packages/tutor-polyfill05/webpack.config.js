/*
 * @Desc:
 * @FilePath: /tutor-babel/packages/tutor-polyfill05/webpack.config.js
 * @Author: liujianwei1
 * @Date: 2021-05-17 15:04:46
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */
const path = require('path')
module.exports = {
  // entry: ['./src/polyfill.js', './src/index.js'],  第一种：直接引入源文件
  entry: ['@babel/polyfill', './src/index.js'], //第二种：@babel/polyfill
  // entry: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js'], //第三种
  output: {
    filename: "./dist/main.js",
    path: path.resolve(__dirname, '')
  }
}