function fiboLoop(n) {
  let array = [];
  array[0] = 0;
  array[1] = 1;
  for (let i = 2; i < n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  console.log(array);
}
