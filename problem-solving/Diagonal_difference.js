//Question - https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  let left = 0;
  let right = 0;
  let newArr = Array.prototype.concat.apply([], arr); // 2 dim arr into 1 dim arr
  for (let i = 0; i < newArr.length; i += arr[0].length + 1) {
    left += newArr[i];
  }
  for (
    let i = arr[0].length - 1;
    i < newArr.length - 1;
    i += arr[0].length - 1
  ) {
    right += newArr[i];
  }
  return Math.abs(left - right);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
); // 15
