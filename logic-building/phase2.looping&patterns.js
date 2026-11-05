// GOAL: Master loops, iteration, and dry-run thinking.

// **********************
// Level 1: Basic Looping
// **********************

// 1. Print numbers from 1 to 10.
function level1task1() {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(i);
  }
  return result;
}
// console.log(level1task1());

// 2. Print all even numbers between 1 and 100.
function level1task2() {
  let result = [];
  for (let i = 2; i <= 100; i += 2) {
    result.push(i);
  }
  return result;
}
// console.log(level1task2());

// 3. Print all odd numbers between 1 and 100.
function level1task3() {
  let result = [];
  for (let i = 1; i <= 100; i += 2) {
    result.push(i);
  }
  return result;
}
// console.log(level1task3());

// 4. Print numbers from 10 down to 1.
function level1task4() {
  let result = [];
  for (let i = 10; i >= 1; i--) {
    result.push(i);
  }
  return result;
}
// console.log(level1task4());

// 5. Print the table of a given number (n × 1 to n × 10).
function level1task5(n) {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(`${n}x${i}=${n * i}`);
  }
  return result;
}
// console.log(level1task5(5));

// 6. Print the sum of first n natural numbers.
function level1task6(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// console.log(level1task6(5), level1task6(10));

// 7. Print the sum of all even numbers up to n.
function level1task7(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}
// console.log(level1task7(10));

// 8. Print the sum of all odd numbers up to n.
function level1task8(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}
// console.log(level1task8(10));

// 9. Print the factorial of a given number.
function level1task9(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
// console.log(level1task9(5), level1task9(0));

// 10. Print the product of digits of a given number.
function level1task10(n) {
  let num = Math.abs(n);
  if (num === 0) return 0;
  let prod = 1;
  while (num > 0) {
    prod *= (num % 10);
    num = Math.floor(num / 10);
  }
  return prod;
}
// console.log(level1task10(234), level1task10(502));


// ***********************************
// Level 2: Number-based Looping Logic
// ***********************************

// 1. Count the number of digits in a given number.
function level2task1(n) {
  let num = Math.abs(n);
  if (num === 0) return 1;
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}
// console.log(level2task1(12345), level2task1(0));

// 2. Print the reverse of a given number.
function level2task2(n) {
  let num = Math.abs(n);
  let rev = 0;
  while (num > 0) {
    rev = (rev * 10) + (num % 10);
    num = Math.floor(num / 10);
  }
  return n < 0 ? -rev : rev;
}
// console.log(level2task2(987), level2task2(-456));

// 3. Check if a number is a palindrome.
function level2task3(n) {
  return n === level2task2(n);
}
// console.log(level2task3(121), level2task3(123));

// 4. Find the sum of digits of a number.
function level2task4(n) {
  let num = Math.abs(n);
  let sum = 0;
  while (num > 0) {
    sum += (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
}
// console.log(level2task4(543));

// 5. Check if a number is an Armstrong number.
function level2task5(n) {
  let num = Math.abs(n);
  let temp = num;
  let digits = level2task1(num);
  let sum = 0;
  while (temp > 0) {
    sum += Math.pow(temp % 10, digits);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}
// console.log(level2task5(153), level2task5(123));

// 6. Check if a number is a perfect number.
function level2task6(n) {
  if (n <= 1) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if(i*i === n) return true;
  }
  return false;
}
// console.log(level2task6(4), level2task6(12));

// 7. Print all prime numbers between 1 and 100.
function level2task7() {
  let primes = [];
  for (let i = 2; i <= 100; i++) {
    if (level2task8(i)) primes.push(i);
  }
  return primes;
}
// console.log(level2task7());

// 8. Check if a number is prime or not.
function level2task8(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
// console.log(level2task8(7), level2task8(4));

// 9. Print Fibonacci series up to n terms.
function level2task9(n) {
  if (n <= 0) return [];
  if (n === 1) return;
  let series = [0,1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
}
// console.log(level2task9(6));

// 10. Print sum of first n terms of Fibonacci series.
function level2task10(n) {
  let series = level2task9(n);
  let sum = 0;
  for (let i = 0; i < series.length; i++) {
    sum += series[i];
  }
  return sum;
}
// console.log(level2task10(6));


// ****************************************
// Level 3: Mathematical & Logical Patterns
// ****************************************

// 1. Print the squares of numbers from 1 to n.
function level3task1(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i * i);
  }
  return result;
}
// console.log(level3task1(5));

// 2. Print cubes of numbers from 1 to n.
function level3task2(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i * i * i);
  }
  return result;
}
// console.log(level3task2(5));

// 3. Print all numbers between a and b divisible by 7.
function level3task3(a, b) {
  let result = [];
  let start = Math.min(a, b);
  let end = Math.max(a, b);
  for (let i = start; i <= end; i++) {
    if (i % 7 === 0) result.push(i);
  }
  return result;
}
// console.log(level3task3(10, 30));

// 4. Find HCF (GCD) of two numbers using loops.
function level3task4(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
// console.log(level3task4(24, 36));

// 5. Find LCM of two numbers using loops.
function level3task5(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / level3task4(a, b);
}
// console.log(level3task5(24, 36));

// 6. Print all factors of a given number.
function level3task6(n) {
  let factors = [];
  let absN = Math.abs(n);
  for (let i = 1; i <= absN; i++) {
    if (absN % i === 0) factors.push(i);
  }
  return factors;
}
// console.log(level3task6(12));

// 7. Find the sum of all factors of a number.
function level3task7(n) {
  let factors = level3task6(n);
  let sum = 0;
  for (let i = 0; i < factors.length; i++) {
    sum += factors[i];
  }
  return sum;
}
// console.log(level3task7(12));

// 8. Check if a number is a strong number (sum of factorials of digits = number).
function level3task8(n) {
  let num = Math.abs(n);
  let temp = num;
  let sum = 0;
  while (temp > 0) {
    sum += level1task9(temp % 10);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}
// console.log(level3task8(145), level3task8(123));

// 9. Print first n terms of an arithmetic progression (a, d).
function level3task9(a, d, n) {
  let terms = [];
  for (let i = 0; i < n; i++) {
    terms.push(a + (i * d));
  }
  return terms;
}
// console.log(level3task9(2, 3, 5));

// 10. Print first n terms of a geometric progression (a, r).
function level3task10(a, r, n) {
  let terms = [];
  for (let i = 0; i < n; i++) {
    terms.push(a * Math.pow(r, i));
  }
  return terms;
}
// console.log(level3task10(2, 3, 5));


// **********************************
// Level 5: Logical Loop Combinations
// **********************************

// 1. Print all numbers whose sum of digits is even (1–100).
function level5task1() {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    if (level2task4(i) % 2 === 0) result.push(i);
  }
  return result;
}
// console.log( level5task1());

// 2. Count how many numbers between 1–500 are divisible by 7 but not by 5.
function level5task2() {
  let count = 0;
  for (let i = 1; i <= 500; i++) {
    if (i % 7 === 0 && i % 5 !== 0) count++;
  }
  return count;
}
// console.log(level5task2());

// 3. Print all numbers that are palindromes between 1–500.
function level5task3() {
  let result = [];
  for (let i = 1; i <= 500; i++) {
    if (level2task3(i)) result.push(i);
  }
  return result;
}
// console.log(level5task3());

// 4. Print numbers between 1–100 whose digits add up to a multiple of 3.
function level5task4() {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    if (level2task4(i) % 3 === 0) result.push(i);
  }
  return result;
}
// console.log(level5task4());

// 5. Find the smallest and largest digit in a given number.
function level5task5(n) {
  let num = Math.abs(n);
  if (num === 0) return { smallest: 0, largest: 0 };
  let smallest = 0;
  let largest = 0;
  while (num > 0) {
    let digit = num % 10;
    if (digit < smallest) smallest = digit;
    if (digit > largest) largest = digit;
    num = Math.floor(num / 10);
  }
  return { smallest, largest };
}
// console.log(level5task5(4819));

// 6. Print all numbers from 1–n whose binary representation has an even number of 1s.
function level5task6(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let temp = i;
    let onesCount = 0;
    while (temp > 0) {
      if (temp % 2 === 1) onesCount++;
      temp = Math.floor(temp / 2);
    }
    if (onesCount % 2 === 0) result.push(i);
  }
  return result;
}
// console.log(level5task6(10));

// 7. Print a pattern where each row i prints i*i.
function level5task7(rows) {
  let result = [];
  for (let i = 1; i <= rows; i++) {
    result.push(i * i);
  }
  return result;
}
// console.log(level5task7(4));

// 8. Print factorial of each number from 1 to n.
function level5task8(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(level1task9(i));
  }
  return result;
}
// console.log(level5task8(5));

// 9. Print the sum of all odd digits and even digits separately in a number.
function level5task9(n) {
  let num = Math.abs(n);
  let oddSum = 0;
  let evenSum = 0;
  if (num === 0) evenSum = 0;
  while (num > 0) {
    let digit = num % 10;
    if (digit % 2 === 0) evenSum += digit;
    else oddSum += digit;
    num = Math.floor(num / 10);
  }
  return { oddSum, evenSum };
}
// console.log(level5task9(12345));

// 10. Take 5 numbers as input. If the user enters 0, skip it using continue. At the end, print the sum of all non-zero numbers.
function level5task10(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      continue;
    }
    sum += arr[i];
  }
  return sum;
}
// console.log(level5task10([1, 0, 3, 0, 5]));