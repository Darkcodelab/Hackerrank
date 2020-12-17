//Question https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(n, s) {
  let start = 0;
  let valleys = 0;
  for (let i = 0; i < s.length; i++) {
    if (start == 0 && s[i] == "D") {
      valleys++;
    }
    if (s[i] == "U") {
      start++;
    }
    if (s[i] == "D") {
      start--;
    }
  }
  return valleys;
}
