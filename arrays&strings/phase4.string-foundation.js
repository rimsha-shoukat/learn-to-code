// Arrays & strings - file by CodeWithNishchal

// ******************************
// Level 1: Basic String Handling
// ******************************

// 1. Take a string input and print its length.
function task1(str) {
  return str.length;
}
// console.log(task1("hello"));

// 2. Print the first and last character of a string.
function task2(str) {
  if (str.length === 0) return "";
  return str.charAt(0) + str.charAt(str.length - 1);
}
// console.log(task2("hello"));

// 3. Convert all characters of a string to uppercase.
function task3(str) {
  return str.toUpperCase();
}
// console.log(task3("hello"));

// 4. Convert all characters of a string to lowercase.
function task4(str) {
  return str.toLowerCase();
}
// console.log(task4("HELLO"));

// 5. Count how many characters excluding spaces are in the string.
function task5(str) {
  return str.split(" ").join("").length;
}
// console.log(task5("hello world"));

// 6. Count how many words are in a sentence.
function task6(str) {
  let words = str.trim().split(/\s+/);
  return words[0] === "" ? 0 : words.length;
}
// console.log(task6("hello world sentence"));

// 7. Take two strings and print them concatenated.
function task7(str1, str2) {
  return str1.concat(str2);
}
// console.log(task7("hello", "world"));

// 8. Compare two strings lexicographically.
function task8(str1, str2) {
  return str1.localeCompare(str2);
}
// console.log(task8("abc", "def"));

// 9. Print the ASCII value of each character in a string.
function task9(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str.charCodeAt(i));
  }
  return result;
}
// console.log(task9("abc"));

// 10. Check whether the string is empty or not.
function task10(str) {
  return str.length === 0;
}
// console.log(task10(""));

// ****************************************
// Level 2: Counting and Character Analysis
// ****************************************

// 11. Count how many vowels and consonants are in a string.
function task11(str) {
  let vowels = 0, consonants = 0;
  let cleanStr = str.toLowerCase();
  for (let i = 0; i < cleanStr.length; i++) {
    let char = cleanStr.charAt(i);
    if (char >= "a" && char <= "z") {
      if ("aeiou".includes(char)) vowels++;
      else consonants++;
    }
  }
  return { vowels, consonants };
}
// console.log(task11("hello"));

// 12. Count the number of digits, letters, and special characters in a string.
function task12(str) {
  let digits = 0, letters = 0, special = 0;
  let lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    let char = lowerStr.charAt(i);
    if (char >= "a" && char <= "z") letters++;
    else if (char >= "0" && char <= "9") digits++;
    else special++;
  }
  return { digits, letters, special };
}
// console.log(task12("abc123!@"));

// 13. Count how many uppercase and lowercase letters a string has.
function task13(str) {
  let uppercase = 0, lowercase = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char >= "A" && char <= "Z") uppercase++;
    else if (char >= "a" && char <= "z") lowercase++;
  }
  return { uppercase, lowercase };
}
// console.log(task13("HelloWorld"));

// 14. Find the frequency of each character in a string without using a map.
function task14(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let foundIdx = -1;
    for (let j = 0; j < result.length; j++) {
      if (result[j].char === char) {
        foundIdx = j;
        break;
      }
    }
    if (foundIdx !== -1) {
      result[foundIdx].count++;
    } else {
      result.push({ char: char, count: 1 });
    }
  }
  return result;
}
// console.log(task14("hello"));

// 15. Count how many spaces are there in a sentence.
function task15(str) {
  return str.split(" ").length - 1;
}
// console.log(task15("hello world sentence"));

// 16. Count how many times a given character appears in a string.
function task16(str, char) {
  return str.split(char).length - 1;
}
// console.log(task16("hello", "l"));

// 17. Count how many alphabets are before m and after m in a given string.
function task17(str) {
  let before = 0, after = 0;
  let lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    let char = lowerStr.charAt(i);
    if (char >= "a" && char <= "z" && char !== "m") {
      if (char < "m") before++;
      else after++;
    }
  }
  return { before, after };
}
// console.log(task17("abcdefz"));

// 18. Count how many substrings start and end with the same character.
function task18(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let sub = str.slice(i, j);
      if (sub.charAt(0) === sub.charAt(sub.length - 1)) count++;
    }
  }
  return count;
}
// console.log(task18("abcab"));

// 19. Print how many words start with a vowel in a sentence.
function task19(str) {
  let words = str.trim().split(/\s+/);
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0 && "aeiouAEIOU".includes(words[i].charAt(0))) {
      count++;
    }
  }
  return count;
}
// console.log(task19("apple orange banana"));

// 20. Count how many words end with s.
function task20(str) {
  let words = str.trim().split(/\s+/);
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    if (w.length > 0 && (w.charAt(w.length - 1) === "s" || w.charAt(w.length - 1) === "S")) {
      count++;
    }
  }
  return count;
}
// console.log(task20("apples oranges banana"));

// *******************************************
// Level 3: Reversing and Palindromic Thinking
// *******************************************

// 21. Reverse a string without using built-in reverse.
function task21(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str.charAt(i);
  }
  return rev;
}
// console.log(task21("hello"));

// 22. Reverse each word in a sentence.
function task22(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = task21(words[i]);
  }
  return words.join(" ");
}
// console.log(task22("hello world"));

// 23. Reverse the order of words in a sentence.
function task23(str) {
  return str.split(" ").reverse().join(" ");
}
// console.log(task23("hello world"));

// 24. Check whether a string is a palindrome.
function task24(str) {
  return str === task21(str);
}
// console.log(task24("radar"));

// 25. Check if two strings are the reverse of each other.
function task25(str1, str2) {
  return str1 === task21(str2);
}
// console.log(task25("abc", "cba"));

