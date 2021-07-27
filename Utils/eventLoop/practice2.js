// console.log("1");
(async function() {
  console.log("start");
  const a = await 100;
  console.log("a", a);
  const b = await Promise.resolve(200);
  console.log("b", b);
  try {
    const c = await Promise.reject(300);
    console.log("c", c);
  } catch (e) {
    console.log("e", e);
  }
  console.log("end");
})();
console.log("2");
