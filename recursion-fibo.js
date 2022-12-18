function fiboLoop(n) {
  let array = [];
  array[0] = 0;
  array[1] = 1;
  for (let i = 2; i < n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  console.log(array);
}

function fiboRec(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    return [...fiboRec(n - 1), fiboRec(n - 1)[n - 2] + fiboRec(n - 1)[n - 3]];
  }
}



