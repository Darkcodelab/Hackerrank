//Question - https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  //Find the largest Number
  let maxV = Math.max(...candles);
  //Count how many times that number has been repeated
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (maxV == candles[i]) count++;
  }
  //Return the Count
  return count;
}

birthdayCakeCandles([4, 4, 3, 2]);
