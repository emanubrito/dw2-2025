function inverterArrayComReverse(arr) {
    arr.reverse();
}
function inverterArraySemReverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
      const temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
}

  const v = [1, 2, 3, 4, 5];

  inverterArrayComReverse(v);
  console.log(v); // [5, 4, 3, 2, 1]
  
  inverterArraySemReverse(v);
  console.log(v); // [1, 2, 3, 4, 5]
      