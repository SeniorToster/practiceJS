const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

/* const sumPositiveNegative = nums => {
  const positive = nums
    .filter(num => num >= 0)
    .reduce((acc, num) => (acc += num), 0);
  const negative = nums
    .filter(num => num <= 0)
    .reduce((acc, num) => (acc += num), 0);
  return {
    positive,
    negative,
  };
};
 */

/* const sumPositiveNegative = nums => {
  return nums.reduce(
    (acc, num) => {
      if (num >= 0) {
        return {
          positive: acc.positive + num,
          negative: acc.negative,
        };
      }
      return {
        positive: acc.positive,
        negative: acc.negative + num,
      };
    },
    {
      positive: 0,
      negative: 0,
    }
  );
}; */

const sumPositiveNegative = nums => {
  return nums.reduce(
    (acc, num) => {
      if (num >= 0) {
        return {
          ...acc,
          positive: acc.positive + num,
        };
      }
      return {
        ...acc,
        positive: acc.positive,
      };
    },
    {
      positive: 0,
      negative: 0,
    }
  );
};

const result = sumPositiveNegative(nums);

console.log(result);
// { positive: 74, negative: -54 }
