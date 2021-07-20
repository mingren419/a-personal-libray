// const Promise = require("./promise");

Promise.resolve()
  .then(() => {
    console.log("1");
    throw new Error("error1");
  })
  .catch(err => {
    console.log("2");
    // console.log("err", err);
  })
  .catch(() => {
    console.log("3");
  });
// .then(() => {
//   console.log("3");
// });
