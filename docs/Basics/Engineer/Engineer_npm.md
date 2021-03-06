# 工程化工具发展

## npm 问题

一个问题是，在 npm 安装依赖的过程中会引入大量的子包，，在早期版本（npm 3 之前）中会产生相同依赖包的大量重复拷贝，这在前端项目中会导致无谓的请求流量损耗

另一个饱受诟病的问题是本地依赖管理算法的复杂性以及随之而来的性能、冗余、冲突等问题。而 2016 年发布的 Yarn 正是为解决这些问题而诞生的。和 **npm** 相比，**Yarn** 的主要优点有：

1. **安装速度**：由于 Yarn 在安装依赖时采用的是并行操作，以及它在缓存依赖包时相比 npm 缓存的数据更完整，因此它在初次与重复安装依赖时，普遍都会比 npm 更快。
2. **稳定性**：npm 5 引入的 package-lock 文件，在每次执行 npm install 时仍然会检查更新符合语义规则的依赖包版本，而 yarn.lock 则会严格保证版本的稳定性（尽管，yarn.lock 不能保证 node_modules 的拓扑稳定性）。
3. **Plug'n'Play（PnP）**：Yarn 2.0 发布了 PnP的功能（在更早期的 1.12 版本中就已实现）。PnP 方案具有提升项目安装与解析依赖的速度，以及多项目共享缓存（与普通缓存相比，免去了读写 node_modules 的大量 I/O 操作)，节省占用空间等优势。

## 任务式构建工具

>  任务式构建工具发展历程回顾：
> 2012 年，Ben Alman 发布了基于任务的构建工具 Grunt。
> 2013 年，Eric Schoffstall 发布了流式的构建工具 Gulp。

Grunt vs Gulp
这两种工具的差异性主要体现在：

1. **读写速度：**Gulp 在处理任务的过程中基于 NodeJS 的数据流，本质上是操读写内存，而 Grunt 则是基于临时文件，因此在读写速度上 Gulp 要快于Grunt。
2. **社区使用规模：**截止编写课程的时间点，在 npmjs.com 的周下载量方面，Gulp 为 1,200,000+，约是 Grunt 的两倍。而在插件数量方面，Grunt 社区提供了超过 6000 个不同功能的插件，而 Gulp 社区的插件数量则是 4000 多个。
3. **配置文件的易用性：**相比描述不同插件配置信息的 Gruntfile 而言，使用 pipe 函数描述任务处理过程的方式通常更易于阅读，但编写时需要对数据流有更深入的理解。

任务式的构建工具，虽然解决了开发流程中自动化执行预设任务的问题，但不能解决项目中代码如何组织成不同功能的代码包、不同代码之间如何相互依赖等问题。而解决这类问题的方式就是：模块化。

## 模块化

### commonjs

CommonJS 是一个非浏览器端的 JS 规范， Nodejs就是基于commonjs实现了一套实用的文件管理系统。

不能用在浏览器端的原因：

1. 模块文件中没有函数包裹，变量直接暴露到全局
2. 浏览器端文件是异步并行下载，不适合同步的依赖加载方式

### AMD

为了弥补commonjs不能在浏览器端使用的空缺

