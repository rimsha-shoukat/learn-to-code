// *******************
// 1: Basic Operations
// *******************

// Access an element at index
function task1_0(arr, index) {
  return arr[index];
}
// console.log(task1_0([5, 5, 6, 2, 3, 4], 3));

// Update an element at index
function task1_1(arr, index, ele) {
  arr[index] = ele;
  return arr;
}
// console.log(task1_1([5, 5, 6, 2, 3, 4], 3, 7));

// Traverse the array
function task1_2(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
  }
  return res;
}
// console.log(task1_2([5, 5, 6, 2, 3, 4]));

// Find length of array
function task1_3(arr) {
  let len = 0;
  for (let item in arr) {
    len++;
  }
  return len;
}
// console.log(task1_3([5, 5, 6, 2, 3, 4]));

// ********************
// 2: Insert Operations
// ********************

// Insert at end
function task2_0(arr, item) {
  arr[arr.length] = item;
  return arr;
}
// console.log(task2_0([5, 5, 6, 2, 3, 4], 3));

// Insert at beginning (shifting elements manually)
function task2_1(arr, item) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = item;
  return arr;
}
// console.log(task2_1([5, 5, 6, 2, 3, 4], 3));

// Insert at a given index (shifting elements manually)
function task2_2(arr, index, item) {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = item;
  return arr;
}
// console.log(task2_2([5, 5, 6, 2, 3, 4], 3, 6));

// ********************
// 3: Delete Operations
// ********************

// Delete at end (resizing array memory footprint manually)
function task3_0(arr) {
  if (arr.length > 0) {
    arr.length = arr.length - 1;
  }
  return arr;
}
// console.log(task3_0([5, 5, 6, 2, 3, 4]));

// Delete at beginning (shifting left manually to preserve clean sequential indexes)
function task3_1(arr) {
  if (arr.length === 0) return arr;
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}
// console.log(task3_1([5, 5, 6, 2, 3, 4]));

// Delete at a given index
function task3_2(arr, ind) {
  if (ind < 0 || ind >= arr.length) return arr;
  for (let i = ind; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}
// console.log(task3_2([5, 5, 6, 2, 3, 4], 3));

// Delete by value (removes first matching occurrence logically and shifts left)
function task3_3(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      for (let j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr.length = arr.length - 1;
      i--;
    }
  }
  return arr;
}
// console.log(task3_3([5, 5, 6, 2, 3, 4], 5));


// ********************
// 4: Search Operations
// ********************

// Linear search
function task4_0(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
// console.log(task4_0([5, 5, 6, 2, 3, 4], 2));

// Binary search (assumes pre-sorted array collection)
function task4_1(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
// console.log(task4_1([2, 3, 4, 5, 5, 6], 4));

// ******************
// 5: Sort Operations
// ******************

// Sort in ascending order (Bubble Sort algorithm implementation)
function task5_0(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(task5_0([5, 5, 6, 2, 3, 4]));

// Sort in descending order
function task5_1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(task5_1([5, 5, 6, 2, 3, 4]));

// Sort using custom comparator
function task5_2(arr, comparator) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(task5_2([5, 5, 6, 2, 3, 4], (a, b) => a - b));

// *********************
// 6: Reverse Operations
// *********************

// Reverse full array
function task6_0(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}
// console.log(task6_0([5, 5, 6, 2, 3, 4]));

// Reverse a subarray from i to j
function task6_1(arr, i, j) {
  let left = i;
  let right = j;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}
// console.log(task6_1([5, 5, 6, 2, 3, 4], 1, 4));

// Reverse using the reverse trick
function task6_2(arr) {
  return task6_0(arr);
}
// console.log(task6_2([1, 2, 3, 4, 5]));

// **********************
// 7: Rotation Operations
// **********************

// Rotate left by 1
function task7_0(arr) {
  if (arr.length <= 1) return arr;
  let temp = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
  return arr;
}
// console.log(task7_0([5, 5, 6, 2, 3, 4]));

// Rotate right by 1
function task7_1(arr) {
  if (arr.length <= 1) return arr;
  let temp = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
  return arr;
}
// console.log(task7_1([5, 5, 6, 2, 3, 4]));

// Rotate left by k
function task7_2(arr, k) {
  if (arr.length === 0) return arr;
  k = k % arr.length;
  task6_1(arr, 0, k - 1);
  task6_1(arr, k, arr.length - 1);
  task6_1(arr, 0, arr.length - 1);
  return arr;
}
// console.log(task7_2([5, 5, 6, 2, 3, 4], 2));

// Rotate right by k
function task7_3(arr, k) {
  if (arr.length === 0) return arr;
  k = k % arr.length;
  task6_1(arr, 0, arr.length - 1 - k);
  task6_1(arr, arr.length - k, arr.length - 1);
  task6_1(arr, 0, arr.length - 1);
  return arr;
}
// console.log(task7_3([5, 5, 6, 2, 3, 4], 2));

// Cyclic rotation by 1
function task7_4(arr) {
  return task7_1(arr);
}
// console.log(task7_4([5, 5, 6, 2, 3, 4]));

// ***************************
// 8: Merge / Split Operations
// ***************************

// Merge two sorted arrays
function task8_0(arr1, arr2) {
  let merged = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged[merged.length] = arr1[i++];
    } else {
      merged[merged.length] = arr2[j++];
    }
  }
  while (i < arr1.length) merged[merged.length] = arr1[i++];
  while (j < arr2.length) merged[merged.length] = arr2[j++];
  return merged;
}
// console.log(task8_0([2, 4, 6], [3, 5, 7]));

// Merge two unsorted arrays
function task8_1(arr1, arr2) {
  let merged = [];
  for (let i = 0; i < arr1.length; i++) merged[merged.length] = arr1[i];
  for (let i = 0; i < arr2.length; i++) merged[merged.length] = arr2[i];
  return merged;
}
// console.log(task8_1([5, 2], [6, 3]));

// Split an array at a given index
function task8_2(arr, index) {
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < index) left[left.length] = arr[i];
    else right[right.length] = arr[i];
  }
  return [left, right];
}
// console.log(task8_2([5, 5, 6, 2, 3, 4], 3));

