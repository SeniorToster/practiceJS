const a = [5, 'abc', 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

const arraySortInfo = arraySortInfo => {
  if (arraySortInfo.some(value => typeof value === 'string')) {
    return 'Некоторые элементы не являются числами';
  }

  if (
    arraySortInfo.every((value, index) =>
      index > 0 ? value >= arraySortInfo[index - 1] : true
    )
  ) {
    return 'Массив отсортирован по возрастанию';
  }

  if (
    arraySortInfo.every((value, index) =>
      index > 0 ? value <= arraySortInfo[index - 1] : true
    )
  ) {
    return 'Массив отсортирован по убыванию';
  }

  return 'Массив не отсортирован';
};

console.log(arraySortInfo(a));
console.log(arraySortInfo(b));
console.log(arraySortInfo(c));
console.log(arraySortInfo(d));
