// Master Your logic - file by CodeWithNishchal

// GOAL: Strengthen logical thinking with character manipulation.

// ******************************************
// Level 1: Number-Based Logical Combinations
// ******************************************

// 1. Print all numbers between 1 and N that are divisible by both 3 and 5.
function level1task1(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push(i);
  }
  return result;
}
// console.log(level1task1(50));

// 2. Find the sum of digits of a number (use loop).
function level1task2(n) {
  let sum = 0;
  let num = Math.abs(n);
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
// console.log(level1task2(1234));

// 3. Check if a number is an Armstrong number.
function level1task3(n) {
  let num = Math.abs(n);
  let temp = num;
  let count = 0;
  while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
  }
  temp = num;
  let sum = 0;
  while (temp > 0) {
    sum += Math.pow(temp % 10, count);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}
// console.log(level1task3(153));

// 4. Print all Armstrong numbers between 1 and 1000.
function level1task4() {
  let result = [];
  for (let i = 1; i <= 1000; i++) {
    if (level1task3(i)) result.push(i);
  }
  return result;
}
// console.log(level1task4());

// 5. Find the factorial of a number using recursion.
function level1task5(n) {
  if (n <= 1) return 1;
  return n * level1task5(n - 1);
}
// console.log(level1task5(5));

// 6. Count how many even digits a number contains.
function level1task6(n) {
  let count = 0;
  let num = Math.abs(n);
  if (num === 0) return 1;
  while (num > 0) {
    if ((num % 10) % 2 === 0) count++;
    num = Math.floor(num / 10);
  }
  return count;
}
// console.log(level1task6(24613));

// 7. Print all prime numbers between 1 and N.
function level1task7(n) {
  let result = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) result.push(i);
  }
  return result;
}
// console.log(level1task7(20));

// 8. Print the reverse of a number (123 → 321).
function level1task8(n) {
  let rev = 0;
  let num = Math.abs(n);
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return n < 0 ? -rev : rev;
}
// console.log(level1task8(123));

// 9. Check if a number is palindrome (121 → true).
function level1task9(n) {
  return n === level1task8(n);
}
// console.log(level1task9(121));

// 10. Check if a number is perfect (sum of factors equals number).
function level1task10(n) {
  if (n <= 1) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum === n;
}
// console.log(level1task10(28));


// ***************************
// Level 2: String + Logic Mix
// ***************************

// Helper functions for string parsing
function splitWords(str) {
  let words = [];
  let w = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (w.length > 0) {
        words.push(w);
        w = "";
      }
    } else {
      w += str[i];
    }
  }
  if (w.length > 0) words.push(w);
  return words;
}

function joinWords(arr, delimiter) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
    if (i < arr.length - 1) res += delimiter;
  }
  return res;
}

// 1. Check if two strings are anagrams (without using collections).
function level2task1(str1, str2) {
  if (str1.length !== str2.length) return false;
  let arr2 = [];
  for (let i = 0; i < str2.length; i++) arr2.push(false);
  for (let i = 0; i < str1.length; i++) {
    let matched = false;
    for (let j = 0; j < str2.length; j++) {
      if (!arr2[j] && str1[i] === str2[j]) {
        arr2[j] = true;
        matched = true;
        break;
      }
    }
    if (!matched) return false;
  }
  return true;
}
// console.log(level2task1("listen", "silent"));

// 2. Count vowels in each word of a sentence.
function level2task2(str) {
  let words = splitWords(str);
  let res = [];
  for (let i = 0; i < words.length; i++) {
    let count = 0;
    for (let j = 0; j < words[i].length; j++) {
      if ("aeiouAEIOU".includes(words[i][j])) count++;
    }
    res.push(count);
  }
  return res;
}
// console.log(level2task2("hello world instance"));

// 3. Reverse words in a string if their length is even.
function level2task3(str) {
  let words = splitWords(str);
  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 === 0) {
      let reversed = "";
      for (let j = words[i].length - 1; j >= 0; j--) reversed += words[i][j];
      words[i] = reversed;
    }
  }
  return joinWords(words, " ");
}
// console.log(level2task3("hello world code test"));

