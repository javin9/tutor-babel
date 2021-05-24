<!--
 * @Desc: 简介
 * @FilePath: /tutor-babel/docs/md/guide.md
 * @Author: liujianwei1
 * @Date: 2021-05-14 13:35:27
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
### 什么是Babel
[官方](https://babeljs.io/)一句简短的介绍：
```bash
Babel is a JavaScript compiler.
```
直白的翻译就是，Babel是一个Javascript编译器

### 为什么要编译
究其原因，前端语言特性和宿主环境(浏览器/Node.js)高速发展，宿主环境无法及时支持新的语言特性。因此开发者需要兼容各种宿主环境。  
有了Babel之后，在项目中完全可以用最新的Javascript语言特性(例如：ES6)编写程序，最后，Babel根据宿主环境，对代码降级处理。

Babel编译代码时，会依据配置中的 `preset`和`plugin` 根据目标环境(`browserslist`)，注入一些模块依赖，对代码降级处理。可以简单的概括为两部分：
- **语法转换**——例如：箭头函数语法、async函数语法、class定义类语法、解构赋值等等都是ES6新增的语法。
- **补齐新的API**——例如：`Array.prototype.includes`,`Array.prototype.flatMap()`,`String.prorotype.includes`,`Promise`、`Map`、`Symbol`、`Proxy`、`Iterator`等

### 小试牛刀
[在线测试地址](https://babeljs.io/repl)   
ES6中 `let`、`const`、`箭头函数`转换成ES5
```javascript
let number1=10
let number2=20
const sum=(num1,num2)=> num1+num2
// Promise.resolve('God is with you');
```

编译之后结果：

```javascript
"use strict";

var number1 = 10;
var number2 = 20;

var sum = function sum(num1, num2) {
  return num1 + num2;
};
```
- `let`,`const` 变成了`var`
- 箭头函数变成了带有`function`的普通函数



