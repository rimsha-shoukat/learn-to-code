// Time O(n log n) - Space O(n)

function merge (array, low, mid, high) {
  let newArr = [];
  let i = low;
  let j = mid+1;
  let k = 0;
  while(i <= mid && j <= high){
    if(array[i] <= array[j]){
      newArr[k] = array[i];
      i++;
      k++;
    } else if (array[j] < array[i]){
      newArr[k] = array[j];
      j++;
      k++;
    }
  }
  while(i <= mid){
    newArr[k] = array[i];
    i++;
    k++;
  }
  while(j <= high){
    newArr[k] = array[j];
    j++;
    k++;
  }
  for(let i = low; i <= high; i++){
    array[i] = newArr.shift();
  }
}

function mergeSort (array, low = 0, high = null) {
  if(high === null){
    high = array.length-1;
  }
  if(low < high){
    let mid = Math.floor((low+high)/2);
    mergeSort(array, low, mid);
    mergeSort(array, mid+1, high);
    merge(array, low, mid, high);
  }
  return array;
}