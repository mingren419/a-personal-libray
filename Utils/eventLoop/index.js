// js 执行机制
// 1.从前往后一行一行的执行。
// 2.如果某一行报错，停止下一行的代码执行
// 3.先执行完同步代码，再执行异步代码

// event loop (事件循环/事件轮询)
// 1.js是单线程运行
// 2.异步要基于回调来实现（setTimeout, ajax, Dom事件回调等也是基于event loop）
// 3.event loop 就是异步回调的实现原理

// event loop 过程1
// 1.同步代码，一行一行放到 Call Stack(执行栈)中执行
// 2.遇到异步代码，先‘记录’下，等待时机（定时，网络请求）
// 3.时机到了，异步代码会被放到Callback Queue（回调队列中）

// event loop 过程2
// 1.如果Call Stack 为空（同步代码执行完毕），Event Loop 开始工作
// 2.轮询查找 Callback Queue,如有任务，则放到Call Stack 中执行
// 3.继续轮询，像永动机一样

// 宏任务 macroTask: setTimeout,setInterval,Ajax,Dom事件
// 微任务microTask: Promise, async/await
// 微任务执行早于宏任务

// event loop 和 DOM渲染
// 微任务 先于 DOM渲染 先于 宏任务

// 微任务是es6语法定义的（微任务有微任务队列,微任务等待时机会被推到micro task queue微任务队列），宏任务是浏览器定义的（宏任务等待时机会由web APIs内推到Callback queue）

// 整个执行的机制概括为
// 同步代码执行完毕，Call Stack清空，执行微任务，尝试dom渲染，触发event loop 执行宏任务
