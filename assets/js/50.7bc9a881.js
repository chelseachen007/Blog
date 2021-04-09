(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{522:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端模块化"}},[t._v("#")]),t._v(" 前端模块化")]),t._v(" "),a("p",[a("code",[t._v("CommonJS")]),t._v("、"),a("code",[t._v("AMD")]),t._v("、"),a("code",[t._v("CMD")]),t._v("都是社区对模块定义的规范，而"),a("code",[t._v("NodeJS")]),t._v("、"),a("code",[t._v("RequireJS")]),t._v("，"),a("code",[t._v("seaJS")]),t._v("则分别是对这三种规范的实现。")]),t._v(" "),a("p",[t._v("以下按时间线了解这几种规范")]),t._v(" "),a("h2",{attrs:{id:"commonjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[t._v("#")]),t._v(" CommonJS")]),t._v(" "),a("p",[t._v("commonJs"),a("strong",[t._v("规范")]),t._v("通过简单的 API 声明服务器的模块，目标是让 JavaScript 可以运行在"),a("strong",[t._v("浏览器之外")]),t._v("的所有地方。Node.js 就是借鉴 CommonJs 实现了一套非常易用的模块系统，以及 NPM 对模块规范的完美支持是的 Node.js 应用开发事半功倍。")]),t._v(" "),a("ul",[a("li",[t._v("require：用来引用模块")]),t._v(" "),a("li",[t._v("export:用来导出模块\n"),a("ul",[a("li",[t._v("module.exoirts:对外导出一个对象")]),t._v(" "),a("li",[t._v("exports.xxx:可以对外导出多个对象")])])])]),t._v(" "),a("p",[a("strong",[t._v("注意：核心是 module.exports，exports 只是 module.exports 的引用而已")])]),t._v(" "),a("p",[t._v("在每个模块代码执行之前，Node.js 都会将它包裹在这样一个函数里")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __dirname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"json-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-文件"}},[t._v("#")]),t._v(" JSON 文件")]),t._v(" "),a("ul",[a("li",[t._v("通过 "),a("code",[t._v("fs.readFileSync()")]),t._v(" 加载")]),t._v(" "),a("li",[t._v("通过 "),a("code",[t._v("JSON.parse()")]),t._v(" 解析")])]),t._v(" "),a("h4",{attrs:{id:"加载大文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载大文件"}},[t._v("#")]),t._v(" 加载大文件")]),t._v(" "),a("ul",[a("li",[t._v("require 成功后会缓存文件")]),t._v(" "),a("li",[t._v("大量使用会导致大量数据驻留在内存中，导致 GC 频分和内存泄露")])]),t._v(" "),a("h4",{attrs:{id:"exports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exports"}},[t._v("#")]),t._v(" exports")]),t._v(" "),a("ul",[a("li",[t._v("exports 是 module 的属性，默认情况是空对象")]),t._v(" "),a("li",[t._v("require 一个模块实际得到的是该模块的 exports 属性")]),t._v(" "),a("li",[a("code",[t._v("exports.xxx")]),t._v(" 导出具有多个属性的对象")]),t._v(" "),a("li",[a("code",[t._v("module.exports = xxx")]),t._v(" 导出一个对象")])]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// module-2.js")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("method")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("method2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello again'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// module-1.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" module2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./module-2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hello")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("method2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hello again")]),t._v("\n")])])]),a("h2",{attrs:{id:"amd-和-require-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amd-和-require-js"}},[t._v("#")]),t._v(" AMD 和 require.js")]),t._v(" "),a("p",[t._v("AMD 是为了弥补 commonjs 规范在浏览器中目前无法支持 ES6 的一种"),a("strong",[t._v("异步解决方案")]),t._v("。异步模块定义规范（AMD）制定了定义模块的规则，这样模块和模块的依赖可以被异步加载。这和浏览器的异步加载模块的环境刚好适应（浏览器同步加载模块会导致性能、可用性、调试和跨域访问等问题）。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alpha"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"require"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exports"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"beta"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  beta")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("verb")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" beta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("verb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Or:")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"beta"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("verb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即便没用到某个模块 ,还是提前执行了")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alpha")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"cmd-和-sea-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd-和-sea-js"}},[t._v("#")]),t._v(" CMD 和 Sea.js")]),t._v(" "),a("p",[t._v("CMD 是另一种 js 模块化方案，它与 AMD 很类似，不同点在于："),a("strong",[t._v("AMD 推崇依赖前置、提前执行")]),t._v("，"),a("strong",[t._v("CMD 推崇依赖就近、延迟执行")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在需要时申明")]),t._v("\n  a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"esmodule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esmodule"}},[t._v("#")]),t._v(" ESModule")]),t._v(" "),a("p",[t._v("ES 模块的目标是创建一个同时兼容 "),a("code",[t._v("CommonJs")]),t._v(" 和 "),a("code",[t._v("AMD")]),t._v(" 的格式，使语法更加紧凑，通过编译时加载，在编译时就能确定模块的依赖关系，比 "),a("code",[t._v("CommonJS")]),t._v(" 模块的加载效率更高。而在异步加载和配置模块加载方面，则借鉴 AMD 规范，执行效率、灵活度都远远好于 "),a("code",[t._v("CommonJS")]),t._v(" 写法。总的来说，ES Module 的优势如下：")]),t._v(" "),a("ul",[a("li",[t._v("语法更加紧凑")]),t._v(" "),a("li",[t._v("结构更适用于静态编译（静态类型检查、优化等）")]),t._v(" "),a("li",[t._v("对循环应用的支持更好。")]),t._v(" "),a("li",[t._v("用法简单，不需要关注实现细节")]),t._v(" "),a("li",[t._v("采用声明式语法：没有 require 关键字")]),t._v(" "),a("li",[t._v("程序化加载 API：可以设置模块如何加载并按需加载")])]),t._v(" "),a("p",[t._v("ES6 模块跟 Common 不一样，js 对脚本进行静态分析的时候，只生成一个只读引用，等到脚本真正执行的时候才会通过引用模块中获取值，所以 es6 是动态引用，并不会缓存值")]),t._v(" "),a("p",[t._v('关于循环引用：import 语句的静态加载语义意味着可以确保通过 import 相互依赖的 "foo" 和 "bar" 在其中任何一个运行之前，二者都会被加载、解析和编译。所以它们的环依赖是静态决议的.')]),t._v(" "),a("p",[t._v("我们应该大胆拥抱 ESModules,"),a("code",[t._v("snowpack")]),t._v(" 和 "),a("code",[t._v("webpack")]),t._v(" 的 "),a("code",[t._v("tree-shaking")]),t._v(" 通过静态编译进行大幅优化。")]),t._v(" "),a("h2",{attrs:{id:"commonjs-与-es6-modules-规范的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-与-es6-modules-规范的区别"}},[t._v("#")]),t._v(" "),a("strong",[t._v("CommonJS 与 ES6 Modules 规范的区别")])]),t._v(" "),a("ul",[a("li",[t._v("CommonJS 模块是"),a("strong",[t._v("运行时加载")]),t._v("，ES6 Modules "),a("strong",[t._v("是编译时输出接口")])]),t._v(" "),a("li",[t._v("CommonJS 输出是"),a("strong",[t._v("值的拷贝")]),t._v("；ES6 Modules 输出的是"),a("strong",[t._v("值的引用")]),t._v("，被输出模块的内部的改变会影响引用的改变")]),t._v(" "),a("li",[t._v("CommonJs 导入的模块路径可以是一个表达式，因为它使用的是 require()方法；而 ES6 Modules 只能是字符串")]),t._v(" "),a("li",[t._v("CommonJS "),a("code",[t._v("this")]),t._v(" 指向当前模块，ES6 Modules "),a("code",[t._v("this")]),t._v(" 指向 "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[t._v("且 ES6 Modules 中没有这些顶层变量："),a("code",[t._v("arguments")]),t._v("、"),a("code",[t._v("require")]),t._v("、"),a("code",[t._v("module")]),t._v("、"),a("code",[t._v("exports")]),t._v("、"),a("code",[t._v("filename")]),t._v("、"),a("code",[t._v("dirname")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);