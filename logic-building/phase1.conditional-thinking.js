// Master Your logic - file by CodeWithNishchal

// GOAL: Understand how to make decisions using conditions.

// **************************
// Level 1: Simple Conditions
// **************************

// 1. Take a number and print whether it’s positive, negative, or zero.
function level1task1(n) {
  if (n < 0) {
    return "Negative";
  } else if (n > 0) {
    return "Positive";
  } else {
    return "Zero";
  }
};
// console.log(level1task1(10), level1task1(-10), level1task1(0));

// 2. Check if a number is even or odd.
function level1task2(n) {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
// console.log(level1task2(6), level1task2(7));

// 3. Check if a number is divisible by 5.
function level1task3(n) {
  if (n % 5 === 0) {
    return true;
  } else {
    return false;
  }
};
// console.log(level1task3(10), level1task3(3));

// 4. Check if a number is divisible by both 3 and 5.
function level1task4(n) {
  if ((n % 5 === 0) && (n % 3 === 0)) {
    return true;
  } else {
    return false;
  }
};
// console.log(level1task4(15), level1task4(9));

// 5. Check if a given year is a leap year.
function level1task5(n) {
  if ((n % 400 === 0) || (n % 100 !== 0 && n % 4 === 0)) {
    return true;
  } else {
    return false;
  }
};
// console.log(level1task5(2004), level1task5(2002));

// 6. Take two numbers and print the larger one.
function level1task6(n, m) {
  if (n > m) {
    return n;
  } else {
    return m;
  }
};
// console.log(level1task6(15, 6), level1task6(6, 9));

// 7. Take three numbers and print the largest.
function level1task7(n, m, o) {
  if ((n > m) && (n > o)) {
    return n;
  } else if ((m > n) && (m > o)) {
    return m;
  } else {
    return o;
  }
};
// console.log(level1task7(1, 5, 2), level1task7(9, 4, 6));

// 8. Take a temperature value and print “Cold”, “Warm”, or “Hot” using range conditions.
function level1task8(n) {
  if (n < 15) {
    return "Cold";
  } else if (n >= 15 && n <= 30) {
    return "Warm";
  } else {
    return "Hot";
  }
};
// console.log(level1task8(15), level1task8(9), level1task8(33));

// 9. Take a character and check if it’s a vowel or consonant.
function level1task9(n) {
  if ("AEIOUaeiou".includes(n)) {
    return "Vowel";
  } else {
    return "Consonant";
  }
};
// console.log(level1task9("U"), level1task9("z"));

// 10. Take a character and check whether it’s uppercase, lowercase, a digit, or a special character.
function level1task10(n) {
  if ((n >= "A") && (n <= "Z")) {
    return "UpperCase";
  } else if ((n >= 'a') && (n <= 'z')) {
    return "LowerCase";
  } else if ((n >= '0') && (n <= '9')) {
    return "Digit";
  } else {
    return "Special character";
  }
};
// console.log(level1task10("A"), level1task10("a"), level1task10(9), level1task10("*"));

// ****************************************
// Level 2: Nested If & Multiple Conditions
// ****************************************

// 1. Take three sides and check if they form a valid triangle.
function level2task1(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
};
// console.log(level2task1(2, 4, 2), level2task1(2, 3, 4));

// 2. If the sides form a valid triangle, determine whether it is equilateral, isosceles, or scalene.
function level2task2(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      return "Equilateral";
    } else if (a === b || b === c || a === c) {
      return "Isosceles";
    } else {
      return "Scalene";
    }
  } else {
    return "Invalid Triangle";
  }
};
// console.log(level2task2(2, 2, 2), level2task2(2, 3, 4));

// 3. Take marks (0–100) and print the corresponding grade (A/B/C/D/F).
function level2task3(marks) {
  if (marks >= 90) return "A";
  else if (marks >= 80) return "B";
  else if (marks >= 70) return "C";
  else if (marks >= 60) return "D";
  else return "F";
};
// console.log(level2task3(22), level2task3(89));

// 4. Check if one of two given numbers is a multiple of the other.
function level2task4(n, m) {
  if (n % m === 0 || m % n === 0) {
    return true;
  } else {
    return false;
  }
};
// console.log(level2task4(2, 4), level2task4(2, 3));

