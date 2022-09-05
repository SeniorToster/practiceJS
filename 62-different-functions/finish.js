function firstFunction(a, b) {
  return a + b;
}

firstFunction = 1; // переменной firstFunction можно присвоить другое значение
console.log(firstFunction);

const secondFunction = function (a, b) {
  return a + b;
};

console.log(secondFunction(30, 20));
