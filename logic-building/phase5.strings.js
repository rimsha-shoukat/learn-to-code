// GOAL: Ability to handle strings logically.

// ******************************
// Level 1: Basic String Handling
// ******************************

// 1. Take a string input and print its length.
function level1task1(str) {
  return str.length;
}
// console.log(level1task1("hello"));

// 2. Print the first and last character of a string.
function level1task2(str) {
  if (str.length === 0) return "";
  return str[0] + str[str.length - 1];
}
// console.log(level1task2("hello"));

// 3. Convert all characters of a string to uppercase.
function level1task3(str) {
  return str.toUpperCase();
}
// console.log(level1task3("hello"));

// 4. Convert all characters of a string to lowercase.
function level1task4(str) {
  return str.toLowerCase();
}
// console.log(level1task4("HELLO"));

// 5. Count how many characters (excluding spaces) are in the string.
function level1task5(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") count++;
  }
  return count;
}
// console.log(level1task5("hello world"));

// 6. Count how many words are in a sentence.
function level1task6(str) {
  let count = 0;
  let inWord = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && str[i] !== "\t" && str[i] !== "\n") {
      if (!inWord) {
        count++;
        inWord = true;
      }
    } else {
      inWord = false;
    }
  }
  return count;
}
// console.log(level1task6("hello world sentence"));

// 7. Take two strings and print them concatenated.
function level1task7(str1, str2) {
  return str1 + str2;
}
// console.log(level1task7("hello", "world"));

// 8. Compare two strings lexicographically (like dictionary order).
function level1task8(str1, str2) {
  if (str1 < str2) return -1;
  if (str1 > str2) return 1;
  return 0;
}
// console.log(level1task8("abc", "def"));

// 9. Print the ASCII value of each character in a string.
function level1task9(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str.charCodeAt(i));
  }
  return result;
}
// console.log(level1task9("abc"));

// 10. Check whether the string is empty or not.
function level1task10(str) {
  return str.length === 0;
}
// console.log(level1task10(""));


// **************************************
// Level 2: Counting & Character Analysis
// **************************************

// 1. Count how many vowels and consonants are in a string.
function level2task1(str) {
  let vowels = 0, consonants = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char >= "a" && char <= "z") {
      if ("aeiou".includes(char)) vowels++;
      else consonants++;
    }
  }
  return { vowels, consonants };
}
// console.log(level2task1("hello"));

// 2. Count the number of digits, letters, and special characters in a string.
function level2task2(str) {
  let digits = 0, letters = 0, special = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) letters++;
    else if (char >= "0" && char <= "9") digits++;
    else special++;
  }
  return { digits, letters, special };
}
// console.log(level2task2("abc123!@"));

// 3. Count how many uppercase and lowercase letters a string has.
function level3task3_count(str) {
  let uppercase = 0, lowercase = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= "A" && char <= "Z") uppercase++;
    else if (char >= "a" && char <= "z") lowercase++;
  }
  return { uppercase, lowercase };
}
// console.log(level3task3_count("HelloWorld"));

// 4. Find the frequency of each character in a string (without using a map).
function level2task4(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j].char === char) {
        result[j].count++;
        found = true;
        break;
      }
    }
    if (!found) {
      result.push({ char: char, count: 1 });
    }
  }
  return result;
}
// console.log(level2task4("hello"));

// 5. Count how many spaces are there in a sentence.
function level2task5(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") count++;
  }
  return count;
}
// console.log(level2task5("hello world sentence"));

// 6. Count how many times a given character appears in a string.
function level2task6(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}
// console.log(level2task6("hello", "l"));

// 7. Count how many alphabets are before ‘m’ and after ‘m’ in a given string.
function level2task7(str) {
  let before = 0, after = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char >= "a" && char <= "z" && char !== "m") {
      if (char < "m") before++;
      else after++;
    }
  }
  return { before, after };
}
// console.log(level2task7("abcdefz"));

// 8. Count how many substrings start and end with the same character (simple logic).
function level2task8(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (str[i] === str[j]) count++;
    }
  }
  return count;
}
// console.log(level2task8("abcab"));