// 5. Take the hour of the day (0–23) and print “Good Morning”, “Good Afternoon”, “Good Evening”, or “Good Night”.
function level2task5(hour) {
  if (hour >= 5 && hour < 12) return "Good Morning";
  else if (hour >= 12 && hour < 17) return "Good Afternoon";
  else if (hour >= 17 && hour < 21) return "Good Evening";
  else return "Good Night";
};
// console.log(level2task5(12), level2task5(22));

// 6. Check voting eligibility for a given age (18+).
function level2task6(age) {
  if (age >= 18) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
};
// console.log(level2task6(20), level2task6(4));

// 7. Take two numbers and determine whether both are even, both are odd, or one is even and one is odd.
function level2task7(n, m) {
  if (n % 2 === 0 && m % 2 === 0) {
    return "Both are even";
  } else if (n % 2 !== 0 && m % 2 !== 0) {
    return "Both are odd";
  } else {
    return "One is even and one is odd";
  }
};
// console.log(level2task7(2, 4), level2task7(3, 4));

// 8. Take an alphabet character and check if it lies between ‘a’ and ‘m’ or ‘n’ and ‘z’.
function level2task8(char) {
  if (char >= 'a' && char <= 'm') {
    return "Between a and m";
  } else if (char >= 'n' && char <= 'z') {
    return "Between n and z";
  }
};
// console.log(level2task8("q"), level2task8("c"));

// 9. Take a day number (1–7) and print the corresponding day name.
function level2task9(dayNum) {
  if (dayNum === 1) return "Monday";
  else if (dayNum === 2) return "Tuesday";
  else if (dayNum === 3) return "Wednesday";
  else if (dayNum === 4) return "Thursday";
  else if (dayNum === 5) return "Friday";
  else if (dayNum === 6) return "Saturday";
  else if (dayNum === 7) return "Sunday";
  else return "Invalid Day";
};
// console.log(level2task9(7), level2task9(2));

// 10. Take a month number (1–12) and print the number of days in that month (ignore leap years).
function level2task10(monthNum) {
  if (monthNum === 2) {
    return 28;
  } else if (monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11) {
    return 30;
  } else {
    return 31;
  }
};
// console.log(level2task10(2), level2task10(11));

// ******************************
// Level 3: Math and Number Logic
// ******************************

// 1. Take a 3-digit number and check if all digits are distinct.
function level3task1(n) {
  let d1 = Math.floor(n / 100);
  let d2 = Math.floor((n % 100) / 10);
  let d3 = n % 10;
  if (d1 !== d2 && d2 !== d3 && d1 !== d3) {
    return true;
  } else {
    return false;
  }
};
// console.log(level3task1(245), level3task1(242));

// 2. Take a 3-digit number and determine if the middle digit is the largest, smallest, or neither.
function level3task2(n) {
  let d1 = Math.floor(n / 100);
  let d2 = Math.floor((n % 100) / 10);
  let d3 = n % 10;
  if (d2 > d1 && d2 > d3) {
    return "Largest";
  } else if (d2 < d1 && d2 < d3) {
    return "Smallest";
  } else {
    return "Neither";
  }
};
// console.log(level3task2(245), level3task2(242));

// 3. Take a 4-digit number and check if the first and last digits are equal.
function level3task3(n) {
  let firstDigit = Math.floor(n / 1000);
  let lastDigit = n % 10;
  if (firstDigit === lastDigit) {
    return true;
  } else {
    return false;
  }
};
// console.log(level3task3(2451), level3task3(2422));

// 4. Check whether a given integer is single-digit, double-digit, or multi-digit.
function level3task4(n) {
  let absN = Math.abs(n);
  if (absN >= 0 && absN <= 9) {
    return "Single-digit";
  } else if (absN >= 10 && absN <= 99) {
    return "Double-digit";
  } else {
    return "Multi-digit";
  }
};
// console.log(level3task4(24), level3task4(242));

// 5. Check if a number is a multiple of 7 or ends with 7.
function level3task5(n) {
  if (n % 7 === 0 || Math.abs(n) % 10 === 7) {
    return true;
  } else {
    return false;
  }
};
// console.log(level3task5(47), level3task5(24));

// 6. Take coordinates (x, y) and determine which quadrant the point lies in.
function level3task6(x, y) {
  if (x > 0 && y > 0) return "Quadrant 1";
  else if (x < 0 && y > 0) return "Quadrant 2";
  else if (x < 0 && y < 0) return "Quadrant 3";
  else if (x > 0 && y < 0) return "Quadrant 4";
  else return "On an Axis or Origin";
};
// console.log(level3task6(2, 5), level3task6(-2, -2));

