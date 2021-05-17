<!--
 * @Desc: 
 * @FilePath: /tutor-babel/docs/md/polyfill.md
 * @Author: liujianwei1
 * @Date: 2021-05-15 14:00:47
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
[官网传送门](https://babeljs.io/docs/en/babel-polyfill)
> 已经在 `Babel@7.4.*`废弃了。`@babel/preset-env`会提到

虽然 @babel/polyfill 已经在 `Babel@7.4.*`废弃了，但是还是有必要讲解一下。

`polyfill` 直译为 `垫片`、`腻子`，可以理解为兜底的东西，指的是对未能实现的宿主环境进行`兜底`操作，说白了就是打补丁。

总的来说，打补丁主要有三种方法：
- 手动打补丁
- 根据覆盖率自动打补丁
- 根据浏览器特性，动态打补丁

三种方式可以独立使用，也可以相互组合，下面我们详细介绍三种打补丁的方式
### 手动打补丁
#### 方法1：直接在html文件中引入Babel的polyfill.js文件
[源代码地址]()
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <script src="./lib/polyfill.js"></script>
  <script src="./index.js"></script>
</body>

</html>
```

#### 方法2：

