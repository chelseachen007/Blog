(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{543:function(t,a,v){"use strict";v.r(a);var _=v(45),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://i.loli.net/2021/03/02/6QdOzHEApwYgjsu.png",alt:"img"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://i.loli.net/2021/04/09/gRMxWmT3UyKcau4.png",alt:"image-20210409171245996"}})]),t._v(" "),v("h2",{attrs:{id:"http优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http优化"}},[t._v("#")]),t._v(" Http优化")]),t._v(" "),v("p",[t._v("HTTP 优化有两个大的方向：")]),t._v(" "),v("ul",[v("li",[t._v("减少请求次数")]),t._v(" "),v("li",[t._v("减少单次请求所花费的时间")])]),t._v(" "),v("p",[t._v("（http缓存）=> dns解析 => tcp连接 => http连接 => 解析并渲染（并逐步请求页面中的其它资源）")]),t._v(" "),v("h3",{attrs:{id:"分析优化地方"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分析优化地方"}},[t._v("#")]),t._v(" "),v("strong",[t._v("分析优化地方")])]),t._v(" "),v("p",[t._v("使用谷歌 Performance 开发者工具")]),t._v(" "),v("p",[t._v("LightHouse")]),t._v(" "),v("p",[t._v("npm install -g lighthouse lighthouse https://juejin.im/books")]),t._v(" "),v("h3",{attrs:{id:"优化打包速度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优化打包速度"}},[t._v("#")]),t._v(" "),v("strong",[t._v("优化打包速度")])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.npmjs.com/package/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-bundle-analyzer"),v("OutboundLink")],1),t._v(" 检测包依赖大小")]),t._v(" "),v("p",[t._v("UglifyJsPlugin  压缩过程中对碎片化的冗余代码（如 console 语句、注释等）进行自动化删除： （webpack4默认使用）")]),t._v(" "),v("p",[t._v("require.ensure（vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。）")]),t._v(" "),v("p",[t._v("开启 Gzip （需要后端配合）")]),t._v(" "),v("p",[t._v("（Gzip 压缩背后的原理，是在一个文本文件中找出一些重复出现的字符串、临时替换它们，从而使整个文件变小。根据这个原理，文件中代码的重复率越高，那么压缩的效率就越高，使用 Gzip 的收益也就越大。反之亦然。）")]),t._v(" "),v("h3",{attrs:{id:"浏览器层面的tcp连接限制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器层面的tcp连接限制"}},[t._v("#")]),t._v(" "),v("strong",[t._v("浏览器层面的tcp连接限制")])]),t._v(" "),v("ol",[v("li",[t._v("如果处于http1.1")])]),t._v(" "),v("ul",[v("li",[v("ol",[v("li",[t._v("既然对同一域名做了限制，那么可以切分为多个域名，有的放图片，有的放视频，这不就可以突破限制了吗！这里还有一点好处，在原来未切分域名的时候，就算是请求一个小图标，主站的cookie也会被带上，十分浪费流量。")]),t._v(" "),v("li",[t._v("减少连接数，我们也可以将一些体积较小的资源合并起来，这也就是雪碧图、资源内联等")])])])]),t._v(" "),v("ol",[v("li",[t._v("升级http2，从而实现单个tcp连接并行发送http")])]),t._v(" "),v("h3",{attrs:{id:"图片优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图片优化"}},[t._v("#")]),t._v(" "),v("strong",[t._v("图片优化")])]),t._v(" "),v("p",[t._v("JPG 适用于呈现色彩丰富的图片，在我们日常开发中，JPG 图片经常作为大的背景图、轮播图或 Banner 图出现。")]),t._v(" "),v("p",[t._v("前面我们提到，复杂的、色彩层次丰富的图片，用 PNG 来处理的话，成本会比较高，我们一般会交给 JPG 去存储。")]),t._v(" "),v("p",[t._v("图标使用SVG")]),t._v(" "),v("p",[t._v("雪碧图（CSS Sprites） 通过减少请求数优化")]),t._v(" "),v("h3",{attrs:{id:"通过缓存优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通过缓存优化"}},[t._v("#")]),t._v(" "),v("strong",[t._v("通过缓存优化")])]),t._v(" "),v("h4",{attrs:{id:"强缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" "),v("strong",[t._v("强缓存")])]),t._v(" "),v("p",[t._v("通过expires设置过期时间（http1.1后新增 "),v("strong",[t._v("Cache-Control")]),t._v(" 来替代）")]),t._v(" "),v("p",[t._v("**Cache-Control属性：**no-store  no-cache  max-age  public private（"),v("strong",[t._v("默认值")]),t._v("。）  （详情在缓存篇）")]),t._v(" "),v("h4",{attrs:{id:"协商缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" "),v("strong",[t._v("协商缓存")])]),t._v(" "),v("p",[t._v("协商缓存机制下，浏览器需要向服务器去询问缓存的相关信息，进而判断是重新发起请求、下载完整的响应，还是从本地获取缓存的资源。")]),t._v(" "),v("p",[t._v("（304）如果服务端提示缓存资源未改动（Not Modified），资源会被"),v("strong",[t._v("重定向")]),t._v("到浏览器缓存，")]),t._v(" "),v("p",[t._v("通过last-modified 和服务器文件最后时间做对比")]),t._v(" "),v("p",[t._v("Etag 不单单指判断时间，还判断是否有变动，优先级也更高。当 Etag 和 Last-Modified 同时存在时，以 Etag 为准。")]),t._v(" "),v("h3",{attrs:{id:"cdn优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cdn优化"}},[t._v("#")]),t._v(" "),v("strong",[t._v("CDN优化")])]),t._v(" "),v("h4",{attrs:{id:"将静态资源放到不同域名的cdn中"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#将静态资源放到不同域名的cdn中"}},[t._v("#")]),t._v(" "),v("strong",[t._v("将静态资源放到不同域名的CDN中")])]),t._v(" "),v("p",[t._v("同一个域名下的请求会不分青红皂白地携带 Cookie，而静态资源往往并不需要 Cookie 携带什么认证信息。把静态资源和主页面置于不同的域名下，完美地避免了不必要的 Cookie 的出现！")]),t._v(" "),v("p",[t._v("同时也可以突破 一组{host,port}最多允计打开 "),v("strong",[t._v("6 个 HTTP 和 6 个 HTTPS 连接。")])]),t._v(" "),v("h3",{attrs:{id:"服务端渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染"}},[t._v("#")]),t._v(" "),v("strong",[t._v("服务端渲染")])]),t._v(" "),v("h3",{attrs:{id:"减少重绘和回流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#减少重绘和回流"}},[t._v("#")]),t._v(" "),v("strong",[t._v("减少重绘和回流")])]),t._v(" "),v("p",[t._v("我们每操作一次 DOM（不管是为了修改还是仅仅为了访问其值），都要过一次“桥”。")]),t._v(" "),v("p",[t._v("（栗子：")]),t._v(" "),v("ol",[v("li",[t._v("多次控制DOM情况，先用js进行处理，待计算完毕再提交给浏览器发出重计算请求")]),t._v(" "),v("li",[t._v("多个style更改，写进一个class进行add）")])]),t._v(" "),v("p",[t._v("重绘不一定导致回流，回流一定会导致重绘")]),t._v(" "),v("p",[t._v("平时用的比较多的就是动画脱离文档流，另外可以使用")]),t._v(" "),v("p",[v("strong",[t._v("提取组件的 CSS 到单独到文件")])]),t._v(" "),v("p",[t._v("当使用单文件组件时，组件内的 CSS 会以 ")]),v("style")])}),[],!1,null,null,null);a.default=r.exports}}]);