// 7. Check if an amount can be evenly divided into 2000, 500, and 100 currency notes.
function level3task7(amount) {
  if (amount % 100 === 0 && amount >= 0) {
    return true;
  } else {
    return false;
  }
};
// console.log(level3task7(245), level3task7(200));

// 8. Check if a number lies within the range.
function level3task8(n) {
  if (n >= 100 && n <= 999) {
    return true;
  } else {
    return false;
  }
};
// console.log(level3task8(245), level3task8(2420));

// 9. Take two angles of a triangle and compute the third angle. Returns error if inputs are invalid.
function level3task9(a, b) {
  if (a > 0 && b > 0 && (a + b) < 180) {
    return 180 - (a + b);
  } else {
    return "Invalid angles given";
  }
};
// console.log(level3task9(24, 45), level3task9(2, -42));

// 10. Check whether a number is a perfect square (without using the square root function).
function level3task10(n) {
  if (n < 0) return false;
  if (n === 0 || n === 1) return true;
  let i = 1;
  while (i * i <= n) {
    if (i * i === n) {
      return true;
    }
    i++;
  }
  return false;
};
// console.log(level3task10(24), level3task10(49));

// ************************************************
// Level 4: Logical Operators & Compound Statements
// ************************************************

// 1. Take a character and check if it is a letter, a digit, or neither.
function level4task1(char) {
  if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
    return "Letter";
  } else if (char >= '0' && char <= '9') {
    return "Digit";
  } else {
    return "Neither";
  }
};
// console.log(level4task1("A"), level4task1(2), level4task1("&"));

// 2. Take a number and print “Fizz” if divisible by 3, “Buzz” if divisible by 5, and “FizzBuzz” if divisible by both.
function level4task2(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  }
};
// console.log(level4task2(3), level4task2(5), level4task2(15));

// 3. Take three numbers and print the median value (neither maximum nor minimum).
function level4task3(a, b, c) {
  if ((a >= b && a <= c) || (a <= b && a >= c)) return a;
  else if ((b >= a && b <= c) || (b <= a && b >= c)) return b;
  else return c;
};
// console.log(level4task3(2, 4, 8), level4task3(3 , 4, 4));

// 4. Take 24-hour time (hours and minutes) and print whether it is AM or PM.
function level4task4(hours, minutes) {
  if (hours >= 0 && hours < 12) {
    return "AM";
  } else if (hours >= 12 && hours < 24) {
    return "PM";
  } else {
    return "Invalid Time";
  }
};
// console.log(level4task4(13, 54), level4task4(2, 12));

// 5. Take income and age, and check if eligible for tax (age > 18 and income > 5 L).
function level4task5(age, income) {
  if (age > 18 && income > 500000) {
    return "Eligible for Tax";
  } else {
    return "Not Eligible for Tax";
  }
};
// console.log(level4task5(45, 524621), level4task5(23, 9474));

// 6. Take two numbers and check if both are positive and their sum is less than 100.
function level4task6(n, m) {
  if (n > 0 && m > 0 && (n + m < 100)) {
    return true;
  } else {
    return false;
  }
};
// console.log(level4task6(45, 5), level4task6(92, 71));

// 7. Take a single digit (0–9) and print its word form (“Zero” to “Nine”).
function level4task7(digit) {
  let words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  if (digit >= 0 && digit <= 9) {
    return words[digit];
  } else {
    return "Not a single digit";
  }
};
// console.log(level4task7(6), level4task7(2));

// 8. Take a weekday number (1–7) and determine if it is a weekday or weekend.
function level4task8(dayNum) {
  if (dayNum >= 1 && dayNum <= 5) {
    return "Weekday";
  } else if (dayNum === 6 || dayNum === 7) {
    return "Weekend";
  } else {
    return "Invalid Day Number";
  }
};
// console.log(level4task8(6), level4task8(2));

// 9. Take electricity units consumed and calculate the bill as per slabs (using if-else).
// Using default generic slab rules: units 0-100 ($1), 101-200 ($2), >200 ($3).
function level4task9(units) {
  let bill = 0;
  if (units <= 100) {
    bill = units * 1.0;
  } else if (units <= 200) {
    bill = (100 * 1.0) + ((units - 100) * 2.0);
  } else {
    bill = (100 * 1.0) + (100 * 2.0) + ((units - 200) * 3.0);
  }
  return bill;
};
// console.log(level4task9(80), level4task9(200));

