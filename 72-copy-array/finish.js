const a = [1, 2, 3];

const b = [...a];

b.push('newElement');

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]
