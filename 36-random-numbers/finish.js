const MIN = 1000;
const MAX = 9999;

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const newArr = (arr, min, max) => {
  const newRandomNum = randomNum(min, max);
  arr.forEach(num => {
    if (num != newRandomNum) {
      arr.push(newRandomNum);
    }
  });
  myNumbers.splice(-5, 5);
};

newArr(myNumbers, MIN, MAX);

console.log(myNumbers);

/* второй вариант */
const newArr2 = (arr, min, max) => {
  do {
    newRandomNum = randomNum(min, max);
  } while (arr.includes(newRandomNum));

  arr.push(newRandomNum);
};

newArr2(myNumbers, MIN, MAX);

console.log(myNumbers);
