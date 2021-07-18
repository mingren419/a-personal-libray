const fs = require("fs");
const path = require("path");
// const Promise = require("./promise.js");

// fs.readFile("./a.txt", "utf-8", function(err, data) {
//   if (err) throw err;
//   console.log("a", data);
// });
// fs.readFile("./b.txt", "utf-8", function(err, data) {
//   if (err) throw err;
//   console.log("b", data);
// });
// fs.readFile("./c.txt", "utf-8", function(err, data) {
//   if (err) throw err;
//   console.log("c", data);
// });

function readUrl(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, "utf-8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

// readUrl("./a.txt")
//   .then(res => {
//     console.log("res a", res);
//     return readUrl("./b.txt");
//   })
//   .then(res => {
//     console.log("res b", res);
//     return readUrl("./c.txt");
//   })
//   .then(res => {
//     console.log("res c", res);
//   });

Promise.all([
  readUrl(path.resolve(__dirname, "./a.txt")),
  readUrl(path.resolve(__dirname, "./b.txt")),
  readUrl(path.resolve(__dirname, "./c.txt"))
])
  .then(res => {
    console.log("res", res);
  })
  .catch(err => {
    console.log("err", err);
  });
