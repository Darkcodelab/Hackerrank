//Question - https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  arr = arr.sort((a, b) => a - b);
  let minValues = arr.slice(0, 4).reduce((sum, i) => (sum += i));
  let maxValues = arr.slice(1).reduce((sum, i) => (sum += i));
  console.log(minValues, maxValues);
}

miniMaxSum([1, 2, 3, 4, 5]); // 10 14
