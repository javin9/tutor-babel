<!--
 * @Desc: 
 * @FilePath: /tutor-babel/docs/md/plugin-and-presets.md
 * @Author: liujianwei1
 * @Date: 2021-05-16 12:37:08
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
- [插件-传送门](https://babeljs.io/docs/en/plugins)
- [预设-传送门](https://babeljs.io/docs/en/presets)

Babel官方的插件和预设的数量非常多，不过常用的插件和预只有几个，接下来重点讲解这几个插件和预，其他的可以举一反三，触类旁通

## 关于是插件(Plugin)
Babel 插件担负着编译过程中的核心任务：转换 AST

Babel 编译代码的过程可分为三个阶段：
- 解析（parsing）-- 由`@babel/parser`执行
- 转换（transforming）-- 由`@babel/core`执行
- 生成（generating）-- 由`@babel/generator`执行  

Babel 本质上只是一个代码的搬运工，如果不给 Babel 装上插件，它将会把输入的代码原样输出。正是因为有插件的存在， Babel 才能将输入的代码进行转变，从而生成新的代码  

#### 插件分类
Babel插件大致分为以下两种：
- 语法插件（syntax plugin）。作用于 `@babel/parser`，负责将代码解析为抽象语法树（AST）。官方的语法插件以 `babel-plugin-syntax` 开头
- 补齐新的API插件（transform plugin）。 作用于 `@babel/core`，负责转换 AST 的形态。官方的转换插件以 `babel-plugin-transform`（正式）或 `babel-plugin-proposal`（提案）开头

> 语法插件虽名为插件，但其本身并不具有功能性。语法插件所对应的语法功能其实都已在`@babel/parser`里实现，插件的作用只是将对应语法的解析功能打开。所以下文提及的 Babel 插件将专指转换插件

#### 插件的选择
虽然Babel@7官方有90多个插件，不过大半已经整合在`@babel/preset-env`、`@babel/preset-react`、`@babel/preset-typescript`等预设里了，我们在开发的时候直接使用预设就可以了

目前比较常用的插件只有`@babel/plugin-transform-runtime`。其他很少用，起码我是没用过

## 什么是预设(Presets)？
Babel的预设(Presets)是用来简化插件(Plugins)的使用的，即一组预先设定的插件，是Babel插件的组合。

#### 官方推荐的preset
目前官方推荐的preset，有下面四个：

- `@babel/preset-env` 所有项目都会用到的
- `@babel/preset-react` react框架需要的
- `@babel/preset-flow` flow需要的
- `@babel/preset-typescript` typescript需要的  
其它的preset，如在Babel@6的时代，常见的babel-preset-es2015、babel-preset-es2016、babel-preset-es2017、babel-preset-latest、babel-preset-stage-0、babel-preset-stage-1、babel-preset-stage-2 等这些从Babel@7开始已经`不推荐使用了`

一个简单的vue工程，Babel官方的preset只需要配一个`@babel/preset-env`就可以了。

### 总结
1.本文介绍了什么是插件，什么事预设，以及插件和预设之间的关系。实际开发中可能用到4个预设和1个插件。分别是`@babel/preset-env`、`@babel/preset-flow`、`@babel/preset-react`、`@babel/preset-typescript`这4个预设，以及 `@babel/plugin-transform-runtime` 这1个插件。

2.接下来我们会学习`@babel/polyfill`、`@babel/preset-env`、`@babel/plugin-transform-runtime`与等内容。

