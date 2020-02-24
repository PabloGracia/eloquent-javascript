function arrayToList(arr) {
  let arr_list = {};

  if (arr.length === 0) return { value: null, rest: null };
  else recursive(arr_list, 0);

  return arr_list;

  function recursive(list, index) {
    list.value = arr[index];
    if (index >= arr.length - 1) {
      list.rest = null;
      return;
    } else {
      list.rest = {};
      recursive(list.rest, index + 1);
    }
  }
}

function listToArray(list) {
  let list_arr = [];

  recursive(list);

  function recursive(list_node) {
    list_arr.push(list_node.value);
    if (list_node.rest === null) return;
    recursive(list_node.rest);
  }
  return list_arr;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

console.log(JSON.stringify(arrayToList([1, 2, 3, 5, 7])));
console.log(listToArray(arrayToList([1, 2, 3, 5, 7])));
console.log(JSON.stringify(prepend(-5, arrayToList([1, 3, 5, 9]))));
