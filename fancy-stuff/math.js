const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr);
const multiplicativeSum = (...numbers) => numbers.reduce((acc, curr) => acc * curr, 1);

export default {
  sum,
  multiplicativeSum
};