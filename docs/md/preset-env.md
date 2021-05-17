<!--
 * @Desc: 
 * @FilePath: /tutor-babel/docs/md/preset-env.md
 * @Author: liujianwei1
 * @Date: 2021-05-17 15:39:07
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
[官方文档](https://babeljs.io/docs/en/babel-preset-env)  
>@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!


翻译过来就是`@babel/preset-env`会根据目标环境来进行语法转换和打补丁。具体来讲，是根据参数 targets 来确定目标环境，默认情况下它编译为ES2015，可以根据项目需求进行配置：
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        //https://babeljs.io/docs/en/babel-preset-env#targets
        "targets": "defaults"
      }
    ]
  ]
}
```
> @babel/env是@babel/preset-env的简写



在[快速开始](./start.md) 章节中，我们使用了`@babel/preset-env`展示了语法转换。本节，我们继续学习 通过配置参数项的方式 去做语法转换和按需打补丁

最新的`@babel/preset-env` 参数总共有15个，我们重点学习四个：
- `targets`
- `useBuiltIns`
- `modules`
- `corejs`

这四个参数很重要，其他的参数很少使用，大家私底下做一下了解，特殊场景需要时，再去看文档

对于preset，当不需要对其设置参数的时，其只需要把该preset的名字放入presets对于的数组里即可，例如
```json
{
  "presets": ["@babel/preset-env"]
}
```

如果需要对某个preset设置参数，格式如下：
```json
{
  "presets": [ ["@babel/preset-env",{"targets": "defaults"}] ]
}
```

## 目标环境配置表
在[快速开始](./start.md) 章节中,我们提到过目标环境配置表[browserslist](https://github.com/browserslist/browserslist)，也在用Vue或者React官方cli工具初始化的项目的package.json里面看到过`browserslist`。具体看一下下面配置含义：
```json
  "browserslist": [
    "> 2%",
    "not ie <= 8"
  ]
```
上面的配置含义是，目标环境是市场份额大于2%的浏览器并且不考虑IE8及以下的IE浏览器。

目标环境配置表的作用是 指定了代码要运行在那些浏览器或者node.js环境，确定了代码运行的目标环境。

`Autoprefixer`、`Postcss`等就可以根据 `browserslist`的配置，自动判断是否要增加CSS前缀（例如'-webkit-'）。`@babel/preset-env`预设也会读取`browserslist`的配置

如果我们的`@babel/preset-env`不设置任何参数，Babel就会完全根据`browserslist`的配置来做语法转换。如果没有`browserslist`，那么Babel就会把所有ES6的语法转换成ES5版本

[快速开始](./start.md) 章节例子中，既没有添加 `browserslist`，也没有给 `@babel/preset-env`设置参数，ES6箭头函数语法被转换成了ES5的函数定义语法。
编译前：
```javascript
let number1 = 10
let number2 = 20
const sum = (num1, num2) => num1 + num2
```
编译后：
```bash
"use strict";

var number1 = 10;
var number2 = 20;

var sum = function sum(num1, num2) {
  return num1 + num2;
};

```
接下来，我们在[Demo](https://github.com/rupid/tutor-babel/tree/master/packages/tutor-preset_env) 项目的根目录下面，添加`.browserslistrc`配置,内容如下：
```json
chrome 62
```
> 注意：字符串两边不要添加引号

运行`babel ./src/index.js --out-file ./dist/index.js`查看`dist/index.js`结果
```javascript
//新的语法
let number1 = 10;
let number2 = 20;

const sum = (num1, num2) => num1 + num2;
```
转换后的代码仍然是箭头函数，因为`Chrome62`已经实现了箭头函数语法，所以不会转换成ES5的函数定义语法。

现在把`.browserslistrc`中的`Chrome62` 降级为 `Chrome36`,运行`babel ./src/index.js --out-file ./dist/index.js`查看`dist/index.js`结果
```javascript
var number1 = 10;
var number2 = 20;

