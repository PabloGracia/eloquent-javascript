function countBs(str) {
  let count = 0;
  let index = 0;

  // I'm using recursion even though it's not the best method.
  // A loop is more appropriated here, but using recursion will help to understand it better.
  // This function also makes use of scopes to understand them better

  function recursiveCount(str) {
    if (str.length === index) return count;
    if (str[index] === "B") {
      count++;
    }
    index++;
    return recursiveCount(str);
  }

  return recursiveCount(str);
}

function countChar(str, char) {
  let count = 0;
  let index = 0;

  // I'm using recursion even though it's not the best method.
  // A loop is more appropriated here, but using recursion will help to understand it better.
  // This function also makes use of scopes to understand them better

  function recursiveCount(str) {
    if (str.length === index) return count;
    if (str[index] === char) {
      count++;
    }
    index++;
    return recursiveCount(str);
  }

  return recursiveCount(str);
}

const improvedCountBs = (str) => countChar(str, "B");

console.log(countBs("my Bad Big BumBleBee"));
console.log(countChar("I have a yellow hovercraft", "r"));
console.log(improvedCountBs("my Bad Big BumBleBee"));
