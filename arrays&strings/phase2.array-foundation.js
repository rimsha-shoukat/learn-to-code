// *********************
// Level 1: Fundamentals
// *********************

// 1. Input n and store n integers in an array, then print them.
function task1(arr) {
  return arr;
}
// console.log(task1([1, 2, 3, 4, 5]));

// 2. Find the sum of all elements in an array.
function task2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(task2([5, 5, 6, 2, 3, 4]));

// 3. Find the average of array elements.
function task3(arr) {
  if (arr.length === 0) return 0;
  return task2(arr) / arr.length;
}
// console.log(task3([5, 5, 6, 2, 3, 4]));

// 4. Find the maximum element in an array.
function task4(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
// console.log(task4([5, 5, 6, 2, 3, 4]));

// 5. Find the minimum element in an array.
function task5(arr) {
  if (arr.length === 0) return undefined;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}
// console.log(task5([5, 5, 6, 2, 3, 4]));

// 6. Count how many elements are positive, negative, or zero.
function task6(arr) {
  let positive = 0, negative = 0, zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive++;
    else if (arr[i] < 0) negative++;
    else zero++;
  }
  return { positive, negative, zero };
}
// console.log(task6([1, -2, 0, 4, -5]));

// 7. Count how many elements are even and odd.
function task7(arr) {
  let even = 0, odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even++;
    else odd++;
  }
  return { even, odd };
}
// console.log(task7([5, 5, 6, 2, 3, 4]));

// 8. Find the index of the maximum element.
function task8(arr) {
  if (arr.length === 0) return -1;
  let maxIdx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIdx]) maxIdx = i;
  }
  return maxIdx;
}
// console.log(task8([5, 5, 6, 2, 3, 4]));

// 9. Find the index of the minimum element.
function task9(arr) {
  if (arr.length === 0) return -1;
  let minIdx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIdx]) minIdx = i;
  }
  return minIdx;
}
// console.log(task9([5, 5, 6, 2, 3, 4]));

// 10. Print only those elements that are greater than a given value k.
function task10(arr, k) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > k) res[res.length] = arr[i];
  }
  return res;
}
// console.log(task10([5, 5, 6, 2, 3, 4], 4));

// *************************************
// Level 2: Searching and Counting Logic
// *************************************

// 11. Check whether a given element exists in the array.
function task11(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return true;
  }
  return false;
}
// console.log(task11([5, 5, 6, 2, 3, 4], 6));

// 12. Count how many times a given element appears.
function task12(arr, x) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) count++;
  }
  return count;
}
// console.log(task12([5, 5, 6, 2, 3, 4], 5));

// 13. Find the first occurrence of a given number.
function task13(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
}
// console.log(task13([5, 5, 6, 2, 3, 4], 5));

// 14. Find the last occurrence of a given number.
function task14(arr, x) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === x) return i;
  }
  return -1;
}
// console.log(task14([5, 5, 6, 2, 3, 4], 5));

// 15. Check if all elements in an array are unique.
function task15(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return false;
    }
  }
  return true;
}
// console.log(task15([1, 2, 3, 4]), task15([5, 5, 6]));

// 16. Find the sum of even elements only.
function task16(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) sum += arr[i];
  }
  return sum;
}
// console.log(task16([5, 5, 6, 2, 3, 4]));

// 17. Find the sum of odd elements only.
function task17(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) sum += arr[i];
  }
  return sum;
}
// console.log(task17([5, 5, 6, 2, 3, 4]));

// 18. Count the prime numbers in the array.
function task18(arr) {
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
// console.log(task18([2, 3, 4, 5, 6, 7]));

// 19. Count how many numbers are divisible by both 3 and 5.
function task19(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) count++;
  }
  return count;
}
// console.log(task19([15, 30, 9, 5]));

