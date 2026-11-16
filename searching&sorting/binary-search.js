// Time O(n²) - Space O(1)

function binarySearch(searchList, value) {
  let arrayPath = [];
  let i = 0;
  let j = searchList.length - 1;
  while (i <= j) {
    let mid = Math.floor((j - i) / 2) + i;
    arrayPath.push(searchList[mid]);
    if (searchList[mid] === value) {
      return arrayPath;
    } else if (searchList[mid] < value) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return "Value Not Found";
}