// 26. Print the middle character or characters of a string.
function task26(str) {
  if (str.length === 0) return "";
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str.slice(mid - 1, mid + 1);
  } else {
    return str.charAt(mid);
  }
}
// console.log(task26("hello"));

// 27. Print the second half of the string in reverse.
function task27(str) {
  let mid = Math.floor(str.length / 2);
  let secondHalf = str.slice(mid);
  return task21(secondHalf);
}
// console.log(task27("helloworld"));

// 28. Remove the first and last character and print the remaining string.
function task28(str) {
  if (str.length <= 2) return "";
  return str.slice(1, -1);
}
// console.log(task28("hello"));

// 29. Reverse only characters, keeping digits in place.
function task29(str) {
  let chars = [];
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (!(char >= "0" && char <= "9")) {
      chars.push(char);
    }
  }
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char >= "0" && char <= "9") {
      res += char;
    } else {
      res += chars.pop();
    }
  }
  return res;
}
// console.log(task29("a1b2c"));

// 30. Reverse a string but skip spaces.
function task30(str) {
  let chars = [];
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char !== " ") chars.push(char);
  }
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === " ") {
      res += " ";
    } else {
      res += chars.pop();
    }
  }
  return res;
}
// console.log(task30("hello world"));

// ****************************************
// Level 4: Character and Word Manipulation
// ****************************************

// 31. Remove all vowels from a string.
function task31(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (!"aeiouAEIOU".includes(str.charAt(i))) res += str.charAt(i);
  }
  return res;
}
// console.log(task31("hello"));

// 32. Remove all spaces from a string.
function task32(str) {
  return str.split(" ").join("");
}
// console.log(task32("h e l l o"));

// 33. Replace all vowels with *.
function task33(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if ("aeiouAEIOU".includes(char)) res += "*";
    else res += char;
  }
  return res;
}
// console.log(task33("hello"));

// 34. Replace all spaces with _.
function task34(str) {
  return str.split(" ").join("_");
}
// console.log(task34("hello world"));

// 35. Print the string after removing all digits.
function task35(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (!(char >= "0" && char <= "9")) res += char;
  }
  return res;
}
// console.log(task35("abc123def"));

// 36. Remove duplicate characters from a string.
function task36(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (!res.includes(char)) res += char;
  }
  return res;
}
// console.log(task36("hello"));

// 37. Keep only the first occurrence of each character.
function task37(str) {
  return task36(str);
}
// console.log(task37("banana"));

// 38. Remove consecutive duplicate characters.
function task38(str) {
  if (str.length === 0) return "";
  let res = str.charAt(0);
  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(i - 1)) res += str.charAt(i);
  }
  return res;
}
// console.log(task38("aaabb"));

// 39. Swap case.
function task39(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char >= "A" && char <= "Z") res += char.toLowerCase();
    else if (char >= "a" && char <= "z") res += char.toUpperCase();
    else res += char;
  }
  return res;
}
// console.log(task39("Hello"));

// 40. Shift each character by 1.
function task40(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += String.fromCharCode(str.charCodeAt(i) + 1);
  }
  return res;
}
// console.log(task40("abc"));

// ****************************
// Level 5: Word-Level Thinking
// ****************************

// 41. Print each word of a sentence on a new line.
function task41(str) {
  return str.trim().split(/\s+/);
}
// console.log(task41("hello world sentence"));

// 42. Count how many words have even length.
function task42(str) {
  let words = str.trim().split(/\s+/);
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 === 0 && words[i].length > 0) count++;
  }
  return count;
}
// console.log(task42("hello word ok"));

// 43. Find the longest word in a sentence.
function task43(str) {
  let words = str.trim().split(/\s+/);
  if (words.length === 0 || words[0] === "") return "";
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) longest = words[i];
  }
  return longest;
}
// console.log(task43("hello international world"));

// 44. Find the shortest word in a sentence.
function task44(str) {
  let words = str.trim().split(/\s+/);
  if (words.length === 0 || words[0] === "") return "";
  let shortest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest.length && words[i].length > 0) shortest = words[i];
  }
  return shortest;
}
// console.log(task44("hello it world"));

// 45. Swap first and last words in a sentence.
function task45(str) {
  let words = str.trim().split(/\s+/);
  if (words.length > 1) {
    let temp = words[0];
    words[0] = words[words.length - 1];
    words[words.length - 1] = temp;
  }
  return words.join(" ");
}
// console.log(task45("hello intermediate world"));

// 46. Print all words that start and end with the same letter.
function task46(str) {
  let words = str.trim().split(/\s+/);
  let res = [];
  for (let i = 0; i < words.length; i++) {
    let w = words[i].toLowerCase();
    if (w.length > 0 && w.charAt(0) === w.charAt(w.length - 1)) {
      res.push(words[i]);
    }
  }
  return res;
}
// console.log(task46("noon banana radar"));

// 47. Count how many words contain the letter a.
function task47(str) {
  let words = str.trim().split(/\s+/);
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase().includes("a")) count++;
  }
  return count;
}
// console.log(task47("apple orange cherry"));

// 48. Capitalize the first letter of each word.
function task48(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    if (w.length > 0) {
      words[i] = w.charAt(0).toUpperCase() + w.slice(1);
    }
  }
  return words.join(" ");
}
// console.log(task48("hello world"));

// 49. Print the sentence in the Title Case.
function task49(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    if (w.length > 0) {
      words[i] = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    }
  }
  return words.join(" ");
}
// console.log(task49("hELLO wORLD"));

// 50. Remove extra spaces between words.
function task50(str) {
  let words = str.trim().split(/\s+/);
  return words.join(" ");
}
// console.log(task50("hello   world   sentence"));