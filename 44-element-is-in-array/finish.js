const transports = ['Bus', 'Car', 'Bicycle', 'Airplane'];

isElementInArray = (inputArray, searchElement) =>
  inputArray.includes(searchElement);

console.log(isElementInArray(transports, 'Bus')); // true
console.log(isElementInArray(transports, 'Phone')); // false
console.log(isElementInArray(transports, 'Airplane')); // true
