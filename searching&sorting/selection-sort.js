// Time O(n²) - Space O(1)

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    [array[min], array[i]] = [array[i], array[min]];
  }
  console.log(array);
  return array;
}