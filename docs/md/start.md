<!--
 * @Desc: 
 * @FilePath: /tutor-babel/docs/md/start.md
 * @Author: liujianwei1
 * @Date: 2021-05-14 16:43:54
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->

实际项目中，Babel需要工程化协作，需要和各种工具(如Webpack)相互配合，因为Babel一定是庞大复杂的。  
这里先配置一个最简单的Babel编译工程，熟悉一下整个过程。

### 源码地址
[babel-basic 传送门](https://github.com/rupid/tutor-babel/tree/master/packages/babel-basic)

### 安装
初始化项目 `babel-basic`。 安装npm包
```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```


### 配置和编译
step1:在根目录下面 新建一个`.babelrc`文件(或`babel.config.js`，`.babelrc.js`)。添加如下内容
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

step2:在新建 `lib/index.js`文件，并添加如下内容
```javascript
let number1 = 10
let number2 = 20
const sum = (num1, num2) => num1 + num2
```

step2:在`package.json`文件的 `scripts`里面添加如下配置
```json
"scripts": {
    "build": "babel lib/index.js --out-file dist/index.js"
  }
```
step3:运行命令
```bash
npm run build
#或者
yarn build
#或
npx babel lib/index.js --out-file dist/index.js
```

step4:查看编译后的结果
```bash
"use strict";

var number1 = 10;
var number2 = 20;

var sum = function sum(num1, num2) {
  return num1 + num2;
};

```

> 以上展示了一个最简单的Babel使用工程，输出结果和[Babel介绍](./guide.md)的例子结果是一样的

### 庖丁解牛
Babel配置文件有三种存在方式
- 项目根目录下面的`.babelrc`文件 (本人更喜欢这种)
- 项目根目录下面的`.babelrc.js`文件
- 项目根目录下面的`babel.config.js`或者``babel.config.json`文件
- package.json里面配置 `presets`和`plugins`对象
- ...
- ...

编译时，默认会寻找当前项目根目录下面的`.babelrc`或`babel.config.js`等配置文件。

- [@babel/core](https://babeljs.io/docs/en/babel-core): Babel实现转换的核心，它可以根据配置(``.babelrc``)，进行源码的编译转换,提供基础的编译能力
- [@babel/cli](https://babeljs.io/docs/en/babel-cli):  Babel提供的命令行功能，依赖`@babel/core`,在终端中通过命令行方式运行，编译文件或目录。
- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) 允许 `去配置` 需要支持的`目标环境`,提供ES6转换ES5的语法转换规则。如果不使用它，也可以完成编译，但是编译之后仍旧是E66，说白了就是没有编译。
> 目标环境是由[browserslist](https://github.com/browserslist/browserslist)规范确定的，如果项目中没有配置目标环境，会采用[默认配置](https://babeljs.io/docs/en/babel-preset-env#targets)

### 总结
Babel编译工程包括：
- Babel不同功能的npm包
- Babel配置文件
- 目标环境配置
- 源文件
- 触发命令脚本 `babel lib/index.js --out-file dist/index.js`

