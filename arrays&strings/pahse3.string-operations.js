// *******************
// 1: Basic Operations
// *******************

// Access character at index
function task1_0(str, index) {
  return str[index];
}
// console.log(task1_0("hello", 1));

// Find string length
function task1_1(str) {
  let len = 0;
  while (str[len] !== undefined) {
    len++;
  }
  return len;
}
// console.log(task1_1("hello"));

// Traverse the string
function task1_2(str) {
  let res = [];
  for (let i = 0; i < task1_1(str); i++) {
    res[res.length] = str[i];
  }
  return res;
}
// console.log(task1_2("abc"));

// Compare two strings
function task1_3(str1, str2) {
  if (str1 < str2) return -1;
  if (str1 > str2) return 1;
  return 0;
}
// console.log(task1_3("abc", "def"));

// ********************
// 2: Insert Operations
// ********************

// Append at the end
function task2_0(str, char) {
  return str + char;
}
// console.log(task2_0("hello", "!"));

// Insert at a given index
function task2_1(str, index, char) {
  let res = "";
  for (let i = 0; i < task1_1(str); i++) {
    if (i === index) res += char;
    res += str[i];
  }
  if (index >= task1_1(str)) res += char;
  return res;
}
// console.log(task2_1("helo", 2, "l"));

// Prepend at the beginning
function task2_2(str, char) {
  return char + str;
}
// console.log(task2_2("world", "hello "));

// ********************
// 3: Delete Operations
// ********************

// Remove at a given index
function task3_0(str, index) {
  let res = "";
  for (let i = 0; i < task1_1(str); i++) {
    if (i !== index) res += str[i];
  }
  return res;
}
// console.log(task3_0("hello", 2));

// Remove a substring
function task3_1(str, start, end) {
  let res = "";
  for (let i = 0; i < task1_1(str); i++) {
    if (i < start || i >= end) res += str[i];
  }
  return res;
}
// console.log(task3_1("hello world", 5, 11));

// Remove all occurrences of a character
function task3_2(str, char) {
  let res = "";
  for (let i = 0; i < task1_1(str); i++) {
    if (str[i] !== char) res += str[i];
  }
  return res;
}
// console.log(task3_2("banana", "a"));

// ********************
// 4: Search Operations
// ********************

// Find a character
function task4_0(str, char) {
  for (let i = 0; i < task1_1(str); i++) {
    if (str[i] === char) return i;
  }
  return -1;
}
// console.log(task4_0("hello", "e"));

