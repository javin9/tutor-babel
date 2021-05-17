<!--
 * @Desc: 
 * @FilePath: /tutor-babel/docs/md/polyfill.md
 * @Author: liujianwei1
 * @Date: 2021-05-17 14:52:28
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
`polyfill` 直译为 `垫片`、`腻子`，可以理解为兜底的东西，指的是对未能实现的宿主环境进行`兜底`操作，说白了就是打补丁。

总的来说，打补丁主要有三种方法：
- 手动打补丁
- 根据覆盖率自动打补丁
- 根据浏览器特性，动态打补丁

三种方式可以独立使用，也可以相互组合