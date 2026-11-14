// Master Your logic - file by CodeWithNishchal

// GOAL: Build the ability to handle a collection logically.

// *******************************
// Level 1: Fundamentals of Arrays
// *******************************

// 1. Input n and take n integers into an array; print them.
function level1task1(arr) {
  return arr;
}
// console.log(level1task1([1, 2, 3, 4, 5]));

// 2. Find the sum of all elements in an array.
function level1task2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(level1task2([1, 2, 3, 4, 5]));

// 3. Find the average of array elements.
function level1task3(arr) {
  if (arr.length === 0) return 0;
  return level1task2(arr) / arr.length;
}
// console.log(level1task3([1, 2, 3, 4, 5]));

// 4. Find the maximum element in an array.
function level1task4(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
// console.log(level1task4([3, 1, 4, 5, 2]));

// 5. Find the minimum element in an array.
function level1task5(arr) {
  if (arr.length === 0) return null;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}
// console.log(level1task5([3, 1, 4, 5, 2]));

// 6. Count how many elements are positive, negative, or zero.
function level1task6(arr) {
  let positive = 0, negative = 0, zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive++;
    else if (arr[i] < 0) negative++;
    else zero++;
  }
  return { positive, negative, zero };
}
// console.log(level1task6([1, -2, 0, 4, -5]));

// 7. Count how many elements are even and odd.
function level1task7(arr) {
  let even = 0, odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even++;
    else odd++;
  }
  return { even, odd };
}
// console.log(level1task7([1, 2, 3, 4, 5]));

// 8. Find the index of the maximum element.
function level1task8(arr) {
  if (arr.length === 0) return -1;
  let maxIdx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIdx]) maxIdx = i;
  }
  return maxIdx;
}
// console.log(level1task8([3, 1, 5, 4, 2]));

// 9. Find the index of the minimum element.
function level1task9(arr) {
  if (arr.length === 0) return -1;
  let minIdx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIdx]) minIdx = i;
  }
  return minIdx;
}
// console.log(level1task9([3, 1, 5, 4, 2]));

// 10. Take n elements and print only those greater than a given value k.
function level1task10(arr, k) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > k) result.push(arr[i]);
  }
  return result;
}
// console.log(level1task10([1, 5, 8, 3, 10], 5));


// ***********************************
// Level 2: Searching & Counting Logic
// ***********************************

// 1. Input an element x — check if it exists in the array.
function level2task1(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return true;
  }
  return false;
}
// console.log(level2task1([10, 20, 30], 20));

// 2. Count how many times a given element appears.
function level2task2(arr, x) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) count++;
  }
  return count;
}
// console.log(level2task2([1, 2, 3, 2, 2], 2));

// 3. Find the first occurrence of a given number.
function level2task3(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
}
// console.log(level2task3([10, 20, 30, 20], 20));

// 4. Find the last occurrence of a given number.
function level2task4(arr, x) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === x) return i;
  }
  return -1;
}
// console.log(level2task4([10, 20, 30, 20], 20));

// 5. Check if all elements in an array are unique.
function level2task5(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return false;
    }
  }
  return true;
}
// console.log(level2task5([1, 2, 3, 4]), level2task5([1, 2, 2, 3]));

// 6. Find the sum of even elements only.
function level2task6(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) sum += arr[i];
  }
  return sum;
}
// console.log(level2task6([1, 2, 3, 4, 5]));

// 7. Find the sum of odd elements only.
function level2task7(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) sum += arr[i];
  }
  return sum;
}
// console.log(level2task7([1, 2, 3, 4, 5]));

// 8. Find the count of prime numbers in the array.
function level2task8(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (n <= 1) continue;
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(n); j++) {
      if (n % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) count++;
  }
  return count;
}
// console.log(level2task8([1, 2, 3, 4, 5, 11, 12]));

// 9. Count how many numbers are divisible by 3 and 5 both.
function level2task9(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) count++;
  }
  return count;
}
// console.log(level2task9([15, 30, 9, 5, 45]));

