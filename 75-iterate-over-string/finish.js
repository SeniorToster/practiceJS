let vowelsCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

const str = 'Today is the best day of my life';

/* str.split('').forEach(item => {
  if (vowels.includes(item)) vowelsCount += 1;
});
 */

for (const item of str) {
  if (vowels.includes(item)) vowelsCount += 1;
}

console.log(vowelsCount);
// 9