// 9. Print how many words start with a vowel in a sentence.
function level2task9(str) {
  let count = 0;
  let words = level5task1_helper(str);
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0 && "aeiouAEIOU".includes(words[i][0])) {
      count++;
    }
  }
  return count;
}
// console.log(level2task9("apple orange banana"));

// 10. Count how many words end with ‘s’.
function level2task10(str) {
  let count = 0;
  let words = level5task1_helper(str);
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    if (w.length > 0 && (w[w.length - 1] === "s" || w[w.length - 1] === "S")) {
      count++;
    }
  }
  return count;
}
// console.log(level2task10("apples oranges banana"));


// *****************************************
// Level 3: Reversing & Palindromic Thinking
// *****************************************

// 1. Reverse a string without using built-in reverse.
function level3task1(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
// console.log(level3task1("hello"));

// 2. Reverse each word in a sentence.
function level3task2(str) {
  let words = level5task1_helper(str);
  let res = [];
  for (let i = 0; i < words.length; i++) {
    res.push(level3task1(words[i]));
  }
  return level5task5_join(res, " ");
}
// console.log(level3task2("hello world"));

// 3. Reverse the order of words in a sentence.
function level3task3(str) {
  let words = level5task1_helper(str);
  let res = [];
  for (let i = words.length - 1; i >= 0; i--) {
    res.push(words[i]);
  }
  return level5task5_join(res, " ");
}
// console.log(level3task3("hello world"));

// 4. Check whether a string is a palindrome.
function level3task4(str) {
  return str === level3task1(str);
}
// console.log(level3task4("radar"));

// 5. Check if two strings are the reverse of each other.
function level3task5(str1, str2) {
  return str1 === level3task1(str2);
}
// console.log(level3task5("abc", "cba"));

// 6. Print the middle character(s) of a string.
function level3task6(str) {
  if (str.length === 0) return "";
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str[mid - 1] + str[mid];
  } else {
    return str[mid];
  }
}
// console.log(level3task6("hello"));

// 7. Print the second half of the string in reverse.
function level3task7(str) {
  let mid = Math.floor(str.length / 2);
  let secondHalf = "";
  for (let i = mid; i < str.length; i++) {
    secondHalf += str[i];
  }
  return level3task1(secondHalf);
}
// console.log(level3task7("helloworld"));

// 8. Remove the first and last character and print the remaining string.
function level3task8(str) {
  if (str.length <= 2) return "";
  let res = "";
  for (let i = 1; i < str.length - 1; i++) {
    res += str[i];
  }
  return res;
}
// console.log(level3task8("hello"));

// 9. Reverse only characters, keeping digits in place.
function level3task9(str) {
  let chars = [];
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] >= "0" && str[i] <= "9")) {
      chars.push(str[i]);
    }
  }
  let res = "";
  let cIdx = chars.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      res += str[i];
    } else {
      res += chars[cIdx--];
    }
  }
  return res;
}
// console.log(level3task9("a1b2c"));

// 10. Reverse string but skip spaces.
function level3task10(str) {
  let chars = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") chars.push(str[i]);
  }
  let res = "";
  let cIdx = chars.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      res += " ";
    } else {
      res += chars[cIdx--];
    }
  }
  return res;
}
// console.log(level3task10("hello world"));


// **************************************
// Level 4: Character & Word Manipulation
// **************************************

// 1. Remove all vowels from a string.
function level4task1(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (!"aeiouAEIOU".includes(str[i])) res += str[i];
  }
  return res;
}
// console.log(level4task1("hello"));

// 2. Remove all spaces from a string.
function level4task2(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") res += str[i];
  }
  return res;
}
// console.log(level4task2("h e l l o"));

// 3. Replace all vowels with ‘*’.
function level4task3(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if ("aeiouAEIOU".includes(str[i])) res += "*";
    else res += str[i];
  }
  return res;
}
// console.log(level4task3("hello"));

// 4. Replace all spaces with ‘’.
function level4task4(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") res += "";
    else res += str[i];
  }
  return res;
}
// console.log(level4task4("hello world"));

// 5. Print the string after removing all digits.
function level4task5(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] >= "0" && str[i] <= "9")) res += str[i];
  }
  return res;
}
// console.log(level4task5("abc123def"));

// 6. Remove duplicate characters from a string.
function level4task6(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (!res.includes(str[i])) res += str[i];
  }
  return res;
}
// console.log(level4task6("hello"));

