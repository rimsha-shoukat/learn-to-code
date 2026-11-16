// Time O(n²) - Space O(1)

function bubbleSort(array) {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swap = true;
      }
    }
  }
  console.log(array);
  return array;
};
