function isEven(num) {
  // If the number is negative, make it positive for the calculation
  if (num < 0) num *= -1;

  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