// 20. Count how many elements are perfect squares.
function task20(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) continue;
    let root = Math.round(Math.sqrt(arr[i]));
    if (root * root === arr[i]) count++;
  }
  return count;
}
// console.log(task20([4, 9, 5, 16, 3]));

// ****************************************
// Level 3: Transformation and Manipulation
// ****************************************

// 21. Create a new array containing squares of all numbers.
function task21(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res[res.length] = arr[i] * arr[i];
  }
  return res;
}
// console.log(task21([1, 2, 3]));

// 22. Create a new array containing only even elements.
function task22(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) res[res.length] = arr[i];
  }
  return res;
}
// console.log(task22([5, 5, 6, 2, 3, 4]));

// 23. Replace every negative number with 0.
function task23(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) arr[i] = 0;
  }
  return arr;
}
// console.log(task23([1, -2, 3, -4]));

// 24. Replace all even numbers with 1 and all odd numbers with 0.
function task24(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] % 2 === 0 ? 1 : 0;
  }
  return arr;
}
// console.log(task24([5, 5, 6, 2, 3, 4]));

// 25. Swap the first and last elements of the array.
function task25(arr) {
  if (arr.length > 1) {
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
  return arr;
}
// console.log(task25([5, 5, 6, 2, 3, 4]));

// 26. Reverse an array without using built-in reverse.
function task26(arr) {
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
// console.log(task26([5, 5, 6, 2, 3, 4]));

// 27. Rotate an array by one position to the left.
function task27(arr) {
  if (arr.length <= 1) return arr;
  let temp = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
  return arr;
}
// console.log(task27([5, 5, 6, 2, 3, 4]));

// 28. Rotate an array by one position to the right.
function task28(arr) {
  if (arr.length <= 1) return arr;
  let temp = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
  return arr;
}
// console.log(task28([5, 5, 6, 2, 3, 4]));

// 29. Swap alternate elements.
function task29(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}
// console.log(task29([5, 5, 6, 2, 3, 4]));

// 30. Copy one array into another manually.
function task30(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy[copy.length] = arr[i];
  }
  return copy;
}
// console.log(task30([5, 5, 6, 2, 3, 4]));

// *******************************************
// Level 4: Aggregate and Comparative Thinking
// *******************************************

// 31. Compare two arrays and check if they are equal in both order and elements.
function task31(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
// console.log(task31([1, 2], [1, 2]), task31([1, 2], [2, 1]));

// 32. Compare two arrays and check if they contain the same elements ignoring order.
function task32(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let visited = [];
  for (let i = 0; i < arr2.length; i++) visited[visited.length] = false;
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
// console.log(task32([1, 2, 2], [2, 1, 2]), task32([1, 2], [2, 3]));

// 33. Merge two arrays into a third array.
function task33(arr1, arr2) {
  let merged = [];
  for (let i = 0; i < arr1.length; i++) merged[merged.length] = arr1[i];
  for (let i = 0; i < arr2.length; i++) merged[merged.length] = arr2[i];
  return merged;
}
// console.log(task33([1, 2], [3, 4]));

// 34. Find the common elements between two arrays.
function task34(arr1, arr2) {
  let common = [];
  for (let i = 0; i < arr1.length; i++) {
    if (task11(arr2, arr1[i]) && !task11(common, arr1[i])) {
      common[common.length] = arr1[i];
    }
  }
  return common;
}
// console.log(task34([1, 2, 3], [2, 3, 4]));

// 35. Find elements that are present in one array but not in the other.
function task35(arr1, arr2) {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!task11(arr2, arr1[i]) && !task11(res, arr1[i])) {
      res[res.length] = arr1[i];
    }
  }
  return res;
}
// console.log(task35([1, 2, 3], [2, 3, 4]));

// 36. Count how many elements are common between two arrays.
function task36(arr1, arr2) {
  return task34(arr1, arr2).length;
}
// console.log(task36([1, 2, 3], [2, 3, 4]));

// 37. Find element-wise sum of two arrays.
function task37(arr1, arr2) {
  let res = [];
  let minLen = arr1.length < arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < minLen; i++) {
    res[res.length] = arr1[i] + arr2[i];
  }
  return res;
}
// console.log(task37([1, 2, 3], [4, 5, 6]));