// 10. Take password string and check basic rules (length ≥ 8 and contains at least one digit).
function level4task10(password) {
  let hasDigit = false;
  if (password.length >= 8) {
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= '0' && password[i] <= '9') {
        hasDigit = true;
        break;
      }
    }
  }
  return hasDigit;
};
// console.log(level4task10("Aiweb73nnd"), level4task10("7jdh"));

// ********************************************
// Level 5: Creative / Tricky Logical Scenarios
// ********************************************

// 1. Take coordinates (x, y) and check if the point lies on the X-axis, Y-axis, or at the origin.
function level5task1(x, y) {
  if (x === 0 && y === 0) return "Origin";
  else if (x === 0) return "Y-axis";
  else if (y === 0) return "X-axis";
  else return "In a quadrant";
};
// console.log(level5task1(0, 4), level5task1(5, 8));

// 2. Take three numbers and check if they can form a Pythagorean triplet.
function level5task2(a, b, c) {
  let sqA = a * a;
  let sqB = b * b;
  let sqC = c * c;
  if (sqA + sqB === sqC || sqA + sqC === sqB || sqB + sqC === sqA) {
    return true;
  } else {
    return false;
  }
};
// console.log(level5task2(2, 2, 4));

// 3. Take day and month and check if it forms a valid calendar date (ignoring leap years).
function level5task3(day, month) {
  if (month < 1 || month > 12 || day < 1) return false;
  let maxDays = 31;
  if (month === 2) maxDays = 28;
  else if (month === 4 || month === 6 || month === 9 || month === 11) maxDays = 30;
  return day <= maxDays;
};
// console.log(level5task3(2, 3), level5task3(5, 32));

// 4. Take time (hours and minutes) and print the smaller angle between the hour and minute hands.
function level5task4(hours, minutes) {
  let h = hours % 12;
  let hourAngle = (h * 30) + (minutes * 0.5);
  let minuteAngle = minutes * 6;
  let angle = Math.abs(hourAngle - minuteAngle);
  if (angle > 180) {
    angle = 360 - angle;
  }
  return angle;
};
// console.log(level5task4(4, 34), level5task4(5, 30));

// 5. Take three numbers and check if they are in arithmetic progression.
function level5task5(a, b, c) {
  if (b - a === c - b) {
    return true;
  } else {
    return false;
  }
};
// console.log(level5task5(2, 3, 4), level5task5(2, 5, 2));

// 6. Take three numbers and check if they are in geometric progression.
function level5task6(a, b, c) {
  if (a === 0 || b === 0 || c === 0) return false;
  if (b / a === c / b) {
    return true;
  } else {
    return false;
  }
};
// console.log(level5task6(2, 3, 4), level5task6(4, 4, 4));

// 7. Take a 3-digit number and check if the sum of the first and last digit equals the middle digit.
function level5task7(n) {
  let d1 = Math.floor(n / 100);
  let d2 = Math.floor((n % 100) / 10);
  let d3 = n % 10;
  if (d1 + d3 === d2) {
    return true;
  } else {
    return false;
  }
};
// console.log(level5task7(242), level5task7(273));

// 8. Take an integer (1–9999) and check if the sum of its digits is greater than the product of its digits.
function level5task8(n) {
  let sum = 0;
  let product = 1;
  let temp = n;
  while (temp > 0) {
    let digit = temp % 10;
    sum += digit;
    product *= digit;
    temp = Math.floor(temp / 10);
  }
  return sum > product;
};
// console.log(level5task8(234), level5task8(111));

// 9. Take two dates (day1, month1, day2, month2) and determine which one comes first in the calendar.
function level5task9(d1, m1, d2, m2) {
  if (m1 < m2) return "First date comes first";
  else if (m2 < m1) return "Second date comes first";
  else {
    if (d1 < d2) return "First date comes first";
    else if (d2 < d1) return "Second date comes first";
    else return "Both dates are identical";
  }
};
// console.log(level5task9(2, 3, 2, 4), level5task9(2, 5, 1, 3));

// 10. Take a year and print the corresponding century (e.g., “19th century”, “20th century”).
function level5task10(year) {
  let century = Math.ceil(year / 100);
  let suffix = "th";
  if (century % 10 === 1 && century % 100 !== 11) suffix = "st";
  else if (century % 10 === 2 && century % 100 !== 12) suffix = "nd";
  else if (century % 10 === 3 && century % 100 !== 13) suffix = "rd";
  return century + suffix + " century";
};
// console.log(level5task10(2003), level5task10(199));