// Master Your logic - file by CodeWithNishchal

// GOAL: Develop logical decomposition and base-condition thinking.

// *********************************
// Level 1. Foundation of Recursion
// *********************************

// 1. Print numbers from 1 to n using recursion.
function level1task1(n, current = 1, result = []) {
  if (current > n) return result;
  result.push(current);
  return level1task1(n, current + 1, result);
}
// console.log(level1task1(5));

// 2. Print numbers from n down to 1 using recursion.
function level1task2(n, result = []) {
  if (n < 1) return result;
  result.push(n);
  return level1task2(n - 1, result);
}
// console.log(level1task2(5));

// 3. Print only even numbers from 1 to n recursively.
function level1task3(n, current = 2, result = []) {
  if (current > n) return result;
  result.push(current);
  return level1task3(n, current + 2, result);
}
// console.log(level1task3(10));

// 4. Print only odd numbers from 1 to n recursively.
function level1task4(n, current = 1, result = []) {
  if (current > n) return result;
  result.push(current);
  return level1task4(n, current + 2, result);
}
// console.log(level1task4(10));

// 5. Print sum of first n natural numbers recursively.
function level1task5(n) {
  if (n <= 0) return 0;
  return n + level1task5(n - 1);
}
// console.log(level1task5(5));

// 6. Print factorial of a number recursively.
function level1task6(n) {
  if (n <= 1) return 1;
  return n * level1task6(n - 1);
}
// console.log(level1task6(5));

// 7. Calculate power of a number (xⁿ) using recursion.
function level1task7(x, n) {
  if (n === 0) return 1;
  return x * level1task7(x, n - 1);
}
// console.log(level1task7(2, 4));

// 8. Find nth Fibonacci number recursively.
function level1task8(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return level1task8(n - 1) + level1task8(n - 2);
}
// console.log(level1task8(6));

// 9. Print Fibonacci series up to n terms recursively.
function level1task9(n, current = 0, result = []) {
  if (current >= n) return result;
  result.push(level1task8(current));
  return level1task9(n, current + 1, result);
}
// console.log(level1task9(6));

// 10. Find sum of digits of a number recursively.
function level1task10(n) {
  let num = Math.abs(n);
  if (num === 0) return 0;
  return (num % 10) + level1task10(Math.floor(num / 10));
}
// console.log(level1task10(1234));


// ****************************************
// Level 2: Number-based Recursive Thinking
// ****************************************

// 1. Count the number of digits in a number recursively.
function level2task1(n) {
  let num = Math.abs(n);
  if (num === 0) return 1;
  if (num < 10) return 1;
  return 1 + level2task1(Math.floor(num / 10));
}
// console.log(level2task1(98765));

// 2. Reverse a number recursively.
function level2task2(n, rev = 0) {
  if (n === 0) return rev;
  return level2task2(Math.floor(n / 10), rev * 10 + (n % 10));
}
// console.log(level2task2(1234));

// 3. Check if a number is a palindrome using recursion.
function level2task3(n) {
  if (n < 0) return false;
  return n === level2task2(n);
}
// console.log(level2task3(121));

// 4. Find product of digits of a number recursively.
function level2task4(n) {
  let num = Math.abs(n);
  if (num === 0) return 1;
  if (num < 10) return num;
  return (num % 10) * level2task4(Math.floor(num / 10));
}
// console.log(level2task4(234));

// 5. Find GCD (HCF) of two numbers using Euclid’s algorithm recursively.
function level2task5(a, b) {
  if (b === 0) return Math.abs(a);
  return level2task5(b, a % b);
}
// console.log(level2task5(24, 36));

// 6. Convert a number to binary recursively.
function level2task6(n) {
  if (n === 0) return "";
  return level2task6(Math.floor(n / 2)) + (n % 2);
}
// console.log(level2task6(10));

// 7. Print digits of a number in words recursively.
function level2task7(n) {
  const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let num = Math.abs(n);
  if (num < 10) return words[num];
  return level2task7(Math.floor(num / 10)) + " " + words[num % 10];
}
// console.log(level2task7(123));

// 8. Calculate the sum of first n even numbers recursively.
function level2task8(n) {
  if (n <= 0) return 0;
  return (2 * n) + level2task8(n - 1);
}
// console.log(level2task8(4));

// 9. Calculate the sum of first n odd numbers recursively.
function level2task9(n) {
  if (n <= 0) return 0;
  return ((2 * n) - 1) + level2task9(n - 1);
}
// console.log(level2task9(4));

// 10. Find nCr (Combination formula) recursively using Pascal’s relation.
function level2task10(n, r) {
  if (r === 0 || r === n) return 1;
  return level2task10(n - 1, r - 1) + level2task10(n - 1, r);
}
// console.log(level2task10(5, 2));


// ************************************
// Level 3: Pattern & Printing Problems
// ************************************

// 1. Print a line of n stars recursively.
function level3task1(n) {
  if (n <= 0) return "";
  return "*" + level3task1(n - 1);
}
// console.log(level3task1(5));

