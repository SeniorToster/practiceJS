/* const sumNumbers = (...num) => {
  const sum = num.reduce((acc, num) => (acc += num), 0);

  console.log(sum);

  return sum;
};
 */
function sumNumbers() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  console.log(sum);

  return sum;
}

sumNumbers(1, 3);
// 4

sumNumbers(10, 20, 5);
// 35

sumNumbers(2, 5, 80, 1, 10, 12);
// 110