// 7. Keep only the first occurrence of each character.
function level4task7(str) {
  return level4task6(str);
}
// console.log(level4task7("banana"));

// 8. Remove consecutive duplicate characters (e.g., “aaabb” → “ab”).
function level4task8(str) {
  if (str.length === 0) return "";
  let res = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i - 1]) res += str[i];
  }
  return res;
}
// console.log(level4task8("aaabb"));

// 9. Swap case: uppercase → lowercase and lowercase → uppercase.
function level4task9(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= "A" && char <= "Z") res += char.toLowerCase();
    else if (char >= "a" && char <= "z") res += char.toUpperCase();
    else res += char;
  }
  return res;
}
// console.log(level4task9("Hello"));

// 10. Shift each character by 1 (e.g., “abc” → “bcd”).
function level4task10(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += String.fromCharCode(str.charCodeAt(i) + 1);
  }
  return res;
}
// console.log(level4task10("abc"));

// ****************************
// Level 5: Word-level Thinking
// ****************************

// Helper to split sentence into words array manually
function level5task1_helper(str) {
  let words = [];
  let currentWord = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || str[i] === "\t" || str[i] === "\n") {
      if (currentWord.length > 0) {
        words.push(currentWord);
        currentWord = "";
      }
    } else {
      currentWord += str[i];
    }
  }
  if (currentWord.length > 0) {
    words.push(currentWord);
  }
  return words;
}
// Helper to join array manually
function level5task5_join(arr, delimiter) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
    if (i < arr.length - 1) res += delimiter;
  }
  return res;
}

// 1. Print each word of a sentence on a new line.
function level5task1(str) {
  return level5task1_helper(str);
}
// console.log(level5task1("hello world sentence"));

// 2. Count how many words have even length.
function level5task2(str) {
  let words = level5task1_helper(str);
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 === 0) count++;
  }
  return count;
}
// console.log(level5task2("hello word ok"));

// 3. Find the longest word in a sentence.
function level5task3(str) {
  let words = level5task1_helper(str);
  if (words.length === 0) return "";
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) longest = words[i];
  }
  return longest;
}
// console.log(level5task3("hello international world"));

// 4. Find the shortest word in a sentence.
function level5task4(str) {
  let words = level5task1_helper(str);
  if (words.length === 0) return "";
  let shortest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest.length) shortest = words[i];
  }
  return shortest;
}
// console.log(level5task4("hello it world"));

// 5. Swap first and last words in a sentence.
function level5task5(str) {
  let words = level5task1_helper(str);
  if (words.length > 1) {
    let temp = words[0];
    words[0] = words[words.length - 1];
    words[words.length - 1] = temp;
  }
  return level5task5_join(words, " ");
}
// console.log(level5task5("hello intermediate world"));

// 6. Print all words that start and end with the same letter.
function level5task6(str) {
  let words = level5task1_helper(str);
  let res = [];
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    if (w.length > 0 && w[0].toLowerCase() === w[w.length - 1].toLowerCase()) {
      res.push(w);
    }
  }
  return res;
}
// console.log(level5task6("noon banana radar"));

// 7. Count how many words contain the letter ‘a’.
function level5task7(str) {
  let words = level5task1_helper(str);
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase().includes("a")) count++;
  }
  return count;
}
// console.log(level5task7("apple orange cherry"));

// 8. Capitalize the first letter of each word.
function level5task8(str) {
  let words = level5task1_helper(str);
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    if (w.length > 0) {
      words[i] = w[0].toUpperCase() + w.slice(1);
    }
  }
  return level5task5_join(words, " ");
}
// console.log(level5task8("hello world"));

// 9. Print the sentence in title case (first letter capital, rest lowercase).
function level5task9(str) {
  let words = level5task1_helper(str);
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    if (w.length > 0) {
      words[i] = w[0].toUpperCase() + w.slice(1).toLowerCase();
    }
  }
  return level5task5_join(words, " ");
}
// console.log(level5task9("hELLO wORLD"));

// 10. Remove extra spaces between words (normalize spacing).
function level5task10(str) {
  let words = level5task1_helper(str);
  return level5task5_join(words, " ");
}
// console.log(level5task10("hello   world   sentence"));