// 4. Replace every vowel in a string with its position (a=1, e=2...).
function level2task4(str) {
  let vowels = "aeiou";
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let lower = str[i].toLowerCase();
    let idx = vowels.indexOf(lower);
    if (idx !== -1) {
      res += (idx + 1);
    } else {
      res += str[i];
    }
  }
  return res;
}
// console.log(level2task4("banana"));

// 5. Print characters that appear more than once (without map).
function level2task5(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) count++;
    }
    if (count > 1) {
      let repeated = false;
      for (let k = 0; k < res.length; k++) {
        if (res[k] === str[i]) repeated = true;
      }
      if (!repeated) res += str[i];
    }
  }
  return res;
}
// console.log(level2task5("hello"));

// 6. Count words that start and end with the same letter.
function level2task6(str) {
  let words = splitWords(str);
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let w = words[i].toLowerCase();
    if (w.length > 0 && w[0] === w[w.length - 1]) count++;
  }
  return count;
}
// console.log(level2task6("radar room noon"));

// 7. Toggle case for every alternate word in a sentence.
function level2task7(str) {
  let words = splitWords(str);
  for (let i = 1; i < words.length; i += 2) {
    let toggled = "";
    for (let j = 0; j < words[i].length; j++) {
      let char = words[i][j];
      if (char >= "A" && char <= "Z") toggled += char.toLowerCase();
      else if (char >= "a" && char <= "z") toggled += char.toUpperCase();
      else toggled += char;
    }
    words[i] = toggled;
  }
  return joinWords(words, " ");
}
// console.log(level2task7("hello world this is code"));

// 8. Check if two strings are rotations of each other.
function level2task8(str1, str2) {
  if (str1.length !== str2.length) return false;
  return (str1 + str1).includes(str2);
}
// console.log(level2task8("abcde", "cdeab"));

// 9. Find the word with maximum vowels in a sentence.
function level2task9(str) {
  let words = splitWords(str);
  let counts = level2task2(str);
  let maxIdx = 0;
  for (let i = 1; i < counts.length; i++) {
    if (counts[i] > counts[maxIdx]) maxIdx = i;
  }
  return words[maxIdx] || "";
}
// console.log(level2task9("hello beautiful world"));

// 10. Remove duplicate words from a sentence.
function level2task10(str) {
  let words = splitWords(str);
  let unique = [];
  for (let i = 0; i < words.length; i++) {
    let exists = false;
    for (let j = 0; j < unique.length; j++) {
      if (unique[j] === words[i]) exists = true;
    }
    if (!exists) unique.push(words[i]);
  }
  return joinWords(unique, " ");
}
// console.log(level2task10("hello world hello"));


// ******************************
// Level 3: Array + Looping Logic
// ******************************

// 1. Find the maximum and minimum element in an array.
function level3task1(arr) {
  if (arr.length === 0) return { max: null, min: null };
  let max = arr[0], min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return { max, min };
}
// console.log(level3task1([3, 1, 4, 1, 5]));

// 2. Count how many positive, negative, and zero elements are in an array.
function level3task2(arr) {
  let pos = 0, neg = 0, zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) pos++;
    else if (arr[i] < 0) neg++;
    else zero++;
  }
  return { pos, neg, zero };
}
// console.log(level3task2([1, -1, 0, 2, -3]));

// 3. Print all unique elements from an array.
function level3task3(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }
    if (count === 1) unique.push(arr[i]);
  }
  return unique;
}
// console.log(level3task3([1, 2, 2, 3, 4, 4]));

// 4. Reverse an array in-place.
function level3task4(arr) {
  let i = 0, j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}
// console.log(level3task4([1, 2, 3, 4]));

// 5. Shift all zeros to the end of the array.
function level3task5(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }
  while (count < arr.length) {
    arr[count++] = 0;
  }
  return arr;
}
// console.log(level3task5([0, 1, 0, 3, 12]));

// 6. Count how many elements are even at an even index.
function level3task6(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] % 2 === 0) count++;
  }
  return count;
}
// console.log(level3task6([2, 1, 4, 3, 5, 6]));

