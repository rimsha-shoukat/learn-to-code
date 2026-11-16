// Time O(n²) - Space O(1)

function insertionSort(array) {
  for(let i = 1; i < array.length; i++){
    let ind = i;
    while(ind > 0 && array[ind] < array[ind-1]){
      [array[ind], array[ind-1]] = [array[ind-1], array[ind]]
      ind--;
    }
  }
  return array;
}