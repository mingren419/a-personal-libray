function deepClone(origin) {
  if (!origin) {
    return origin;
  }
  let obj = Array.isArray(origin) ? [] : {};
  for (let key in origin) {
    if (Object.hasOwnProperty.call(origin, key)) {
      let prop = origin[key];
      if (typeof prop === "object") {
        obj[key] = deepClone(prop);
      } else {
        obj[key] = prop;
      }
    }
  }
  return obj;
}

// const a = { name: "xht", info: { age: 30, sex: "male" } };
// const b = deepClone(a);
// console.log("b", b);
// console.log(a === b);
// console.log(a.info.age === b.info.age);
