//Question - https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
  let steps = 0;
  let i = 0;
  while (i < c.length) {
    if (c[i] == 0 && c[i + 2] == 0) {
      steps++;
      i += 2;
    } else if (c[i] == 0 && c[i + 1] == 0) {
      steps++;
      i += 1;
    } else {
      i++;
    }
  }
  return steps;
}
