<!--
 * @Desc: 配置文件
 * @FilePath: /tutor-babel/docs/md/configuration.md
 * @Author: liujianwei1
 * @Date: 2021-05-14 21:19:58
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
## 官方文档地址
[传送门](https://babeljs.io/docs/en/config-files)

## 配置文件类型
Babel 有两种并行的配置文件方式，可以一起使用，也可以单独使用。
- 项目范围的配置(Project-wide)
- 文件相关的配置(File-relative)
  - `.babelrc`（和 `.babelrc.js`）文件
  - 带有 "babel" 键的 package.json 文件

| Version      | Changes |
| --- | --- |
| `v7.8.0`     | 支持 `.babelrc.mjs` , `babel.config.mjs`       |
| `v7.7.0`  | 支持 `.babelrc.json`, `.babelrc.cjs`, `babel.config.json`, `babel.config.cjs`|

## 项目范围的配置
Babel 7.x 中的新功能，Babel 具有 "root" 目录的概念，"root"目录默认为`当前的工作目录`。编译时，`Babel`将自动搜索相对于此根目录下的`babel.config.js`文件，或其Babel认可的文件，比如：`babel.config.json`,`babel.config.cjs`,`babel.config.mjs`等

##### 优点
它们是非常合适并值得广泛应用的配置，它甚至允许`plugins` 和 `presets` 可以轻松应用于`node_modules`或符号链接包中的文件  

##### 缺点
因为它依赖于工作目录,如果一个项目属于[Monorepo](https://zhuanlan.zhihu.com/p/77577415)类型项目，当工作目录不是的根目录(root)，编译时就找不到配置文件，如此一来在`Monorepo`中使用会比较痛苦。

```bash
babel.config.js
package.json
packages/
  mod1/
    package.json
    src/index.js
  mod2/
    package.json
    src/index.js
```
各个子模块构建的时候，用户将需要通过`rootMode`手动设置它的路径，以此来加载`babel.config.js`文件

##### CLI
```bash
babel --root-mode upward src -d lib
```

##### Webpack
```bash
module: {
  rules: [
    {
      loader: "babel-loader",
      options: {
        rootMode: "upward",
      },
    },
  ];
}
```
详细内容可以参考[官方文档的演示](https://babeljs.io/docs/en/config-files#monorepos)

## 文件相关配置x
编译时，Babel 从 正在被编译的 文件 所在的 目录开始 去搜索 `.babelrc.json`或其他Babel认可的配置文件。比如：`babelrc`,`.babelrc.js`,`/package.json＃babel`。 有了这个功能，就可以为 package的子模块 创建独立的配置。
同时，`文件相关配置`和`项目相关配置`可以共同使用。下面是官方的解释：
>  File-relative configurations are also merged over top of project-wide config values, making them potentially useful for specific overrides, though that can also be accomplished through "overrides".  

通俗的翻译就是以下两点：
- 不同的配置：文件相关配置 和 项目相关配置 可以合并到一起
- 相同的配置：文件相关配置 会覆盖 项目相关配置
```bash
babel.config.js
package.json
packages/
  mod1/
    package.json
    src/index.js
    .babelrc
  mod2/
    package.json
    src/index.js
    .babelrc
```