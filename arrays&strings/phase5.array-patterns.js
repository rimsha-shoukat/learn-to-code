
// ************************************
// Level 1: Two Pointer — Opposite Ends
// ************************************

// 1. Two Sum - return 2 distinct indexes that sum upto target.

// Method 1 - Brute force
// Time Complexity - O(n²) Space Complexity - O(1)
function twoSumM1(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return -1;
};
// console.log(twoSumM1([2, 7, 11, 15], 9));

// Method 2 - .includes() && .indexOf()
// Time Complexity - O(n²) Space Complexity - O(1)
function twoSumM2(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let toFind = target - nums[i];
    // It's usually a good rule to avoid using indexOf() || includes() inside loops for large data sets, as they hide O(n) operations behind a single line of code.
    if (nums.includes(toFind) && nums.indexOf(toFind) !== i) {
      return [i, nums.indexOf(toFind)];
    }
  }
  return -1;
};
// console.log(twoSumM2([2, 7, 11, 15], 9));

// Method 3 - Hash Map
// Time Complexity - O(1) Space Complexity - O(1)
function twoSumM3(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let toFind = target - nums[i];
    if (map.has(toFind)) {
      return [map.get(toFind), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return -1;
};
// console.log(twoSumM3([2, 7, 11, 15], 9));

// 2. 3Sum - return all occurrences of 3 distinct indexes that sum upto 0.

// Method 1 - Brute force 
// Time Complexity - O(n³) Space Complexity - O(1)
function threeSumM1(nums) {
  nums.sort((a, b) => a - b);
  let res = new Set(); // It's better to avoid this approach it's just for learning purpose.    
  let n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          res.add(JSON.stringify([nums[i], nums[j], nums[k]]));
        };
      }
    }
  }
  return Array.from(res).map(item => JSON.parse(item));
};
// console.log(threeSumM1([-1,0,1,2,-1,-4]));

// Method 2 - Skipping Duplicates
// Time Complexity - O(n²) Space Complexity - O(1)
function threeSumM2(nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  let n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    if (nums[i - 1] === nums[i]) continue;
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while ((j < k) && (nums[j] === nums[j + 1])) j++;
        while ((j < k) && (nums[k] === nums[k - 1])) k--;
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};
// console.log(threeSumM2([-1,0,1,2,-1,-4]));

// 3. 4Sum
// Method 1 - Brute force
// Time Complexity - O(n⁴) Space Complexity - O(1)
function fourSumM1(nums) {
  nums.sort((a, b) => a - b);
  let res = new Set();
  let n = nums.length;
  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      for (let k = j + 1; k < n - 1; k++) {
        for (let l = k + 1; l < n; l++) {
          if ((nums[i] + nums[j] + nums[k] + nums[l]) === target) {
            res.add(JSON.stringify([nums[i], nums[j], nums[k], nums[l]]));
          }
        }
      }
    }
  }
  return Array.from(res).map(item => JSON.parse(item));
};
// console.log(fourSumM1([1,0,-1,0,-2,2], 0));

// Method 2 - Optimal approach
// Time Complexity - O(n³) Space Complexity - O(1)
function fourSumM2(nums, target) {
  nums.sort((a, b) => a - b);
  let res = [];
  let N = nums.length;
  for (let i = 0; i < N - 3; i++) {
    if ((i > 0) && (nums[i] === nums[i - 1])) continue;
    for (let j = i + 1; j < N - 2; j++) {
      if ((j > i + 1) && (nums[j] === nums[j - 1])) continue;
      let n = j + 1;
      let m = N - 1;
      while (n < m) {
        let sum = nums[i] + nums[j] + nums[n] + nums[m];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[n], nums[m]]);
          while ((n < m) && (nums[n] === nums[n + 1])) n++;
          while ((n < m) && (nums[m] === nums[m - 1])) m--;
          n++;
          m--;
        } else if (sum > target) {
          m--;
        } else {
          n++;
        }
      }
    }
  }
  return res;
};
// console.log(fourSumM2([1,0,-1,0,-2,2], 0));

