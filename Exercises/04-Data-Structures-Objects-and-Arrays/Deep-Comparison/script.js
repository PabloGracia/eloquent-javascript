function deepEqual(value1, value2) {
  if (value1 === null) {
    if (value2 === null) return true;
    else return false;
  }

  if (value2 === null) {
    return false;
  }

  if (typeof value1 === "object") {
    if (typeof value2 === "object") {
      const keys_value1 = Object.keys(value1);
      const keys_value2 = Object.keys(value2);

      for (let index = 0; index < keys_value1.length; index++) {
        if (keys_value1[index] !== keys_value2[index]) return false;
        if (typeof value1[keys_value1[index]] === "object")
          return deepEqual(
            value1[keys_value1[index]],
            value2[keys_value2[index]]
          );
        if (value1[keys_value1[index]] !== value2[keys_value2[index]])
          return false;
      }

      return true;
    } else return false;
  }

  return value1 === value2;
}

console.log(deepEqual(2, 2));
console.log(deepEqual(2, "2"));
console.log(
  deepEqual({ radius: 3, diam: "green" }, { radius: 3, diam: "green" })
);
console.log(
  deepEqual({ radius: 3, diam: "green" }, { radis: 3, diam: "green" })
);
console.log(deepEqual({ 1: { 2: 3 } }, { 1: { 2: 3 } }));
console.log(deepEqual({ 1: { 2: 3 } }, { 1: { 2: 4 } }));
