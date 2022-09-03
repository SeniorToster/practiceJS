let min, max;

const minMax = (...num) => [Math.max(...num), Math.min(...num)];

[max, min] = minMax(24, 5, 34, 10);

console.log(min, max); // 5, 34

[max, min] = minMax(18, 23, 103, 70, 80, 25);

console.log(min, max); // 18, 103