// 4. Container With Most Water
// 5. Trapping Rain Water
// 6. Valid Palindrome
// 7. Reverse a sorted array in-place
// 8. Minimum difference pair in sorted array

// *************************************
// Level 2: Two Pointer — Same Direction
// *************************************

// 9. Remove Duplicates from Sorted Array
// 10. Remove Duplicates from Sorted Array II
// 11. Remove Element
// 12. Move Zeroes
// 13. Squares of a Sorted Array
// 14. Find the Duplicate Number

// *******************************
// Level 3: Partition / Dutch Flag
// *******************************

// 15. Sort Colors
// 16. Partition Array by Odd and Even
// 17. Partition Array Around a Pivot
// 18. Wiggle Sort II

// ************************************
// Level 4: Sliding Window — Fixed Size
// ************************************

// 19. Maximum Average Subarray I
// 20. Maximum Sum of Distinct Subarrays With Length K
// 21. Find All Anagrams in a String
// 22. Permutation in String
// 23. Sliding Window Maximum

// ***************************************
// Level 5: Sliding Window — Variable Size
// ***************************************

// 24. Minimum Size Subarray Sum
// 25. Longest Substring Without Repeating Characters
// 26. Longest Substring with At Most K Distinct Chars
// 27. Fruits Into Baskets
// 28. Binary Subarrays With Sum
// 29. Subarrays with K Different Integers
// 30. Minimum Window Substring
// 31. Longest Repeating Character Replacement

// ***************************************
// Level 6: Monotonic Window — Deque Based
// ***************************************

// 32. Sliding Window Maximum
// 33. Longest Continuous Subarray With Absolute Diff ≤ Limit
// 34. Jump Game VI
// 35. Max Value of Equation

// **********************************
// Level 7: Prefix Based — Prefix Sum
// **********************************

// 36. Range Sum Query — Immutable
// 37. Find Pivot Index
// 38. Subarray Sum Equals K
// 39. Continuous Subarray Sum
// 40. Product of Array Except Self
// 41. Count of subarrays with equal 0s and 1s
// 42. Number of Subarrays with Sum in Range

// **********************************
// Level 8: Prefix Based — Prefix XOR
// **********************************

// 43. XOR Queries of a Subarray
// 44. Count Triplets That Can Form Two Arrays of Equal XOR
// 45. Single Number
// 46. Subarray with Given XOR

// ******************
// Level 9: 2D Prefix
// ******************

// 47. Range Sum Query 2D — Immutable
// 48. Matrix Block Sum
// 49. Number of Submatrices That Sum to Target
// 50. Max Side Length of Square with Sum ≤ Threshold

// ***************************
// Level 10: Kadane / Subarray
// ***************************

// 51. Maximum Subarray
// 52. Maximum Sum Circular Subarray
// 53. Maximum Absolute Sum of Any Subarray
// 54. Longest Turbulent Subarray

// ******************************
// Level 11: Max Product Subarray
// ******************************

// 55. Maximum Product Subarray
// 56. Maximum Product of Three Numbers
// 57. Product of Array Except Self

// ***************************************
// Level 12: Subarray with Given XOR / Sum
// ***************************************

// 58. Subarray Sum Equals K
// 59. Subarray with Given XOR
// 60. Longest Subarray with 0 Sum
// 61. Number of Subarrays with Bounded Maximum

// ***********************
// Level 13: Binary Search
// ***********************

// *****Level 13.i: On Index*****
// 62. Binary Search
// 63. Find First and Last Position of Element
// 64. Search in Rotated Sorted Array
// 65. Search in Rotated Sorted Array II
// 66. Find Minimum in Rotated Sorted Array
// 67. Find Peak Element
// 68. Search a 2D Matrix
// 69. Search a 2D Matrix II

// *****Level 13.ii: On Answer*****
// 70. Koko Eating Bananas
// 71. Capacity to Ship Packages Within D Days
// 72. Split Array Largest Sum
