// Time O(n²) - Space O(log n)

function partition(array, left, right) {
  let pivotInd = Math.floor((left + right) / 2);
  let pivot = array[pivotInd];
  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  }
  return left;
}
function quickSort(array, low = 0, high = null) {
  if (high == null) {
    high = array.length - 1;
  }
  if (low < high) {
    let pivotInd = partition(array, low, high);
    quickSort(array, low, pivotInd - 1);
    quickSort(array, pivotInd, high);
  }
  return array;
}