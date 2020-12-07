//Question - https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    let space = n - i;
    let r = n - space;
    string += " ".repeat(space) + "#".repeat(r) + "\n";
  }
  console.log(string);
}

staircase(6);
