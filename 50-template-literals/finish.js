const templateLiteral = num => {
  return `Число ${num}.
Это число ${num >= 10 ? 'больше или равно' : 'меньше'} 10.
Квадратный корень этого числа - ${Math.sqrt(num)}.`;
};

// ТЕСТ 1
const myNumber = 9;
console.log(templateLiteral(myNumber));
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/

// ТЕСТ 2
const myAnotherNumber = 25;
console.log(templateLiteral(myAnotherNumber));
/* 
Число 25.
Это число больше или равно 10.
Квадратный корень этого числа - 5.
*/