// *************************
// 9: Aggregation Operations
// *************************

// Find minimum
function task9_0(arr) {
  if (arr.length === 0) return undefined;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}
// console.log(task9_0([5, 5, 6, 2, 3, 4]));

// Find maximum
function task9_1(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
// console.log(task9_1([5, 5, 6, 2, 3, 4]));

// Find sum
function task9_2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(task9_2([5, 5, 6, 2, 3, 4]));

// Find product
function task9_3(arr) {
  if (arr.length === 0) return 0;
  let prod = 1;
  for (let i = 0; i < arr.length; i++) {
    prod *= arr[i];
  }
  return prod;
}
// console.log(task9_3([5, 5, 6, 2, 3, 4]));

// Count occurrences
function task9_4(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) count++;
  }
  return count;
}
// console.log(task9_4([5, 5, 6, 2, 3, 4], 5));

// Build frequency map
function task9_5(arr) {
  let map = [];
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    let found = false;
    for (let j = 0; j < map.length; j++) {
      if (map[j].element === key) {
        map[j].count++;
        found = true;
        break;
      }
    }
    if (!found) {
      map[map.length] = { element: key, count: 1 };
    }
  }
  return map;
}
console.log(task9_5([5, 5, 6, 2, 3, 4]));

// *******************
// 10: Copy Operations
// *******************

// Shallow copy
function task10_0(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy[i] = arr[i];
  }
  return copy;
}
// console.log(task10_0([5, 5, 6, 2, 3, 4]));

// Deep copy (handles primitive values and basic objects/nested arrays)
function task10_1(val) {
  if (val === null || typeof val !== "object") {
    return val;
  }
  if (Array.isArray(val)) {
    let copy = [];
    for (let i = 0; i < val.length; i++) {
      copy[i] = task10_1(val[i]);
    }
    return copy;
  }
  let copy = {};
  for (let key in val) {
    if (val.hasOwnProperty(key)) {
      copy[key] = task10_1(val[key]);
    }
  }
  return copy;
}
// console.log(task10_1([{ a: 1 }, [2, 3]]));

// Copy a subarray
function task10_2(arr, start, end) {
  let copy = [];
  for (let i = start; i < end && i < arr.length; i++) {
    copy[copy.length] = arr[i];
  }
  return copy;
}
console.log(task10_2([5, 5, 6, 2, 3, 4], 1, 4));

// Copy one array into another manually
function task10_3(src, dest) {
  for (let i = 0; i < src.length; i++) {
    dest[i] = src[i];
  }
  dest.length = src.length;
  return dest;
}
console.log(task10_3([5, 5, 6, 2, 3, 4], []));