// 38. Find element-wise product of two arrays.
function task38(arr1, arr2) {
  let res = [];
  let minLen = arr1.length < arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < minLen; i++) {
    res[res.length] = arr1[i] * arr2[i];
  }
  return res;
}
// console.log(task38([1, 2, 3], [4, 5, 6]));

// 39. Create a frequency array of numbers.
function task39(arr) {
  let items = [];
  let freqs = [];
  for (let i = 0; i < arr.length; i++) {
    let idx = task13(items, arr[i]);
    if (idx !== -1) {
      freqs[idx]++;
    } else {
      items[items.length] = arr[i];
      freqs[freqs.length] = 1;
    }
  }
  let res = [];
  for (let i = 0; i < items.length; i++) {
    res[res.length] = { element: items[i], frequency: freqs[i] };
  }
  return res;
}
console.log(task39([5, 5, 6, 2, 3, 4]));

// 40. Print all elements that appear more than once.
function task40(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (task12(arr, arr[i]) > 1 && !task11(res, arr[i])) {
      res[res.length] = arr[i];
    }
  }
  return res;
}
// console.log(task40([5, 5, 6, 2, 3, 4]));

// *******************************************
// Level 5: Logical and Applied Array Problems
// *******************************************

// 41. Check if the array is sorted in ascending order.
function task41(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
// console.log(task41([1, 2, 3]), task41([3, 2, 1]));

// 42. Check if the array is sorted in descending order.
function task42(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) return false;
  }
  return true;
}
// console.log(task42([3, 2, 1]), task42([1, 2, 3]));

// 43. Find the second largest element in an array.
function task43(arr) {
  if (arr.length < 2) return null;
  let max = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }
  return secondMax === -Infinity ? null : secondMax;
}
// console.log(task43([5, 5, 6, 2, 3, 4]));

// 44. Find the second smallest element in an array.
function task44(arr) {
  if (arr.length < 2) return null;
  let min = Infinity;
  let secondMin = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      secondMin = min;
      min = arr[i];
    } else if (arr[i] < secondMin && arr[i] !== min) {
      secondMin = arr[i];
    }
  }
  return secondMin === Infinity ? null : secondMin;
}
// console.log(task44([5, 5, 6, 2, 3, 4]));

// 45. Find the difference between the largest and smallest element.
function task45(arr) {
  if (arr.length === 0) return 0;
  return task4(arr) - task5(arr);
}
// console.log(task45([5, 5, 6, 2, 3, 4]));

// 46. Find the sum of all elements except the largest and smallest.
function task46(arr) {
  if (arr.length <= 2) return 0;
  let max = task4(arr);
  let min = task5(arr);
  let totalSum = task2(arr);
  return totalSum - max - min;
}
// console.log(task46([5, 5, 6, 2, 3, 4]));

// 47. Count how many pairs of elements have a sum equal to a given number k.
function task47(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) count++;
    }
  }
  return count;
}
// console.log(task47([1, 2, 3, 4], 5));

// 48. Count how many elements are greater than the average of the array.
function task48(arr) {
  let avg = task3(arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > avg) count++;
  }
  return count;
}
// console.log(task48([5, 5, 6, 2, 3, 4]));

// 49. Print the frequency of each distinct element.
function task49(arr) {
  return task39(arr);
}
// console.log(task49([5, 5, 6, 2, 3, 4]));

// 50. Print all unique elements that occur exactly once.
function task50(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (task12(arr, arr[i]) === 1) {
      res[res.length] = arr[i];
    }
  }
  return res;
}
// console.log(task50([5, 5, 6, 2, 3, 4]));