// 2. Print a square of stars recursively (n×n).
function level3task2(n, current = n) {
  if (current <= 0) return [];
  let row = level3task1(n);
  return [row, ...level3task2(n, current - 1)];
}
// console.log(level3task2(3));

// 3. Print a triangle of stars recursively (top-down).
function level3task3(n) {
  if (n <= 0) return [];
  return [...level3task3(n - 1), level3task1(n)];
}
// console.log(level3task3(3));

// 4. Print a triangle of stars recursively (bottom-up).
function level3task4(n, current = 1) {
  if (current > n) return [];
  return [level3task1(current), ...level3task4(n, current + 1)];
}
// console.log(level3task4(3));

// 5. Print pattern of numbers recursively (1 to n each row).
function level3task5(n, current = 1) {
  if (current > n) return [];
  let line = "";
  for (let i = 1; i <= current; i++) line += i;
  return [line, ...level3task5(n, current + 1)];
}
// console.log(level3task5(4));

// 6. Print reverse triangle pattern recursively.
function level3task6(n) {
  if (n <= 0) return [];
  return [level3task1(n), ...level3task6(n - 1)];
}
// console.log(level3task6(3));

// 7. Print multiplication table of n recursively.
function level3task7(n, i = 1, result = []) {
  if (i > 10) return result;
  result.push(`${n}x${i}=${n * i}`);
  return level3task7(n, i + 1, result);
}
// console.log(level3task7(3));

// 8. Print numbers in increasing and decreasing order in same function.
function level3task8(n, current = 1, result = []) {
  if (current > n) return result;
  result.push(current);
  level3task8(n, current + 1, result);
  if (current < n) result.push(current);
  return result;
}
// console.log(level3task8(3));

// 9. Print sum of series 1 + 2 + 3 + ... + n recursively and display each step.
function level3task9(n) {
  if (n <= 1) return { sum: 1, steps: [1] };
  let prev = level3task9(n - 1);
  return { sum: prev.sum + n, steps: [...prev.steps, prev.sum + n] };
}
// console.log(level3task9(4));

// 10. Print pattern of characters (A, AB, ABC, ...) recursively.
function level3task10(n, current = 1) {
  if (current > n) return [];
  let line = "";
  for (let i = 0; i < current; i++) {
    line += String.fromCharCode(65 + i);
  }
  return [line, ...level3task10(n, current + 1)];
}
// console.log(level3task10(3));


// *******************************
// Level 4: String-based Recursion
// *******************************

// 1. Reverse a string using recursion.
function level4task1(str) {
  if (str === "") return "";
  return level4task1(str.slice(1)) + str[0];
}
// console.log(level4task1("hello"));

// 2. Check if a string is palindrome using recursion.
function level4task2(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return level4task2(str.slice(1, -1));
}
// console.log(level4task2("radar"));

// 3. Count vowels in a string recursively.
function level4task3(str) {
  if (str === "") return 0;
  const isVowel = "AEIOUaeiou".includes(str[0]) ? 1 : 0;
  return isVowel + level4task3(str.slice(1));
}
// console.log(level4task3("recursion"));

// 4. Remove all spaces from a string recursively.
function level4task4(str) {
  if (str === "") return "";
  const char = str[0] === " " ? "" : str[0];
  return char + level4task4(str.slice(1));
}
// console.log(level4task4("a b c"));

// 5. Replace all occurrences of a character (say ‘a’ → ‘x’) recursively.
function level4task5(str, target = 'a', replacement = 'x') {
  if (str === "") return "";
  const char = str[0] === target ? replacement : str[0];
  return char + level4task5(str.slice(1), target, replacement);
}
// console.log(level4task5("banana", 'a', 'x'));

// 6. Remove all occurrences of a character from a string recursively.
function level4task6(str, target = 'a') {
  if (str === "") return "";
  const char = str[0] === target ? "" : str[0];
  return char + level4task6(str.slice(1), target);
}
// console.log(level4task6("banana", 'a'));

// 7. Print all characters of a string one by one recursively.
function level4task7(str, result = []) {
  if (str === "") return result;
  result.push(str[0]);
  return level4task7(str.slice(1), result);
}
// console.log(level4task7("cat"));

// 8. Print the string in reverse order recursively (without using loops).
function level4task8(str) {
  return level4task1(str);
}
// console.log(level4task8("code"));

// 9. Convert a string to uppercase recursively.
function level4task9(str) {
  if (str === "") return "";
  return str[0].toUpperCase() + level4task9(str.slice(1));
}
// console.log(level4task9("hello"));

// 10. Count consonants and vowels separately using recursion.
function level4task10(str) {
  if (str === "") return { vowels: 0, consonants: 0 };
  const lower = str[0].toLowerCase();
  const rest = level4task10(str.slice(1));
  if (lower >= 'a' && lower <= 'z') {
    if ("aeiou".includes(lower)) {
      return { vowels: rest.vowels + 1, consonants: rest.consonants };
    } else {
      return { vowels: rest.vowels, consonants: rest.consonants + 1 };
    }
  }
  return rest;
}
// console.log(level4task10("hello"));