let a = 'first';
let b = 'second';

console.log(a, b);
// first second
[b, a] = [a, b];

console.log(a, b);
// second first
