function reverseArray(arr) {
  const rev_arr = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    rev_arr.push(arr[index]);
  }
  return rev_arr;
}

function reverseArrayInPlace(arr) {
  const arr_half = Math.floor(arr.length / 2) - 1;

  for (let index = 0; index <= arr_half; index++) {
    const pos = arr.length - 1 - index;
    const aux = arr[pos];
    arr[pos] = arr[index];
    arr[index] = aux;
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);
let rev_array = reverseArray(array);
console.log(rev_array);
reverseArrayInPlace(array);
console.log(array);