// Find a substring using indexOf
function task4_1(str, sub) {
  let strLen = task1_1(str);
  let subLen = task1_1(sub);
  if (subLen === 0) return 0;
  for (let i = 0; i <= strLen - subLen; i++) {
    let match = true;
    for (let j = 0; j < subLen; j++) {
      if (str[i + j] !== sub[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}
// console.log(task4_1("hello world", "world"));

// Count occurrences of a character
function task4_2(str, char) {
  let count = 0;
  for (let i = 0; i < task1_1(str); i++) {
    if (str[i] === char) count++;
  }
  return count;
}
// console.log(task4_2("banana", "a"));

// Count occurrences of a substring
function task4_3(str, sub) {
  let count = 0;
  let subLen = task1_1(sub);
  if (subLen === 0) return 0;
  let idx = task4_1(str, sub);
  while (idx !== -1) {
    count++;
    str = task3_1(str, 0, idx + subLen);
    idx = task4_1(str, sub);
  }
  return count;
}
// console.log(task4_3("abababab", "ab"));

// ******************************
// 5: Update / Replace Operations
// ******************************

// Replace a character at index
function task5_0(str, index, char) {
  let res = "";
  for (let i = 0; i < task1_1(str); i++) {
    if (i === index) res += char;
    else res += str[i];
  }
  return res;
}
// console.log(task5_0("hello", 1, "a"));

// Replace all occurrences of a character or substring
function task5_1(str, target, replacement) {
  let res = "";
  let strLen = task1_1(str);
  let tarLen = task1_1(target);
  if (tarLen === 0) return str;
  for (let i = 0; i < strLen; i++) {
    let match = true;
    for (let j = 0; j < tarLen; j++) {
      if (str[i + j] !== target[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      res += replacement;
      i += tarLen - 1;
    } else {
      res += str[i];
    }
  }
  return res;
}
// console.log(task5_1("banana", "an", "ux"));

// Replace the first occurrence
function task5_2(str, target, replacement) {
  let idx = task4_1(str, target);
  if (idx === -1) return str;
  let tarLen = task1_1(target);
  let left = task3_1(str, idx, task1_1(str));
  let right = task3_1(str, 0, idx + tarLen);
  return left + replacement + right;
}
// console.log(task5_2("banana", "an", "ux"));

// *********************
// 6: Reverse Operations
// *********************

// Reverse the full string
function task6_0(str) {
  let res = "";
  for (let i = task1_1(str) - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}
// console.log(task6_0("hello"));

// Reverse words in a sentence
function task6_1(str) {
  let words = task8_0(str, " ");
  let res = [];
  for (let i = words.length - 1; i >= 0; i--) {
    res[res.length] = words[i];
  }
  return task8_1(res, " ");
}
// console.log(task6_1("hello world code"));

// Reverse each word individually
function task6_2(str) {
  let words = task8_0(str, " ");
  for (let i = 0; i < words.length; i++) {
    words[i] = task6_0(words[i]);
  }
  return task8_1(words, " ");
}
// console.log(task6_2("hello world"));

// ***************************
// 7: Case and Trim Operations
// ***************************

// Convert to uppercase
function task7_0(str) {
  let res = "";
  for (let i = 0; i < task1_1(str); i++) {
    let code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      res += String.fromCharCode(code - 32);
    } else {
      res += str[i];
    }
  }
  return res;
}
// console.log(task7_0("hello"));

// Convert to lowercase
function task7_1(str) {
  let res = "";
  for (let i = 0; i < task1_1(str); i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      res += String.fromCharCode(code + 32);
    } else {
      res += str[i];
    }
  }
  return res;
}
// console.log(task7_1("HELLO"));

// Trim leading and trailing spaces
function task7_2(str) {
  let start = 0;
  let end = task1_1(str) - 1;
  while (str[start] === " ") start++;
  while (str[end] === " ") end--;
  return task3_1(str, end + 1, task1_1(str)).slice(start);
}
// console.log(task7_2("   hello   "));

// Remove all spaces
function task7_3(str) {
  return task3_2(str, " ");
}
// console.log(task7_3("h e l l o"));

// **************************
// 8: Split / Join Operations
// **************************

// Split by delimiter
function task8_0(str, delimiter) {
  let res = [];
  let current = "";
  let strLen = task1_1(str);
  let delLen = task1_1(delimiter);
  if (delLen === 0) return task8_2(str);
  for (let i = 0; i < strLen; i++) {
    let match = true;
    for (let j = 0; j < delLen; j++) {
      if (str[i + j] !== delimiter[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      res[res.length] = current;
      current = "";
      i += delLen - 1;
    } else {
      current += str[i];
    }
  }
  res[res.length] = current;
  return res;
}
// console.log(task8_0("a,b,c", ","));

// Join an array of strings
function task8_1(arr, delimiter) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
    if (i < arr.length - 1) res += delimiter;
  }
  return res;
}
// console.log(task8_1(["a", "b", "c"], "-"));

// Split into individual characters
function task8_2(str) {
  return task1_2(str);
}
// console.log(task8_2("abc"));

// *******************************
// 9: Substring / Slice Operations
// *******************************

// Substring from i to j
function task9_0(str, i, j) {
  let res = "";
  for (let k = i; k < j && k < task1_1(str); k++) {
    res += str[k];
  }
  return res;
}
// console.log(task9_0("hello", 1, 4));

// Prefix extraction
function task9_1(str, len) {
  return task9_0(str, 0, len);
}
// console.log(task9_1("hello", 3));

// Suffix extraction
function task9_2(str, len) {
  let strLen = task1_1(str);
  return task9_0(str, strLen - len, strLen);
}
// console.log(task9_2("hello", 3));

// *******************************
// 10: Check / Validate Operations
// *******************************

// Utility reference for local validation length check inside tasks
function task11(s) { return task11_len(s); }
function task11_len(s) {
  let l = 0;
  while (s[l] !== undefined) l++;
  return l;
}

// Check palindrome
function task10_0(str) {
  return str === task6_0(str);
}
// console.log(task10_0("radar"));

// Check anagram
function task10_1(str1, str2) {
  if (task11(str1) !== task11(str2)) return false;
  let arr2 = [];
  for (let i = 0; i < task11(str2); i++) arr2[arr2.length] = false;
  for (let i = 0; i < task11(str1); i++) {
    let matched = false;
    for (let j = 0; j < task11(str2); j++) {
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
// console.log(task10_1("listen", "silent"));

// Check starts with
function task10_2(str, prefix) {
  let preLen = task11(prefix);
  if (preLen > task11(str)) return false;
  return task9_0(str, 0, preLen) === prefix;
}
// console.log(task10_2("hello", "he"));

// Check ends with
function task10_3(str, suffix) {
  let sufLen = task11(suffix);
  let strLen = task11(str);
  if (sufLen > strLen) return false;
  return task9_0(str, strLen - sufLen, strLen) === suffix;
}
// console.log(task10_3("hello", "lo"));

// Check whether it contains a substring
function task10_4(str, sub) {
  return task4_1(str, sub) !== -1;
}
// console.log(task10_4("hello world", "orl"));