(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{666:function(t,a,s){"use strict";s.r(a);var n=s(45),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"【day-38】-前缀和专题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【day-38】-前缀和专题"}},[t._v("#")]),t._v(" 【Day 38】 前缀和专题")]),t._v(" "),s("h2",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("网易面试题")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("有一个班级有 n 个人，给出 n 个元素，第 i 个元素代表 第 i 位同学的考试成绩，接下进行 m 次询问，每次询问给出一个数值 t ，表示第 t 个同学，然后需要我们输出第 t 个同学的成绩超过班级百分之几的人，百分数 p 可以这样算：p = (不超过第 t 个同学分数的人数 ) / n * 100%。输出的时候保留到小数点后 6 位，并且需要四舍五入。\n\n输入描述：第一行输入两个数 n 和 m，两个数以空格隔开，表示 n 个同学和 m 次询问。第二行输入 n 个数值 ni，表示每个同学的分数，第三行输入 m 个数值mi，表示每次询问是询问第几个同学。（注意，这里 2<=n，m<=100000，0<=ni<=150，1<=mi<=n）\n\n输出描述：输出 m 行，每一行输出一个百分数 p，代表超过班级百分之几的人。\n\n示例1：\n\n输入 ：\n\n3 2\n\n50 60 70\n\n1 2\n\n输出\n\n33.333333%\n\n66.666667%\n")])])]),s("ol",[s("li",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1371. 每个元音包含偶数次的最长子字符串"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/subarray-sum-equals-k/",target:"_blank",rel:"noopener noreferrer"}},[t._v("560. 和为 K 的子数组"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("其他：")]),t._v(" "),s("ul",[s("li",[t._v("308")]),t._v(" "),s("li",[t._v("525")]),t._v(" "),s("li",[t._v("1139")]),t._v(" "),s("li",[t._v("1176")]),t._v(" "),s("li",[t._v("1182")]),t._v(" "),s("li",[t._v("1277")]),t._v(" "),s("li",[t._v("1292")]),t._v(" "),s("li",[t._v("1314")]),t._v(" "),s("li",[t._v("1504")])])]),t._v(" "),s("h2",{attrs:{id:"我的回答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我的回答"}},[t._v("#")]),t._v(" 我的回答")]),t._v(" "),s("h3",{attrs:{id:"解法一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解法一"}},[t._v("#")]),t._v(" 解法一")]),t._v(" "),s("h4",{attrs:{id:"时空复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时空复杂度"}},[t._v("#")]),t._v(" 时空复杂度")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("subarraySum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"解法二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解法二"}},[t._v("#")]),t._v(" 解法二")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("subarraySum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hashmap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" acc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        acc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("acc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hashmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("acc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" hashmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("acc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        hashmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("acc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hashmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("acc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" hashmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("acc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"参考回答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考回答"}},[t._v("#")]),t._v(" 参考回答")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/leetcode-pp/91alg-1/issues/64#issuecomment-655858014",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方题解"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/leetcode-pp/91alg-1/issues/64#issuecomment-655941034",target:"_blank",rel:"noopener noreferrer"}},[t._v("精选题解"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);