// 10. Count how many elements are perfect squares.
function level2task10(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) continue;
    let root = Math.round(Math.sqrt(arr[i]));
    if (root * root === arr[i]) count++;
  }
  return count;
}
// console.log(level2task10([4, 9, 5, 16, 23]));

// **************************************
// Level 3: Transformation & Manipulation
// **************************************

// 1. Create a new array containing squares of all numbers.
function level3task1(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * arr[i]);
  }
  return res;
}
// console.log(level3task1([1, 2, 3]));

// 2. Create a new array containing only even elements.
function level3task2(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) res.push(arr[i]);
  }
  return res;
}
// console.log(level3task2([1, 2, 3, 4]));

// 3. Replace every negative number with 0.
function level3task3(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) arr[i] = 0;
  }
  return arr;
}
// console.log(level3task3([1, -2, 3, -4]));

// 4. Replace all even numbers with 1 and all odd with 0.
function level3task4(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] % 2 === 0 ? 1 : 0;
  }
  return arr;
}
// console.log(level3task4([1, 2, 3, 4]));

// 5. Swap the first and last elements of the array.
function level3task5(arr) {
  if (arr.length > 1) {
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
  return arr;
}
// console.log(level3task5([1, 2, 3, 4]));

// 6. Reverse an array (without using built-in reverse).
function level3task6(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
// console.log(level3task6([1, 2, 3, 4]));

// 7. Rotate an array by one position to the left.
function level3task7(arr) {
  if (arr.length <= 1) return arr;
  let temp = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
  return arr;
}
// console.log(level3task7([1, 2, 3, 4]));

// 8. Rotate an array by one position to the right.
function level3task8(arr) {
  if (arr.length <= 1) return arr;
  let temp = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
  return arr;
}
// console.log(level3task8([1, 2, 3, 4]));

// 9. Swap alternate elements (1st ↔ 2nd, 3rd ↔ 4th, etc.).
function level3task9(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}
// console.log(level3task9([1, 2, 3, 4, 5]));

// 10. Copy one array to another manually.
function level3task10(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy.push(arr[i]);
  }
  return copy;
}
// console.log(level3task10([1, 2, 3]));


// *****************************************
// Level 4: Aggregate & Comparative Thinking
// *****************************************

// 1. Compare two arrays — check if they are equal (same elements & order).
function level4task1(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
// console.log(level4task1([1, 2], [1, 2]), level4task1([1, 2], [2, 1]));

// 2. Compare two arrays — check if they contain the same elements (ignore order).
function level4task2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let visited = [];
  for (let i = 0; i < arr2.length; i++) visited.push(false);
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (!visited[j] && arr1[i] === arr2[j]) {
        visited[j] = true;
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
}
// console.log(level4task2([1, 2, 2], [2, 1, 2]), level4task2([1, 2], [2, 3]));

// 3. Merge two arrays into a third array.
function level4task3(arr1, arr2) {
  let res = [];
  for (let i = 0; i < arr1.length; i++) res.push(arr1[i]);
  for (let i = 0; i < arr2.length; i++) res.push(arr2[i]);
  return res;
}
// console.log(level4task3([1, 2], [3, 4]));

// 4. Find the common elements between two arrays.
function level4task4(arr1, arr2) {
  let common = [];
  for (let i = 0; i < arr1.length; i++) {
    if (level2task1(arr2, arr1[i]) && !level2task1(common, arr1[i])) {
      common.push(arr1[i]);
    }
  }
  return common;
}
// console.log(level4task4([1, 2, 3], [2, 3, 4]));

// 5. Find elements that are in one array but not in the other.
function level4task5(arr1, arr2) {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!level2task1(arr2, arr1[i]) && !level2task1(res, arr1[i])) {
      res.push(arr1[i]);
    }
  }
  return res;
}
// console.log(level4task5([1, 2, 3], [2, 4]));