// 7. Merge two arrays into one.
function level3task7(arr1, arr2) {
  let res = [];
  for (let i = 0; i < arr1.length; i++) res.push(arr1[i]);
  for (let i = 0; i < arr2.length; i++) res.push(arr2[i]);
  return res;
}
// console.log(level3task7([1, 2], [3, 4]));

// 8. Find the second largest element in an array.
function level3task8(arr) {
  if (arr.length < 2) return null;
  let max = -Infinity, secondMax = -Infinity;
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
// console.log(level3task8([3, 5, 1, 5, 4]));

// 9. Rotate an array by one position to the right.
function level3task9(arr) {
  if (arr.length <= 1) return arr;
  let last = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = last;
  return arr;
}
// console.log(level3task9([1, 2, 3, 4]));

// 10. Find the sum of all elements at odd indices.
function level3task10(arr) {
  let sum = 0;
  for (let i = 1; i < arr.length; i += 2) {
    sum += arr[i];
  }
  return sum;
}
// console.log(level3task10([1, 2, 3, 4, 5]));

// ************************************
// Level 4: Nested Logic & Pattern Flow
// ************************************

// 1. Print a multiplication table in a formatted grid (10x10).
function level4task1() {
  let matrix = [];
  for (let i = 1; i <= 10; i++) {
    let row = [];
    for (let j = 1; j <= 10; j++) {
      row.push(i * j);
    }
    matrix.push(row);
  }
  return matrix;
}
// console.log(level4task1());

// 2. Print all pairs in an array whose sum equals a given number.
function level4task2(arr, k) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) pairs.push([arr[i], arr[j]]);
    }
  }
  return pairs;
}
// console.log(level4task2([1, 2, 3, 4, 5], 5));

// 3. Print all subarrays of a given array.
function level4task3(arr) {
  let subs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let current = [];
      for (let k = i; k <= j; k++) current.push(arr[k]);
      subs.push(current);
    }
  }
  return subs;
}
// console.log(level4task3([1, 2, 3]));

// 4. Check if an array is sorted (ascending or descending).
function level4task4(arr) {
  let asc = true, desc = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) asc = false;
    if (arr[i] < arr[i + 1]) desc = false;
  }
  return asc || desc;
}
// console.log(level4task4([1, 2, 3]), level4task4([3, 2, 1]));

// 5. Count how many times a number appears consecutively in an array.
function level4task5(arr, target) {
  let maxRun = 0, currentRun = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      currentRun++;
      if (currentRun > maxRun) maxRun = currentRun;
    } else {
      currentRun = 0;
    }
  }
  return maxRun;
}
// console.log(level4task5([1, 2, 2, 2, 3, 2], 2));

// 6. Find all pairs of characters in a string that are the same (nested loop).
function level4task6(str) {
  let pairs = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) pairs.push([i, j]);
    }
  }
  return pairs;
}
// console.log(level4task6("indie"));

// 7. Print pattern of increasing characters (A, AB, ABC...).
function level4task7(n) {
  let lines = [];
  for (let i = 1; i <= n; i++) {
    let current = "";
    for (let j = 0; j < i; j++) {
      current += String.fromCharCode(65 + j);
    }
    lines.push(current);
  }
  return lines;
}
// console.log(level4task7(4));

// 8. Print Pascal’s triangle up to N rows.
function level4task8(n) {
  let triangle = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }
    triangle.push(row);
  }
  return triangle;
}
// console.log(level4task8(4));

// 9. Generate Fibonacci series up to N using recursion.
function getFib(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return getFib(n - 1) + getFib(n - 2);
}
function level4task9(n, curr = 0, res = []) {
  if (curr >= n) return res;
  res.push(getFib(curr));
  return level4task9(n, curr + 1, res);
}
// console.log(level4task9(6));

