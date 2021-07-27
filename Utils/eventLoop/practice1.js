async function fn() {
  return 100;
}
(async function() {
  const a = fn();
  const b = await fn();
  console.log("a", a);
  console.log("b", b);
})();
