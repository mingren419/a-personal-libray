function Promise(excutor) {
  // 执行状态 fulfilled, rejected;
  this.status = "pending";
  // 成功的值
  this.success = undefined;
  // 失败的值
  this.error = undefined;
  // 成功回调函数
  this.onfulfilledCallback = [];
  // 失败回调函数
  this.onrejectedCallback = [];
  const _this = this;
  // 成功函数
  function resolve(res) {
    // console.log("resolve res", res);
    if (_this.status === "pending") {
      // _this.status = "fulfilled";
      // _this.success = res;
      if (res && res.then && typeof res.then === "function") {
        // then 回调函数返回的是Promise，用then解析结果返回
        _this.status = "fulfilled";
        res.then(val => {
          _this.success = val;
          _this.onfulfilledCallback.forEach(fn => fn());
        });
      } else {
        _this.status = "fulfilled";
        _this.success = res;
        _this.onfulfilledCallback.forEach(fn => fn());
      }
      // console.log("_this.onfulfilledCallback", _this.onfulfilledCallback);
      // _this.onfulfilledCallback.forEach(fn => fn());
    }
  }
  // 失败函数
  function reject(err) {
    if (_this.status === "pending") {
      _this.status = "rejected";
      _this.error = err;
      _this.onrejectedCallback.forEach(fn => fn());
    }
  }
  try {
    excutor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

// then 方法
Promise.prototype.then = function(onfulfilled, onrejected) {
  // 异步状态
  const _this = this;
  return new Promise((resolve, reject) => {
    if (this.status === "fulfilled") {
      try {
        const res = onfulfilled(this.success);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    }
    if (this.status === "rejected") {
      try {
        const res = onrejected(this.error);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    }
    if (this.status === "pending") {
      // const a = "haha";
      // const b = 11;
      this.onfulfilledCallback.push(function() {
        // console.log(b);
        // onfulfilled(a);
        // 形成了闭包 下次函数执行的时候 _this 是指向当前的promise实例
        try {
          const res = onfulfilled(_this.success);
          resolve(res);
        } catch (err) {
          reject(err);
        }
      });
      // this.onfulfilledCallback.push(() => {
      //   // 利用箭头函数替代
      //   onfulfilled(this.success);
      // });
      this.onrejectedCallback.push(function() {
        try {
          res = onrejected(_this.error);
          resolve(res);
        } catch (err) {
          reject(err);
        }
      });
    }
  });
};

Promise.prototype.catch = function(callback) {
  return this.then(function() {}, callback);
};

Promise.all = function(arr) {
  return new Promise((resolve, reject) => {
    const resArr = [];
    let num = 0;
    function process(i, val) {
      resArr[i] = val;
      if (++num === arr.length) {
        resolve(resArr);
      }
    }
    for (let [i, current] of arr.entries()) {
      if (current && current.then && typeof current.then === "function") {
        current.then.call(
          current,
          function(res) {
            process(i, res);
          },
          reject
        );
      } else {
        process(i, current);
      }
    }
  });
};

module.exports = Promise;