var sum = function sum(num1, num2) {
  return num1 + num2;
};
```
转换后的代码是ES5的函数定义语法，因为Chrome36不支持箭头函数语法。
>注意:Babel使用`browserslist`的配置功能依赖于`@babel/preset-env`，如果Babel没有配置任何预设或插件，那么Babel对转换的代码会不做任何处理，原封不动生成和转换前一样代码

以上内容，展示了`@babel/preset-env`对源代码中，在`browserslist`设定的目标环境不支持语法进行了编译降级处理。

接下来继续学习`@babel/preset-env`是如何通过设置参数，去实现对目标环境不支持的特性API进行部分引用。

## targets
取值范围
- 字符串：`string` 
- 字符串数组： `Array<string>` 
- 字符串对象 ` { [string]: string }`  
默认值空对象{}。 参数项的写法与browserslist是一样的，例如：
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
      "targets": {
         "chrome": "58",
         "ie": "11"
       }
      }
    ]
  ]
}
```
`@babel/preset-env`中的`target`优先级高于`browserslist`的配置。
> 推荐使用browserslist的配置,不要去单独配置@babel/preset-env的targets

## useBuiltIns
取值范围：
- `usage`
- `entry`
- `false`  
默认值为：false

useBuiltIns的取值 决定了`@babel/preset-env`如何处理`polyfill`
- 没有设置该参数或者取了默认值false，polyfill就会全部引入。
- 取值为"entry"或"usage"的时候，会根据配置的目标环境找出需要的polyfill进行部分引入

### entry
[源代码地址](https://github.com/rupid/tutor-babel/tree/master/packages/tutor-preset_env02)  
Babel配置
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ]
}
```

安装npm包
```bash
  npm install --save-dev @babel/cli @babel/core  @babel/preset-env
  npm install --save @babel/polyfill
```

useBuiltIns的取值为entry的之后，需要手动的显示导入`@babel/polyfill`(或者在 webpack的entry入口导入)。
```javascript
//导入 
import '@babel/polyfill'

var promise = Promise.resolve('babel useBuiltIns entry demo')
console.log(promise)
```

browserslist配置
```
chrome 90
```
运行`npm run build`
```bash
> $ npm run build                                                                                                                                                     ⬡ 12.21.0 [±master ●]

> tutor-preset_env02@1.0.0 build /Users/liujianwei/Documents/personal_code/tutor-babel/packages/tutor-preset_env02
> babel ./src/index.js --out-file ./dist/index.js


WARNING (@babel/preset-env): We noticed you're using the `useBuiltIns` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the `corejs` option.

You should also be sure that the version you pass to the `corejs` option matches the version specified in your `package.json`'s `dependencies` section. If it doesn't, you need to run one of the following commands:

  npm install --save core-js@2    npm install --save core-js@3
  yarn add core-js@2              yarn add core-js@3

More info about useBuiltIns: https://babeljs.io/docs/en/babel-preset-env#usebuiltins
More info about core-js: https://babeljs.io/docs/en/babel-preset-env#corejs
                                                                               
```
chrome 60 编译结果：
```bash
"use strict";

require("core-js/modules/web.timers.js");

require("core-js/modules/web.immediate.js");

require("core-js/modules/web.dom.iterable.js");

var promise = Promise.resolve('babel useBuiltIns entry demo');
console.log(promise);

```
Babel针对Chrome 90 不支持的API特性进行引用，一共引入了3个core-js的API补齐模块。同时也可以看到，因为Chrome 90已经支持Promise特性，所以没有引入promise相关的API补齐模块。

下面修改browserslist里chrome 32。运行`npm run build`

chrome 32编译结果：
```javascript
"use strict";

....

require("core-js/modules/es6.promise.js");

require("core-js/modules/es7.promise.finally.js");
...
...
require("regenerator-runtime/runtime.js");

var promise = Promise.resolve('babel useBuiltIns entry demo');
console.log(promise);
```
由于引用太多，这里只显示了部分。可以看到 promise的API被引入了






