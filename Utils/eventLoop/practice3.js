async function async1() {
  console.log("async1 start"); // 2
  await async2(); // 函数执行是同步，await后面的代码相当于是微任务回调
  console.log("async1 end"); // 6 微任务回调
}

async function async2() {
  console.log("async2"); // 3  函数执行是同步
}

console.log("script start"); // 1

setTimeout(() => {
  console.log("setTimeout"); // 8 宏任务setTimeout
}, 200);

async1();

new Promise((resolve, reject) => {
  console.log("promise1"); // 4 同步
  resolve();
}).then(
  () => {
    console.log("promise2"); // 7 微任务回调
    new Promise(resolve => {
      console.log("内部promise"); // 8 微任务中的同步
      resolve(1);
    }).then(res => {
      console.log("res", res); // 10 微任务中的微任务(二次微任务)
    });
  },
  err => {
    console.log("err", err);
  }
);

Promise.resolve(2).then(res => {
  console.log("微任务", res); // 9 首批微任务
  setTimeout(() => {
    console.log("微任务中的宏任务 setTimeout1");
    setTimeout(() => {
      console.log("宏任务中的宏任务 setTimeout2");
    }, 92);
    // setTimeout(() => {
    //   console.log("微任务中的宏任务 setTimeout");
    // }, 101);
  }, 100);
});

console.log("script end"); // 5 同步
