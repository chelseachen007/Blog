(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{461:function(a,t,s){"use strict";s.r(t);var e=s(45),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"【进阶篇-day-47】-2020-12-17-1206-设计跳表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【进阶篇-day-47】-2020-12-17-1206-设计跳表"}},[a._v("#")]),a._v(" 【进阶篇 - Day 47】 2020-12-17 - 1206. 设计跳表")]),a._v(" "),s("h2",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[a._v("#")]),a._v(" 题目描述")]),a._v(" "),s("blockquote",[s("h2",{attrs:{id:"入选理由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入选理由"}},[a._v("#")]),a._v(" 入选理由")]),a._v(" "),s("ol",[s("li",[a._v("跳表设计")])]),a._v(" "),s("h2",{attrs:{id:"题目描述-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述-2"}},[a._v("#")]),a._v(" 题目描述")]),a._v(" "),s("p",[a._v("不使用任何库函数，设计一个跳表。")]),a._v(" "),s("p",[a._v("跳表是在 O(log(n)) 时间内完成增加、删除、搜索操作的数据结构。跳表相比于树堆与红黑树，其功能与性能相当，并且跳表的代码长度相较下更短，其设计思想与链表相似。")]),a._v(" "),s("p",[a._v("例如，一个跳表包含 [30, 40, 50, 60, 70, 90]，然后增加 80、45 到跳表中，以下图的方式操作：")]),a._v(" "),s("p",[a._v("Artyom Kalinin [CC BY-SA 3.0], via Wikimedia Commons")]),a._v(" "),s("p",[a._v("跳表中有很多层，每一层是一个短的链表。在第一层的作用下，增加、删除和搜索操作的时间复杂度不超过 O(n)。跳表的每一个操作的平均时间复杂度是 O(log(n))，空间复杂度是 O(n)。")]),a._v(" "),s("p",[a._v("在本题中，你的设计应该要包含这些函数：")]),a._v(" "),s("p",[a._v("bool search(int target) : 返回 target 是否存在于跳表中。\nvoid add(int num): 插入一个元素到跳表。\nbool erase(int num): 在跳表中删除一个值，如果 num 不存在，直接返回 false. 如果存在多个 num ，删除其中任意一个即可。\n了解更多 : https://en.wikipedia.org/wiki/Skip_list")]),a._v(" "),s("p",[a._v("注意，跳表中可能存在多个相同的值，你的代码需要处理这种情况。")]),a._v(" "),s("p",[a._v("样例:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Skiplist skiplist = new Skiplist();\n\nskiplist.add(1);\nskiplist.add(2);\nskiplist.add(3);\nskiplist.search(0);   // 返回 false\nskiplist.add(4);\nskiplist.search(1);   // 返回 true\nskiplist.erase(0);    // 返回 false，0 不在跳表中\nskiplist.erase(1);    // 返回 true\nskiplist.search(1);   // 返回 false，1 已被擦除\n约束条件:\n\n0 <= num, target <= 20000\n最多调用 50000 次 search, add, 以及 erase操作。\n")])])])]),a._v(" "),s("h2",{attrs:{id:"我的回答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我的回答"}},[a._v("#")]),a._v(" 我的回答")]),a._v(" "),s("h3",{attrs:{id:"解法一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解法一"}},[a._v("#")]),a._v(" 解法一")]),a._v(" "),s("h4",{attrs:{id:"时空复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时空复杂度"}},[a._v("#")]),a._v(" 时空复杂度")]),a._v(" "),s("p",[a._v("时间复杂度：O(n)")]),a._v(" "),s("p",[a._v("空间复杂度: O(1)")]),a._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("\n")])])]),s("h2",{attrs:{id:"参考回答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考回答"}},[a._v("#")]),a._v(" 参考回答")]),a._v(" "),s("ul",[s("li")])])}),[],!1,null,null,null);t.default=r.exports}}]);