// 6. Count how many elements are common between two arrays.
function level4task6(arr1, arr2) {
  return level4task4(arr1, arr2).length;
}
// console.log(level4task6([1, 2, 3], [2, 3, 4]));

// 7. Find element-wise sum of two arrays (A[i] + B[i]).
function level4task7(arr1, arr2) {
  let res = [];
  let len = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    res.push(arr1[i] + arr2[i]);
  }
  return res;
}
// console.log(level4task7([1, 2, 3], [4, 5, 6]));

// 8. Find element-wise product of two arrays.
function level4task8(arr1, arr2) {
  let res = [];
  let len = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    res.push(arr1[i] * arr2[i]);
  }
  return res;
}
// console.log(level4task8([1, 2, 3], [4, 5, 6]));

// 9. Create a frequency array of numbers (count occurrence of each number).
function level4task9(arr) {
  let items = [];
  let frequencies = [];
  for (let i = 0; i < arr.length; i++) {
    let idx = level2task3(items, arr[i]);
    if (idx !== -1) {
      frequencies[idx]++;
    } else {
      items.push(arr[i]);
      frequencies.push(1);
    }
  }
  let res = [];
  for (let i = 0; i < items.length; i++) {
    res.push({ value: items[i], count: frequencies[i] });
  }
  return res;
}
// console.log(level4task9([1, 2, 2, 3, 1, 1]));

// 10. Print all elements that appear more than once.
function level4task10(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (level2task2(arr, arr[i]) > 1 && !level2task1(res, arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}
// console.log(level4task10([1, 2, 2, 3, 1, 4]));

// *****************************************
// Level 5: Logical & Applied Array Problems
// *****************************************

// 1. Check if the array is sorted in ascending order.
function level5task1(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
// console.log(level5task1([1, 2, 3]), level5task1([1, 3, 2]));

// 2. Check if the array is sorted in descending order.
function level5task2(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) return false;
  }
  return true;
}
// console.log(level5task2([3, 2, 1]), level5task2([1, 3, 2]));

// 3. Find the second largest element in an array.
function level5task3(arr) {
  if (arr.length < 2) return null;
  let first = -Infinity, second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second === -Infinity ? null : second;
}
// console.log(level5task3([3, 5, 1, 5, 4]));

// 4. Find the second smallest element in an array.
function level5task4(arr) {
  if (arr.length < 2) return null;
  let first = Infinity, second = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second === Infinity ? null : second;
}
// console.log(level5task4([3, 5, 1, 1, 4]));

// 5. Find the difference between the largest and smallest element.
function level5task5(arr) {
  if (arr.length === 0) return 0;
  return level1task4(arr) - level1task5(arr);
}
// console.log(level5task5([1, 5, 9, 3]));

// 6. Find the sum of all elements except the largest and smallest.
function level5task6(arr) {
  if (arr.length <= 2) return 0;
  let max = level1task4(arr);
  let min = level1task5(arr);
  let sum = level1task2(arr);
  return sum - max - min;
}
// console.log(level5task6([1, 2, 3, 4, 5]));

// 7. Count how many pairs of elements have a sum equal to a given number k.
function level5task7(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) count++;
    }
  }
  return count;
}
// console.log(level5task7([1, 2, 3, 4, 5], 5));

// 8. Count how many elements are greater than the average of the array.
function level5task8(arr) {
  let avg = level1task3(arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > avg) count++;
  }
  return count;
}
// console.log(level5task8([1, 2, 3, 4, 5]));

// 9. Print the frequency of each distinct element.
function level5task9(arr) {
  return level4task9(arr);
}
// console.log(level5task9([4, 5, 4, 6]));

// 10. Print all unique elements (those that occur exactly once).
function level5task10(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (level2task2(arr, arr[i]) === 1) {
      res.push(arr[i]);
    }
  }
  return res;
}
// console.log(level5task10([1, 2, 2, 3, 4, 4]));