// 10. Print numbers in a spiral-like pattern.
function level4task10(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) row.push(0);
    matrix.push(row);
  }
  let top = 0, bottom = n - 1, left = 0, right = n - 1;
  let curr = 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) matrix[top][i] = curr++;
    top++;
    for (let i = top; i <= bottom; i++) matrix[i][right] = curr++;
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) matrix[bottom][i] = curr++;
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) matrix[i][left] = curr++;
      left++;
    }
  }
  return matrix;
}
// console.log(level4task10(3));

// ********************************************
// Level 5: Applied Reasoning & Real-Life Logic
// ********************************************

// 1. Given marks of students, find how many passed (>= 40).
function level5task1(marks) {
  let count = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 40) count++;
  }
  return count;
}
// console.log(level5task1([35, 45, 60, 20, 80]));

// 2. Take age inputs and count how many are adults, minors, seniors.
function level5task2(ages) {
  let minors = 0, adults = 0, seniors = 0;
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) minors++;
    else if (ages[i] >= 65) seniors++;
    else adults++;
  }
  return { minors, adults, seniors };
}
// console.log(level5task2([12, 25, 70, 18]));

// 3. Validate a password (at least one uppercase, lowercase, digit, special char).
function level5task3(pwd) {
  if (pwd.length < 8) return false;
  let upper = false, lower = false, digit = false, special = false;
  for (let i = 0; i < pwd.length; i++) {
    let c = pwd[i];
    if (c >= "A" && c <= "Z") upper = true;
    else if (c >= "a" && c <= "z") lower = true;
    else if (c >= "0" && c <= "9") digit = true;
    else special = true;
  }
  return upper && lower && digit && special;
}
// console.log(level5task3("Pass123!"));

// 4. Simulate a simple calculator using switch-case.
function level5task4(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "": return a * b;
    case "/": return b !== 0 ? a / b : null;
    default: return null;
  }
}
// console.log(level5task4(10, 5, ""));

// 5. Count how many times a coin lands on heads/tails (use random).
function level5task5(flips) {
  let heads = 0, tails = 0;
  for (let i = 0; i < flips; i++) {
    if (Math.random() < 0.5) heads++;
    else tails++;
  }
  return { heads, tails };
}
// console.log(level5task5(100));

// 6. Print frequency of each digit in a number.
function level5task6(n) {
  let counts = [];
  let num = Math.abs(n);
  if (num === 0) counts[0] = 1;
  while (num > 0) {
    counts[num % 10]++;
    num = Math.floor(num / 10);
  }
  let res = [];
  for (let i = 0; i < 10; i++) {
    if (counts[i] > 0) res.push({ digit: i, count: counts[i] });
  }
  return res;
}
// console.log(level5task6(1123));

// 7. Find common elements between two arrays.
function level5task7(arr1, arr2) {
  let common = [];
  for (let i = 0; i < arr1.length; i++) {
    let inArr2 = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) inArr2 = true;
    }
    if (inArr2) {
      let exists = false;
      for (let k = 0; k < common.length; k++) {
        if (common[k] === arr1[i]) exists = true;
      }
      if (!exists) common.push(arr1[i]);
    }
  }
  return common;
}
// console.log(level5task7([1, 2, 2, 3], [2, 3, 4]));

// 8. Print characters that are common in two strings.
function level5task8(str1, str2) {
  let arr1 = [], arr2 = [];
  for (let i = 0; i < str1.length; i++) arr1.push(str1[i]);
  for (let i = 0; i < str2.length; i++) arr2.push(str2[i]);
  let common = level5task7(arr1, arr2);
  let res = "";
  for (let i = 0; i < common.length; i++) res += common[i];
  return res;
}
// console.log(level5task8("hello", "world"));

// 9. Count how many prime numbers are there in an array.
function level5task9(arr) {
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
// console.log(level5task9([2, 3, 4, 5, 6, 7]));

// 10. Print all palindromic words from a sentence.
function level5task10(str) {
  let words = splitWords(str);
  let res = [];
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    let rev = "";
    for (let j = w.length - 1; j >= 0; j--) rev += w[j];
    if (w.toLowerCase() === rev.toLowerCase()) res.push(w);
  }
  return res;
}
// console.log(level5task10("Hey radar speak to noon"));