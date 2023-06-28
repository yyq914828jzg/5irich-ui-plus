# 5irich-ui-plus



> 基于 Elemen5irich-ui 二次封装基础组件地址

## 介绍

> 基于 vue3+ ts+ Element-plus 二次封装组件

这是我在学习 Vue3 中基于[Element-plus](https://element-plus.org/zh-CN/) 二次封装基础组件文档，希望对你有用。可查看 [详细组件案例文档](https://wocwin.github.io/5irich-ui-plus/) 预览

<!-- <p align="center">
  <a href="https://github.com/vuejs/vue" target="_blank">
    <img src="https://img.shields.io/badge/vue-3.2.36-brightgreen.svg" alt="vue3">
  </a>
  <a href="https://gitee.com/wocwin/5irich-ui-plus/stargazers" target="_blank">
    <img src="https://gitee.com/wocwin/5irich-ui-plus/badge/star.svg?theme=dark" alt="5irich-ui-plus">
  </a>
   <a href="https://github.com/wocwin/5irich-ui-plus/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/wocwin/5irich-ui-plus.svg" alt="5irich-ui-plus">
  </a>
   <a href="https://www.npmjs.com/package/5irich-ui-plus" target="_blank">
      <img alt="npm" src="https://img.shields.io/npm/v/5irich-ui-plus.svg" />
    </a>
</p> -->



## npm 方式安装使用

```shell
npm i 5irich-ui-plus
```

### 全局注册使用

```js
// 在main.js中按下引入
import RuiPlus from '5irich-ui-plus'
import '5irich-ui-plus/lib/style.css'
Vue.use(RuiPlus)
```

### 按需引入

```js
// 在main.js中按下引入
import '5irich-ui-plus/lib/style.css'
// 单个.vue文件引入
<script setup lang="ts">
  import {TTable, TPage} from "5irich-ui-plus"
</script>
```

### Volar 组件类型提示(1.1.8版本支持)

```js
// 需要在使用的项目的tsconfig.json文件中添加以下
compilerOptions：{
  "types": [
      "5irich-ui-plus/lib/components.d.ts"
    ],
}

```

## 安装依赖

```shell
pnpm install

```


## 本地运行 vitepress 中组件文档

```shell
// docs项目(文档demo示例)基于vue3+vite项目
npm run docs:dev

```

