# 软技能

## 设计一个`Autocomplete`组件

今天是又是一个理论题，不一样的是针对逻辑思维的拷问，设计`Autocomplete`组件（又叫搜索组件、自动补全组件）时，你会如何设计？需要考虑什么问题呢？

如果不知道 `Autocomplete` 组件是什么的，你可以观察下 Google 的搜索框，多实验几次就知道啦...

### 通用组件

我们设计组件的原则，首先要看的就是组件的通用性、可移植性和扩展性，组件的粒度要小，其次就是保证安全性。

### 功能思考

1. 支持模糊搜索，自动补全
2. 一键清空
3. 支持同步，异步搜索
4. 保存历史搜索记录

### 设计概要

支持slot扩展，

支持input，change，blur等事件

注意安全性，提交的时候先转义

注重性能，添加防抖节流函数

注重业务侧和用户体验是最重要的，不要为了实现而实现，在保证用户体验的前提下，多思考下对其他组件和其他协作开发者的影响。



## 说一下你们权限的控制，路由权限以及按钮权限

