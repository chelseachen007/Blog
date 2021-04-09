(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{513:function(t,a,s){"use strict";s.r(a);var n=s(45),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"设计模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[t._v("#")]),t._v(" 设计模式")]),t._v(" "),s("h2",{attrs:{id:"_6-大原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-大原则"}},[t._v("#")]),t._v(" ⑥ 大原则")]),t._v(" "),s("h3",{attrs:{id:"开闭原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开闭原则"}},[t._v("#")]),t._v(" 开闭原则")]),t._v(" "),s("p",[t._v("开闭原则指的就是对扩展开放、对修改关闭。编写代码的时候不可避免地会碰到修改的情况，而遵循开闭原则就意味着当代码需要修改时，"),s("strong",[t._v("可以通过编写新的代码来扩展已有的代码，而不是直接修改已有代码本身")]),t._v("。"),s("strong",[t._v("对扩展开放，对修改封闭")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 校验用户名")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 校验密码")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("pswd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果此时增加一个校验条件，就要修改 validate() 函数内容。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Validation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" validateHandlers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ValidateHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addValidateHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("handler"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" IValidateHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("validateHandlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("validateHandlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("validateHandlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IValidateHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UsernameValidateHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IValidateHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"里氏替换原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#里氏替换原则"}},[t._v("#")]),t._v(" 里氏替换原则")]),t._v(" "),s("p",[t._v("里氏替换原则是指在使用父类的地方可以用它的任意子类进行替换。里氏替换原则是对类的继承复用作出的要求，要求子类可以随时替换掉其父类，同时功能不被破坏，父类的方法仍然能被使用。")]),t._v(" "),s("h3",{attrs:{id:"依赖倒置原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖倒置原则"}},[t._v("#")]),t._v(" 依赖倒置原则")]),t._v(" "),s("p",[t._v("准确说应该是避免依赖倒置，好的依赖关系应该是类依赖于抽象接口，不应依赖于具体实现。这样设计的好处就是当依赖发生变化时，只需要传入对应的具体实例即可。")]),t._v(" "),s("h3",{attrs:{id:"接口隔离原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口隔离原则"}},[t._v("#")]),t._v(" 接口隔离原则")]),t._v(" "),s("p",[t._v("不应该依赖它不需要的接口，也就是说一个类对另一个类的依赖应该建立在最小的接口上。目的就是为了降低代码之间的耦合性，方便后续代码修改。")]),t._v(" "),s("h3",{attrs:{id:"迪米特原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迪米特原则"}},[t._v("#")]),t._v(" 迪米特原则")]),t._v(" "),s("p",[t._v("一个类对于其他类知道得越少越好，就是说一个对象应当对其他对象尽可能少的了解。这一条原则要求任何一个对象或者方法只能调用该对象本身和内部创建的对象实例，如果要调用外部的对象，只能通过参数的形式传递进来。这一点和纯函数的思想相似。")]),t._v(" "),s("h3",{attrs:{id:"单一职责原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单一职责原则"}},[t._v("#")]),t._v(" 单一职责原则")]),t._v(" "),s("p",[t._v("应该有且仅有一个原因引起类的变更。这个原则很好理解，一个类代码量越多，功能就越复杂，维护成本也就越高。遵循单一职责原则可以有效地控制类的复杂度。")]),t._v(" "),s("h2",{attrs:{id:"设计模式-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计模式-2"}},[t._v("#")]),t._v(" 设计模式")]),t._v(" "),s("h3",{attrs:{id:"设计模式的分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计模式的分类"}},[t._v("#")]),t._v(" 设计模式的分类")]),t._v(" "),s("p",[t._v("经典的设计模式有 3 大类，共 23 种，包括创建型、结构型和行为型。")]),t._v(" "),s("h4",{attrs:{id:"创建型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建型"}},[t._v("#")]),t._v(" 创建型")]),t._v(" "),s("p",[t._v("创建型模式的主要关注点是“如何创建和使用对象”，这些模式的核心特点就是将对象的创建与使用进行分离，从而降低系统的耦合度。使用者不需要关注对象的创建细节，对象的创建由相关的类来完成。")]),t._v(" "),s("p",[t._v("具体包括下面几种模式：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("抽象工厂模式")]),t._v("，提供一个超级工厂类来创建其他工厂类，然后通过工厂类创建类实例；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("生成器模式")]),t._v("，将一个复杂对象分解成多个相对简单的部分，然后根据不同需要分别创建它们，最后构建成该复杂对象；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("工厂方法模式")]),t._v("，定义一个用于创建生成类的工厂类，由调用者提供的参数决定生成什么类实例；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("原型模式")]),t._v("，将一个对象作为原型，通过对其进行克隆创建新的实例；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("单例模式")]),t._v("，生成一个全局唯一的实例，同时提供访问这个实例的函数。")])])]),t._v(" "),s("h4",{attrs:{id:"结构型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构型"}},[t._v("#")]),t._v(" 结构型")]),t._v(" "),s("p",[t._v("结构型模式描述如何将类或对象组合在一起形成更大的结构。它分为类结构型模式和对象结构型模式，类结构型模式采用继承机制来组织接口和类，对象结构型模式釆用组合或聚合来生成新的对象。")]),t._v(" "),s("p",[t._v("几种模式：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("适配器模式")]),t._v("，将一个类的接口转换成另一个类的接口，使得原本由于接口不兼容而不能一起工作的类能一起工作；")]),t._v(" "),s("li",[s("strong",[t._v("桥接模式")]),t._v("，将抽象与实现分离，使它们可以独立变化，它是用组合关系代替继承关系来实现的，从而降低了抽象和实现这两个可变维度的耦合度；")]),t._v(" "),s("li",[s("strong",[t._v("组合模式")]),t._v("，将对象组合成树状层次结构，使用户对单个对象和组合对象具有一致的访问性；")]),t._v(" "),s("li",[s("strong",[t._v("装饰器模式")]),t._v("，动态地给对象增加一些职责，即增加其额外的功能；")]),t._v(" "),s("li",[s("strong",[t._v("外观模式")]),t._v("，为多个复杂的子系统提供一个统一的对外接口，使这些子系统更加容易被访问；")]),t._v(" "),s("li",[s("strong",[t._v("享元模式")]),t._v("，运用共享技术来有效地支持大量细粒度对象的复用；")]),t._v(" "),s("li",[s("strong",[t._v("代理模式")]),t._v("，为某对象提供一种代理以控制对该对象的访问，即客户端通过代理间接地访问该对象，从而限制、增强或修改该对象的一些特性。")])]),t._v(" "),s("h4",{attrs:{id:"行为型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行为型"}},[t._v("#")]),t._v(" 行为型")]),t._v(" "),s("p",[t._v("行为型模式用于描述程序在运行时复杂的流程控制，即描述多个类或对象之间怎样相互协作共同完成单个对象无法单独完成的任务，它涉及算法与对象间职责的分配。")]),t._v(" "),s("p",[t._v("行为型模式分为类行为模式和对象行为模式，类的行为模式采用继承机制在子类和父类之间分配行为，对象行为模式采用多态等方式来分配子类和父类的职责。")]),t._v(" "),s("p",[t._v("几种模式：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("责任链模式")]),t._v("，把请求从链中的一个对象传到下一个对象，直到请求被响应为止，通过这种方式去除对象之间的耦合；")]),t._v(" "),s("li",[s("strong",[t._v("命令模式")]),t._v("，将一个请求封装为一个对象，使发出请求的责任和执行请求的责任分割开；")]),t._v(" "),s("li",[s("strong",[t._v("策略模式")]),t._v("，定义了一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的改变不会影响使用算法的用户；")]),t._v(" "),s("li",[s("strong",[t._v("解释器模式")]),t._v("，提供如何定义语言的文法，以及对语言句子的解释方法，即解释器；")]),t._v(" "),s("li",[s("strong",[t._v("迭代器模式")]),t._v("，提供一种方法来顺序访问聚合对象中的一系列数据，而不暴露聚合对象的内部表示；")]),t._v(" "),s("li",[s("strong",[t._v("中介者模式")]),t._v("，定义一个中介对象来简化原有对象之间的交互关系，降低系统中对象间的耦合度，使原有对象之间不必相互了解；")]),t._v(" "),s("li",[s("strong",[t._v("备忘录模式")]),t._v("，在不破坏封装性的前提下，获取并保存一个对象的内部状态，以便以后恢复它；")]),t._v(" "),s("li",[s("strong",[t._v("观察者模式")]),t._v("，多个对象间存在一对多关系，当一个对象发生改变时，把这种改变通知给其他多个对象，从而影响其他对象的行为；")]),t._v(" "),s("li",[s("strong",[t._v("状态模式")]),t._v("，类的行为基于状态对象而改变；")]),t._v(" "),s("li",[s("strong",[t._v("访问者模式")]),t._v("，在不改变集合元素的前提下，为一个集合中的每个元素提供多种访问方式，即每个元素有多个访问者对象访问；")]),t._v(" "),s("li",[s("strong",[t._v("模板方法模式")]),t._v("，定义一个操作中的算法骨架，将算法的一些步骤延迟到子类中，使得子类在可以不改变该算法结构的情况下重定义该算法的某些特定步骤。")])]),t._v(" "),s("h3",{attrs:{id:"创建型-工厂模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建型-工厂模式"}},[t._v("#")]),t._v(" 创建型-工厂模式")]),t._v(" "),s("p",[t._v("工厂模式其实就是"),s("strong",[t._v("将创建对象的过程单独封装")])]),t._v(" "),s("h3",{attrs:{id:"创建型-单例模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建型-单例模式"}},[t._v("#")]),t._v(" 创建型-单例模式")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Storage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是否已经new过1个实例")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("Storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若这个唯一的实例不存在，那么先创建它")]),t._v("\n            Storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Storage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果这个唯一的实例已经存在，则直接返回")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"行为性-观察者模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行为性-观察者模式"}},[t._v("#")]),t._v(" 行为性-观察者模式")]),t._v(" "),s("p",[t._v("发布订阅模式")]),t._v(" "),s("p",[t._v("但如果韩梅梅没有拉群，而是把需求文档上传到了公司统一的需求平台上，需求平台感知到文件的变化、自动通知了每一位订阅了该文件的开发者，"),s("strong",[t._v("发布者不直接触及到订阅者、而是由统一的第三方来完成实际的通信的操作，叫做发布-订阅模式")]),t._v("。")]),t._v(" "),s("p",[t._v("观察者模式")]),t._v(" "),s("p",[t._v("韩梅梅把所有的开发者拉了一个群，直接把需求文档丢给每一位群成员，这种"),s("strong",[t._v("发布者直接触及到订阅者")]),t._v("的操作，叫观察者模式")]),t._v(" "),s("p",[t._v("观察者模式和发布-订阅模式之间的区别，在于是否存在第三方、发布者能否直接感知订阅者")]),t._v(" "),s("h3",{attrs:{id:"行为性-迭代器模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行为性-迭代器模式"}},[t._v("#")]),t._v(" 行为性-迭代器模式")])])}),[],!1,null,null,null);a.default=r.exports}}]);