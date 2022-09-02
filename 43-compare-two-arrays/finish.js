const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b); // false (Почему? Потому что это две разные ссылки)

const c = [2, 1, 3];
const d = [1, 2, 3, 4];

const areArraysEqual = (firstArray, secondArray) => {
  if (
    firstArray.length === secondArray.length &&
    firstArray.every((value, index) => value === secondArray[index])
  ) {
    return true;
  }
  return false;
};

console.log(areArraysEqual(a, b));
console.log(areArraysEqual(a, c));
console.log(areArraysEqual(a, d));
