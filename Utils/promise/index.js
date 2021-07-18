const Promise = require("./promise.js");

const p = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve("success");
  // }, 1000);
  reject("err");
});

p.catch(err => {
  console.log("err", err);
  return err;
}).then(data => {
  console.log("data", data);
});

// p.then(
//   res => {
//     console.log("res", res);
//   },
//   err => {
//     console.log("err", err);
//   }
// ).then(
//   res => {
//     console.log("res1", res);
//   },
//   err => {
//     console.log("err", err);
//   }
// );

// p.then(
//   res => {
//     console.log("res", res);
//   },
//   err => {
//     console.log("err", err);
//   }
// )

// p.then(
//   res => {
//     console.log("res", res);
//   },
//   err => {
//     console.log("err", err);
//   }
// );
