function plusMinus(arr) {
  let pos = 0,
    neg = 0,
    zero = 0;
  let len = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      neg += 1;
    } else if (arr[i] > 0) {
      pos += 1;
    } else {
      zero += 1;
    }
  }
  console.log(
    `${(pos / len).toFixed(6)}\n${(neg / len).toFixed(6)}\n${(
      zero / len
    ).toFixed(6)}`
  );
}

plusMinus([-4, 3, -9, 0, 4, 1]);
