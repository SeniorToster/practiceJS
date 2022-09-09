const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
};
/* 
const sumObjectValues = obj => {
  let sum = 0;
  Object.keys(obj).forEach(vaule => {
    if (typeof obj[vaule] === 'number') sum += obj[vaule];
  });
  return sum;
};
 */

/* const sumObjectValues = obj => {
  let sum = 0;
  for (const vaule in obj) {
    if (obj.hasOwnProperty(vaule))
      if (typeof obj[vaule] === 'number') {
        sum += obj[vaule];
      }
  }
  return sum;
};
 */

const sumObjectValues = obj => {
  let sum = 0;
  Object.values(obj).forEach(vaule => {
    if (typeof vaule === 'number') sum += vaule;
  });
  return sum;
};

const result = sumObjectValues(objectWithNumbers);
console.log(result);
//42
