function isArrayEmpty(inputArray) {
  return inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой';
}

console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));
