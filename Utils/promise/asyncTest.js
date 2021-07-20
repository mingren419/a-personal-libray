// async function fn() {
//   return 100;
// }
// fn();
// (async function() {
//   const a = fn();
//   const b = await fn();
//   console.log("a", a);
//   console.log("b", b);
// })();
(async function() {
  console.log("start");
  const a = await 100;
  console.log("a", a);
  const b = await Promise.resolve(200);
  console.log("b", b);
  try {
    await Promise.reject(300);
  } catch (error) {
    console.log("error", error);
  }
  // console.log("c", c);
  // console.log("end");
})();
