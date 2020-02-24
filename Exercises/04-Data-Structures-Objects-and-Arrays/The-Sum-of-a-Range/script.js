function range(start, end) {
  const num_array = [];

  for (let index = start; index <= end; index++) {
    num_array.push(index);
  }

  return num_array;
}

function sum(num_array) {
  // Option 1 (Uglier)
  /*
  total = 0;
  for (const num of num_array) {
    total += num;
  }
  return total
  */

  // Option 2 (More elegant)
  return num_array.reduce((accumulator, value) => accumulator + value, 0);
}

function improvedRange(start, end, step = 1) {
  const num_array = [];
  if (step === 0) {
    return [];
  } else if (step > 0) {
    for (let index = start; index <= end; index += step) {
      num_array.push(index);
    }
  } else {
    for (let index = start; index >= end; index += step) {
      num_array.push(index);
    }
  }
  return num_array;
}

console.log("range", range(1, 10));
console.log("sum", sum(range(1, 10)));
console.log("improvedRange 1", improvedRange(1, 10, 2));
console.log("improvedRange 2", improvedRange(5, 2, -1));
