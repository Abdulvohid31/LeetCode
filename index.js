// #1 remove duplicates
// function removeDuplicates(nums) {
//     if (nums.length === 0) return 0;
//     let k = 1;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }
//     return k;
// }
// const nums = [0,0,1,1,1,2,2,3,3,4];
// const result = removeDuplicates(nums);
// console.log(removeDuplicates(nums));

// #2 max depth
// var maxDepth = function (root) {
//     if (root === null) {
//       return 0;
//     }
//     const leftDepth = maxDepth(root.left), rightDepth = maxDepth(root.right);
//     return Math.max(leftDepth, rightDepth) + 1;
//   };
// console.log(maxDepth([10, null, 30, 20, 50]));

// #3 single number
// var singleNumber = function(nums) {
//     return nums.reduce((acc, num) => acc ^ num, 0);
// };

// #4
// arr.filter(item => item !== valueToRemove);
// var postorderTraversal = function(root) {
//     if(root) root.sort((a, b) => b - a).filter(item => item !== false || null);
//     return []
// };

// #5 false
// var reverseList = function(head) {
//     if (head !== null) {
//        return head.sort((a, b) => a - b).reverse()
//     }
//     return [];

// };
// console.log(reverseList([1,2]));

// #6
// function majorityElement(nums) {
//     const frequencyMap = new Map();

//     // numsaydagi qiymatlarni hisoblaymiz
//     nums.forEach(value => {
//         const count = frequencyMap.get(value) || 0;
//         frequencyMap.set(value, count + 1);
//     });

//     let mostFrequentValue = null;
//     let maxFrequency = 0;
//     frequencyMap.forEach((frequency, value) => {
//         if (frequency > maxFrequency) {
//             mostFrequentValue = value;
//             maxFrequency = frequency;
//         }
//     });
//     return mostFrequentValue;
// }
// const nums = [1, 2, 3, 1, 2, 1, 4, 1];
// const mostFrequent = findMostFrequentValue(nums);
// console.log(mostFrequent); // 1

// #7
// var numberOfEmployeesWhoMetTarget = function(hours, target) {
//         let count = 0;
//         for (let i = 0; i < hours.length; i++) {
//             if (hours[i] >= target) {
//                 count++;
//             }
//         }
//         return count;
// };
// const sortArrayByParity = (nums) => {
//     const filtNum = nums.filter(num => num % 2 === 0 || null)
//     const filtFalseNum = nums.filter(number => number % 2 !== 0 || null)
//     return [filtNum , filtFalseNum].flat()
// }
// let check =  [3,1,2,4]
// let check2 =  [0]
// console.log(sortArrayByParity(check));
// console.log(sortArrayByParity(check2));

// const search = (nums, target) => {
//     return index = nums.indexOf(target)
// }
// let check = [-1,0,3,5,9,12];
// console.log(search(check, 9));
// console.log(search(check, 2));

// const modifiedList = (nums, head) => {
//   return nums.filter((num) => head.includes(num));
// };
// let check = [1, 2, 3, 4, 5],
//   hd = [4, 5];
// console.log(modifiedList(check, hd));

// Array.prototype.last = function() {
//     if (this.length === 0) {
//         return -1;
//         return this[this.length - 1];
//     }
// }

// console.log(0 && 12);

// var isValid = function(s) {
//     const stack = [];
//     const map = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     };
//     for (const char of s) {
//         if (map[char]) {
//             stack.push(char);
//         } else {
//             const topElement = stack.pop();
//             if (map[topElement] !== char) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// };

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));

// Merge Two Sorted Lists errors
// class ListNode {
//     constructor(value) {
//         this.val = value;
//         this.next = null;
//     }
// }

// var mergeTwoLists = function (list1, list2) {
//     // Agar biror ro'yxat bo'sh bo'lsa, boshqasini qaytar
//     if (!list1) return list2;
//     if (!list2) return list1;

//     const arr = [];
//     let curr1 = list1;
//     let curr2 = list2;

//     // Har ikkala ro'yxatdagi elementlarni arrayga joylashtirish
//     while (curr1) {
//         arr.push(curr1.val);
//         curr1 = curr1.next;
//     }
//     while (curr2) {
//         arr.push(curr2.val);
//         curr2 = curr2.next;
//     }

//     // Arrayni tartiblash
//     arr.sort((a, b) => a - b);

//     // Tartiblangan arraydan yangi bog'langan ro'yxat yaratish
//     const sortedHead = new ListNode(arr[0]);
//     let sortedCurrent = sortedHead;

//     for (let i = 1; i < arr.length; i++) {
//         sortedCurrent.next = new ListNode(arr[i]);
//         sortedCurrent = sortedCurrent.next;
//     }

//     return sortedHead;
// };

// console.log();

// remove element from list done
// var removeElement = function (nums, val) {
//   let count = 0;
//   nums.forEach((element, index) => {
//     if (element !== val) {
//       nums[counter] = ele;
//       count++;
//     }
//   });

//   return count;
// };

// console.log(removeElement([3, 2, 2, 3], 3))

// search for insert done
// var searchInsert = function(nums, target) {
//     let index = nums.indexOf(target);
//     if (index == -1) {
//         nums.push(target);
//     }
//     nums.sort((a, b) => a - b);
//     return nums.indexOf(target);
// };

// const isSameTree = function(p, q) {
//     return p.join('') === q.join('');
// };
// let p = [1,2,3], q = [1,null,3]
// console.log(isSameTree(p,q));

// var isPalindrome = function (s) {
//   const str = s.replace(/[\s,_=+.@#$%^&*()!:;?|-]/g, "").toLowerCase();
//   return str === str.split("").reverse().join("");
// };

// console.log(isPalindrome("A."));

// find word index on string // Done
// var strStr = function(haystack, needle) {
//   const index = haystack.indexOf(needle)
//   if (index !== -1) {
//    return index;
//   }
//   else {
//     return -1
//   }
// };
// let test = "sadbutsad" , index = "sad"
// console.log(strStr(test, index));

// Delete Nodes From Linked List Present in Array
// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }
// const modifiedList = (nums, head) => {
//   const removeSet = new Set(nums);

//   const dummy = new ListNode(0);
//   dummy.next = head;
//   let current = dummy;

//   while (current && current.next) {
//     if (removeSet.has(current.next.val)) {
//       current.next = current.next.next;
//     } else {
//       current = current.next;
//     }
//   }
//   return dummy.next;
// };

// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }
// var reverseList = function (head) {
//   let prev = null;
//   let current = head;

//   while (current !== null) {
//     let nextTemp = current.next;
//     current.next = prev;
//     prev = current;
//     current = nextTemp;
//   }
//   return prev;
// };

// Sonni ildizini topish  // done(❁´◡`❁)
// var mySqrt = function (x) {
//   let result = 0;
//   for (let i = 0; i * i <= x; i++) {
//     result = i;
//   }
//   return result;
// };

// e ta harf ketmaket qilganda 1tasini remove qilish // Done
// var FondLength=TheeWord = function (sentence) {
//   let result = "";
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] === sentence[i + 1] && sentence[i] === sentence[i + 2]) {
//       result += sentence[i];
//       i += 2;
//     } else {
//       result += sentence[i];
//     }
//   }
// };

// Intager to roman // Done whith gpt
// function intToRoman(num) {
//     const romanMappings = [
//         ["M", 1000],
//         ["CM", 900],
//         ["D", 500],
//         ["CD", 400],
//         ["C", 100],
//         ["XC", 90],
//         ["L", 50],
//         ["XL", 40],
//         ["X", 10],
//         ["IX", 9],
//         ["V", 5],
//         ["IV", 4],
//         ["I", 1]
//     ];
//     let result = "";
//     for (const [symbol, value] of romanMappings) {
//         while (num >= value) {
//             result += symbol;
//             num -= value;
//         }
//     }
//     return result;
// }

// Find the longest Palindrome word in a string // Done
// var longestPalindrome = function (s) {
//     let maxPal = '';

//     for (let i = 0; i < s.length; i++) {
//       for (let j of [0, 1]) {
//         let [left, right] = [i, i + j];
//         while (s[left] && s[left] === s[right]) [left--, right++];
//         let pal = s.slice(left + 1, right);
//         if (pal.length > maxPal.length) maxPal = pal;
//       }
//     }

//     return maxPal;
// };

// Find Returned Word lengths in string // done !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
// var lengthOfLongestSubstring = function (s) {
//     let maxLength = 0;
//     let currentLength = 1;

//     for (let i = 0; i < s.length; i++) {
//         if (s[1] === s[i - 1]){
//             currentLength++;
//         }
//     }
//     return currentLength
// };

// let s = "ccccc"
// console.log(lengthOfLongestSubstring(s));

// Find the length of the longest substring without repeating characters // done
// var lengthOfLongestSubstring = function (s) {
//     if (s.length === 0) return 0;
//     let maxLength = 0;
//     let charSet = new Set();
//     let left = 0;

//     for (let right = 0; right < s.length; right++) {
//       while (charSet.has(s[right])) {
//         charSet.delete(s[left]);
//         left++;
//       }
//       charSet.add(s[right]);
//       maxLength = Math.max(maxLength, right - left + 1);
//     }

//     return maxLength;
// };

// Reverse Number  // Done
// var reverse = function(x) {
//     const INT_MIN = -2147483648; // -2^31
//     const INT_MAX = 2147483647; // 2^31 - 1
//     const str = x.toString();
//     let reversedString;
//     if (x < 0) {
//         reversedString = '-' + str.slice(1).split('').reverse().join('');
//     } else {
//         reversedString = str.split('').reverse().join('');
//     }
//     const reversedNumber = Number(reversedString);
//     if (reversedNumber < INT_MIN || reversedNumber > INT_MAX) {
//         return 0;
//     }

//     return reversedNumber;
// };

// console.log(reverse(123));

// Convert string // Done with gpt
// var convert = function (s, numRows) {
//   if (numRows === 1 || numRows >= s.length) {
//     return s;
//   }
//   const rows = Array.from({ length: numRows }, () => "");
//   let currentRow = 0;
//   let goingDown = false;
//   for (let char of s) {
//     rows[currentRow] += char;
//     if (currentRow === 0 || currentRow === numRows - 1) {
//       goingDown = !goingDown;
//     }
//     currentRow += goingDown ? 1 : -1;
//   }
//   return rows.join("");
// };

// String to intager // done
// var myAtoi = function (s) {
//     let result = parseInt(s, 10) || 0;
//     return Math.max(-(2 ** 31), Math.min(result, 2 ** 31 - 1));
// };
// console.log(myAtoi("-1234567a89"));

// done
// var maxArea = function (height) {
//   let maxArea = 0;
//   let left = 0;
//   let right = height.length - 1;
//   while (left < right) {
//     const correct = Math.min(height[left], height[right]) * (right - left);
//     maxArea = Math.max(maxArea, correct);
//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return maxArea;
// };
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// Longest Common Prefix

// var longestCommonPrefix = function (strs) {
//   if (!strs.length) return "";

//   let prefix = strs[0];

//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, prefix.length - 1);
//       if (!prefix) return "";
//     }
//   }

//   return prefix;
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }
// var mergeTwoLists = function (list1, list2) {
//   let any = new ListNode(0);
//   let all = any;

//   while (list1 !== null && list2 !== null) {
//       if (list1.val < list2.val) {
//           all.next = list1;
//           list1 = list1.next;
//       } else {
//           all.next = list2;
//           list2 = list2.next;
//       }
//       all = all.next;
//   }

//   if (list1 !== null) {
//       all.next = list1;
//   } else if (list2 !== null) {
//       all.next = list2;
//   }

//   return any.next;
// };
// let test1 = [1,2,4], test2 = [1,3,4];
// console.log(mergeTwoLists(test1, test2));

// remove nth form // Done
// var removeNthFromEnd = function(head, n) {
//   let dummy = new ListNode(0);
//   dummy.next = head;
//   let first = dummy;
//   let second = dummy;
//   for (let i = 0; i <= n; i++) {
//       first = first.next;
//   }
//   while (first !== null) {
//       first = first.next;
//       second = second.next;
//   }
//   second.next = second.next.next;
//   return dummy.next;
// };

// Sleep METHOD ishlashi
// const sleep = (millis) => new Promise(resolve => setTimeout(resolve, millis));

// var getMaximumXor = function (nums, maximumBit) {
//   let xorSum = 0;
//   const allOnes = (1 << maximumBit) - 1;
//   const result = [];

//   for (const num of nums) {
//     xorSum ^= num;
//   }
//   for (let i = nums.length - 1; i >= 0; i--) {
//     result.push(xorSum ^ allOnes);
//     xorSum ^= nums[i];
//   }

// };

//   done;
// var reverseWords = function(s) {
//   return s.split(' ').reverse().join(' ').trim().replace(/\s{2,}/g, ' ')
// };
// console.log(reverseWords("hello world"));

// done
// var gcdOfStrings = function (str1, str2) {
//   if (str1 + str2 !== str2 + str1) {
//     return "";
//   }
//   const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
//   const gcdLength = gcd(str1.length, str2.length);
//   return str1.substring(0, gcdLength);
// };
// let test1 = "LEET";
// let test2 = "CODE";

// console.log(gcdOfStrings(test1, test2));

// Done
// var productExceptSelf = function(nums) {
//     const n = nums.length;
//     const result = new Array(n).fill(1);
//     let leftProduct = 1;
//     for (let i = 0; i < n; i++) {
//         result[i] = leftProduct;
//         leftProduct *= nums[i];
//     }
//     let rightProduct = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         result[i] *= rightProduct;
//         rightProduct *= nums[i];
//     }
//     return result;
// };
// console.log(productExceptSelf([1,2,3,4]));

// done
// var twoSum = function (nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i);
//   }
//   return [];
// };

// var equalFrequency = function(word) {
//     const freqMap = new Map();
//     for (const char of word) {
//         freqMap.set(char, (freqMap.get(char) || 0) + 1);
//     }
//
//     const frequencies = Array.from(freqMap.values());
//     // Try removing 1 from each frequency and check if all remaining are equal
//     for (let i = 0; i < frequencies.length; i++) {
//         const temp = [...frequencies];
//         temp[i]--;
//
//         if (temp[i] === 0) {
//             temp.splice(i, 1);
//         }
//         // Check if all remaining frequencies are equal
//         if (temp.every(freq => freq === temp[0])) {
//             return true;
//         }
//     }

//     return false;
// };

// done
// var reverseString = function(s) {
//     return s.reverse()
// };

// var addStrings = function(num1, num2) {
//     let res = Number(num1) + Number(num2);
//     return res.toString();
// };

// var titleToNumber = function (columnTitle) {
//   let result = 0;
//   for (let i = 0; i < columnTitle.length; i++) {
//     result = 26;
//     result += columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
//   }
//   return result;
// };
// console.log(titleToNumber("A"));

// var isNumber = function (s) {
//   s = s.trim();
//   if (s.length === 0) return false;
//   if (s === "Infinity" || s === "-Infinity") return true;
//   if (s === "." || s === "-") return false;
//   let seenDecimal = false;
//   let seenE = false;
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     if (char === ".") {
//       if (seenDecimal || seenE) return false;
//       seenDecimal = true;
//     } else if (char === "e" || char === "E") {
//       if (seenE || i === 0 || i === s.length - 1) return false;
//       seenE = true;
//     } else if (char === "-" || char === "+") {
//       if (i !== 0 && s[i - 1] !== "e" && s[i - 1] !== "E") return false;
//       if (i === s.length - 1) return false;
//     } else if (isNaN(parseInt(char))) {
//       return false;
//     }
//   }
//   return !isNaN(Number(s));
// };
// console.log(isNumber("a"));

//
// var generateParenthesis = function(n) {
//     let result = [];
//     function backtrack(open, close, current) {
//         if (current.length === n * 2) {
//             result.push(current);
//             return;
//         }
//         if (open < n) {
//             backtrack(open + 1, close, current + "(");
//         }
//         if (close < open) {
//             backtrack(open, close + 1, current + ")");
//         }
//     }
//     backtrack(0, 0, "");
//     return result;
// };

// var decrypt = (code, k) => {
//   const n = code.length;
//   const result = new Array(n).fill(0);
//   if (k === 0) {
//     return result;
//   }
//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     if (k > 0) {
//       for (let j = 0; j < k; j++) {
//         sum += code[(i + j) % n];
//       }
//     } else {
//       for (let j = 0; j < -k; j++) {
//         sum += code[(i - j + n) % n];
//       }
//     }
//     result[i] = sum;
//   }
//   return result;
// };

// Done
// var addBinary = function(a, b) {
//   let carry = 0, result = '';
//   let i = a.length - 1, j = b.length - 1;

//   while (i >= 0 || j >= 0 || carry) {
//       const sum = (i >= 0 ? +a[i--] : 0) + (j >= 0 ? +b[j--] : 0) + carry;
//       result = (sum % 2) + result;
//       carry = Math.floor(sum / 2); 123

//   }

//   return result;
// };

// Done
// var shortestSubarray = function(nums, k) {
//   const n = nums.length;
//   const prefixSum = new Array(n + 1).fill(0);
//   for (let i = 0; i < n; i++) {
//     prefixSum[i + 1] = prefixSum[i] + nums[i];
//   }

//   let minLength = Infinity;
//   const deque = [];

//   for (let i = 0; i <= n; i++) {
//     while (deque.length > 0 && prefixSum[i] - prefixSum[deque[0]] >= k) {
//       minLength = Math.min(minLength, i - deque.shift());
//     }
//     while (deque.length > 0 && prefixSum[i] <= prefixSum[deque[deque.length - 1]]) {
//       deque.pop();
//     }
//     deque.push(i);
//   }

//   return minLength === Infinity ? -1 : minLength;
// };

// var deleteDuplicates = function(head) {
//     if (!head || !head.next) return head;

//     let current = head;

//     while (current && current.next) {
//         if (current.val === current.next.val) {
//             current.next = current.next.next;
//         } else {
//             current = current.next;
//         }
//     }

//     return head;
// };
// if (numSet.size === k) {
//     maxSum = Math.max(maxSum, currentSum);
// }
// var deleteDuplicates = function(head) {
//    if (!head || !head.next) return head;
//    let current = head;
//    while(current && current.next){
//     if (current.val === current.next.val) {
//       current.next = current.next.next;
//     }
//     else {
//       current = current.next;
//     }
//    }
//    return head;
// };

// var maximumSubarraySum = function (nums, k) {
//     if (!nums || nums.length < k) return 0;

//     let maxSum = 0;
//     let currentSum = 0;
//     let numSet = new Set();

//     for (let i = 0; i < k; i++) {
//       currentSum += nums[i];
//       numSet.add(nums[i]);
//     }

//     if (numSet.size === k) {
//       maxSum = currentSum;
//     }

//     for (let i = k; i < nums.length; i++) {
//       currentSum -= nums[i - k];
//       numSet.delete(nums[i - k]);
//       currentSum += nums[i];
//       numSet.add(nums[i]);

//       if (numSet.size === k) {
//         maxSum = Math.max(maxSum, currentSum);
//       }
//     }
//     return maxSum;
//   };
// console.log(maximumSubarraySum([9,9,9,1,2,3], 3));

// done with gpt
// var countUnguarded = function(m, n, guards, walls) {
//     const grid = Array(m).fill().map(() => Array(n).fill(0));
//     for (const [x, y] of guards) {
//         grid[x][y] = 1;
//     }
//     for (const [x, y] of walls) {
//         grid[x][y] = 2;
//     }
//     for (const [guardX, guardY] of guards) {
//         for (let x = guardX - 1; x >= 0; x--) {
//             if (grid[x][guardY] === 1 || grid[x][guardY] === 2) break;
//             grid[x][guardY] = 3;
//         }
//         for (let x = guardX + 1; x < m; x++) {
//             if (grid[x][guardY] === 1 || grid[x][guardY] === 2) break;
//             grid[x][guardY] = 3;
//         }
//         for (let y = guardY - 1; y >= 0; y--) {
//             if (grid[guardX][y] === 1 || grid[guardX][y] === 2) break;
//             grid[guardX][y] = 3;
//         }
//         for (let y = guardY + 1; y < n; y++) {
//             if (grid[guardX][y] === 1 || grid[guardX][y] === 2) break;
//             grid[guardX][y] = 3;
//         }
//     }
//     let unguarded = 0;
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (grid[i][j] === 0) unguarded++;
//         }
//     }
//     return unguarded;
// };

// Done with my friend
// var groupAnagrams = function (strs) {
//   const map = new Map();
//   for (let str of strs) {
//     const sorted = str.split("").sort().join("");
//     if (!map.has(sorted)) {
//       map.set(sorted, []);
//     }
//     map.get(sorted).push(str);
//   }

//   return Array.from(map.values());
// };
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// var partition = function (s) {
//   const result = [];
//   const path = [];

// done with gpt
//   function isPalindrome(str, start, end) {
//     while (start < end) {
//       if (str[start] !== str[end]) return false;
//       start++;
//       end--;
//     }
//     return true;
//   }
//   function backtrack(start) {
//     if (start >= s.length) {
//       result.push([...path]);
//       return;
//     }
//     for (let end = start; end < s.length; end++) {
//       if (isPalindrome(s, start, end)) {
//         path.push(s.substring(start, end + 1));
//         backtrack(end + 1);
//         path.pop();
//       }
//     }
//   }
//   backtrack(0);
//   return result;
// };
// console.log(partition("aab"));

// var isValidSudoku = function (board) {
//   for (let i = 0; i < 9; i++) {
//     const rowSet = new Set();
//     for (let j = 0; j < 9; j++) {
//       if (board[i][j] !== ".") {
//         if (rowSet.has(board[i][j])) return false;
//         rowSet.add(board[i][j]);
//       }
//     }
//   }

//   for (let j = 0; j < 9; j++) {
//     const colSet = new Set();
//     for (let i = 0; i < 9; i++) {
//       if (board[i][j] !== ".") {
//         if (colSet.has(board[i][j])) return false;
//         colSet.add(board[i][j]);
//       }
//     }
//   }

//   for (let box = 0; box < 9; box++) {
//     const boxSet = new Set();
//     const rowStart = Math.floor(box / 3) * 3;
//     const colStart = (box % 3) * 3;
//     for (let i = rowStart; i < rowStart + 3; i++) {
//       for (let j = colStart; j < colStart + 3; j++) {
//         if (board[i][j] !== ".") {
//           if (boxSet.has(board[i][j])) return false;
//           boxSet.add(board[i][j]);
//         }
//       }
//     }
//   }

//   return true;
// };
// let test = [
//   [".", ".", "4", ".", ".", ".", "6", "3", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   ["5", ".", ".", ".", ".", ".", ".", "9", "."],
//   [".", ".", ".", "5", "6", ".", ".", ".", "."],
//   ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
//   [".", ".", ".", "7", ".", ".", ".", ".", "."],
//   [".", ".", ".", "5", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
// ];
// console.log(isValidSudoku(test));

// Done
// var isAnagram = function(s, t) {
//   return t.split("").sort().join("") === s.split("").sort().join("")
// };

// console.log(isAnagram("anagram","nagaram"));

// Array.prototype.moveZeroes = function () {
//   let nonZeroIndex = 0;
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] !== 0) {
//       this[nonZeroIndex] = this[i];
//       nonZeroIndex++;
//     }
//   }
//   for (let i = nonZeroIndex; i < this.length; i++) {
//     this[i] = 0;
//   }
//   return this;
// };
// console.log([0, 1, 0, 3, 12].moveZeroes()); // [ 1, 3, 12, 0, 0 ]

// Done
// var isIsomorphic = function(s, t) {
//     if (s.length !== t.length) return false;
//     let sMap = new Map();
//     let tMap = new Map();
//     for (let i = 0; i < s.length; i++) {
//         if (!sMap.has(s[i]) && !tMap.has(t[i])) {
//             sMap.set(s[i], t[i]);
//             tMap.set(t[i], s[i]);
//         } else if (sMap.get(s[i]) !== t[i] || tMap.get(t[i]) !== s[i]) {
//             return false;
//         }
//     }
//     return true;
// };

// var reverseVowels = function(s) {
//   const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   let chars = s.split('');
//   let left = 0;
//   let right = s.length - 1;

//   for (; left < right;) {
//     for (; left < right && !vowels.includes(chars[left]); left++) {}
//     for (; left < right && !vowels.includes(chars[right]); right--) {}

//     [chars[left], chars[right]] = [chars[right], chars[left]];
//     left++;
//     right--;
//   }

//   return chars.join('');
// };
// console.log(reverseVowels('IceCreAm')); // "IcreCeAm"

// done
// var reverseWords = function(s) {
//     return s.split(' ')
//         .map(word => word.split('').reverse().join(''))
//         .join(' ');
// };

// var rotateTheBox = function (box) {
//   const m = box.length;
//   const n = box[0].length;
//   let rotated = Array(n)
//     .fill()
//     .map(() => Array(m).fill("."));
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       rotated[j][m - 1 - i] = box[i][j];
//     }
//   }
//   for (let col = 0; col < m; col++) {
//     let bottom = n - 1;
//     for (let row = n - 1; row >= 0; row--) {
//       if (rotated[row][col] === "#") {
//         if (row !== bottom) {
//           rotated[bottom][col] = "#";
//           rotated[row][col] = ".";
//         }
//         bottom--;
//       } else if (rotated[row][col] === "*") {
//         bottom = row - 1;
//       }
//     }
//   }
//   return rotated;
// };

// Done
// var fizzBuzz = function(n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             result.push("FizzBuzz");
//         } else if (i % 3 === 0) {
//             result.push("Fizz");
//         } else if (i % 5 === 0) {
//             result.push("Buzz");
//         } else {
//             result.push(i.toString());
//         }
//     }
//     return result;
// };

// let x = 10.333;
// // Math.round(x) // butun son chiqarish uchun

// console.log(Math.round(x));

// var thirdMax = function(nums) {
//     let first = -Infinity;
//     let second = -Infinity;
//     let third = -Infinity;

//     for (let num of nums) {
//         if (num === first || num === second || num === third) continue;

//         if (num > first) {
//             third = second;
//             second = first;
//             first = num;
//         } else if (num > second) {
//             third = second;
//             second = num;
//         } else if (num > third) {
//             third = num;
//         }
//     }

//     return third === -Infinity ? first : third;
// };
// console.log(thirdMax([2,2,3,1]));

// var join = function (arr1, arr2) {
//   let combinedArr = [arr1, arr2].flat();
//   let map = new Map();
//   combinedArr.forEach((obj) => {
//     if (map.has(obj.id)) {
//       let existingObj = map.get(obj.id);
//       Object.assign(existingObj, obj);
//     } else {
//       map.set(obj.id, { ...obj });
//     }
//   });

//   return Array.from(map.values());
// };

// console.log(
//   join(
//     [
//       { id: 1, x: 2, y: 3 },
//       { id: 2, x: 3, y: 6 },
//     ],
//     [
//       { id: 2, x: 10, y: 20 },
//       { id: 3, x: 0, y: 0 },
//     ]
//   )
// );
// var join = function(arr1, arr2) {
//     let combinedArr = [...arr1, ...arr2];
//     let map = new Map();

//     for (let obj of combinedArr) {
//         if (map.has(obj.id)) {
//             Object.assign(map.get(obj.id), obj);
//         } else {
//             map.set(obj.id, {...obj});
//         }
//     }

//     return Array.from(map.values()).sort((a, b) => a.id - b.id);
// }
// console.log('A' == "a");

// var numJewelsInStones = function (jewels, stones) {
//   let count = 0;
//   for (let jewel of jewels) {
//     for (let stone of stones) {
//       if (jewel === stone) {
//         count++;
//       }
//     }
//   }

//   return count;
// };
// console.log(numJewelsInStones("z", "ZZ"));

// done
// var mostCommonWord = function (paragraph, banned) {
//   const bannedSet = new Set(banned);
//   let words = paragraph
//     .toLowerCase()
//     .replace(/[^a-z\s]/g, "")
//     .trim()
//     .split(/\s+/);
//   const map = new Map();

//   for (let word of words) {
//     if (!bannedSet.has(word)) {
//       map.set(word, (map.get(word) || 0) + 1);
//     }
//   }
//   let maxCount = 0;
//   let mostCommon = "";

//   for (let [word, count] of map) {
//     if (count > maxCount) {
//       maxCount = count;
//       mostCommon = word;
//     }
//   }

//   return mostCommon;
// };
// console.log(
//   mostCommonWord("..Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])
// );

// var numUniqueEmails = function (emails) {
//   const uniqueEmails = new Set();
//   for (let email of emails) {
//     let [local, domain] = email.split("@");
//     local = local.split("+")[0];
//     local = local.replace(/\./g, "");
//     const normalizedEmail = local + "@" + domain;
//     uniqueEmails.add(normalizedEmail);
//   }
//   return uniqueEmails.size;
// };

// Done with
// var findChampion = function (n, edges) {
//   const inDegree = new Array(n).fill(0),
//     graph = Array.from({ length: n }, () => []);

//   for (const [a, b] of edges) {
//     inDegree[b]++;
//     graph[a].push(b);
//   }

//   const candidate = inDegree.indexOf(0);
//   if (inDegree.filter((x) => x === 0).length !== 1) return -1;

//   const visited = new Set();
//   const dfs = (node) => {
//     if (visited.has(node)) return;
//     visited.add(node);
//     for (const next of graph[node]) dfs(next);
//   };

//   dfs(candidate);
//   return visited.size === n ? candidate : -1;
// };
// console.log(
//   findChampion(3, [[0,1],[1,2]])
// );

// var map = function(arr, fn) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//       result.push(fn(arr[i], i));
//   }
//   return result;
// };
// console.log(map([1,2,3],(num) => num * 2));

// var reduce = function(nums, fn, init) {
//     let accumulator = init !== undefined ? init : nums[0];
//     let startIndex = init !== undefined ? 0 : 1;
//     for (let i = startIndex; i < nums.length; i++) {
//       accumulator = fn(accumulator, nums[i], i, nums);
//     }

//     return accumulator;
// };

// SortBy
// var sortBy = function(arr, fn) {
//     return arr.sort((a, b) => fn(a) - fn(b))
// };
// console.log(sortBy([{"x": 1}, {"x": 0}, {"x": -1}],  fn = (d) => d.x));

// Done
// var findWordsContaining = function(words, x) {
//     let indices = words.reduce((acc, word, index) => {
//         if (word.includes(x)) acc.push(index);
//         return acc;
//     }, []);
//    return indices;
// };
// console.log(findWordsContaining(["leet","code"], "e"));

// var defangIPaddr = function (address) {
//   if (address.includes(" .")) {
// return address.replaceAll(".", "[.]");
//   } else {
//     return address.replaceAll("[.]", ".");
//   }
// };
// console.log(defangIPaddr("255.100.50.0"));

// var finalValueAfterOperations = function(operations) {
//     let result = 0
//     for (let op of operations) {
//         if (op === '++X' || op === 'X++') {
//             result++;
//         }else if (op == '--X' || op === 'X--' ) {
//             result--;
//         }
//     }
//     return result;
// };
// console.log(finalValueAfterOperations(["--X","X++","X++"]));

// var balancedStringSplit = function(s) {
//     let balance = 0;
//     let count = 0;
//     for (let char of s) {
//         if (char === 'R') {
//             balance++;
//         } else if (char === 'L') {
//             balance--;
//         }
//         if (balance === 0) {
//             count++;
//         }
//     }
//     return count;
// };
// console.log(balancedStringSplit("RLRRRLLRLL"))

//  Done
// var removeOuterParentheses = function (s) {
//   let result = "";
//   let openCount = 0;
//   for (let char of s) {
//     if (char === "(") {
//       if (openCount > 0) {
//         result += char;
//       }
//       openCount++;
//     } else if (char === ")") {
//       openCount--;
//       if (openCount > 0) {
//         result += char;
//       }
//     }
//   }

//   return result;
// };

// Done
// var removeTrailingZeros = function(num) {
//     return num.replace(/0+$/,'');
// };
// console.log(removeTrailingZeros("51230100"));

// var splitWordsBySeparator = function(words, separator) {
//     return words.join(separator).split(separator).filter(Boolean);
// };
// console.log(splitWordsBySeparator(["$easy$","$problem$"], "$"));

// var clearDigits = function(s) {
//     // If the string contains any digits, return an empty string
//     if (/\d/.test(s)) {
//         return '';
//     }
//     return s;
// };
// console.log(clearDigits("abc123def456"));  // Output: "abcdef"
// console.log(clearDigits("a1b2c3"));        // Output: "abc"
// console.log(clearDigits("cb34"));         // Output: ""
// console.log(clearDigits("abc"));

// 100 st problem set 👌
// var numIdenticalPairs = function(nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 count++;
//             }
//         }
//     }
//     return count;
// };

// var minimumObstacles = function (grid) {
//   const rows = grid.length;
//   const cols = grid[0].length;
//   const directions = [
//     [0, 1],
//     [1, 0],
//     [0, -1],
//     [-1, 0],
//   ];
//   const pq = [[0, 0, 0]];
//   const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

//   while (pq.length > 0) {
//     pq.sort((a, b) => a[0] - b[0]);
//     const [obstacleCount, r, c] = pq.shift();
//     if (r === rows - 1 && c === cols - 1) return obstacleCount;
//     if (visited[r][c]) continue;
//     visited[r][c] = true;
//     for (const [dr, dc] of directions) {
//       const newRow = r + dr;
//       const newCol = c + dc;
//       if (
//         newRow >= 0 &&
//         newRow < rows &&
//         newCol >= 0 &&
//         newCol < cols &&
//         !visited[newRow][newCol]
//       ) {
//         pq.push([obstacleCount + grid[newRow][newCol], newRow, newCol]);
//       }
//     }
//   }
//   return -1;
// };

// let test = [[0,1,1],[1,1,0],[1,1,0]];
// console.log(minimumObstacles([[0,1,1],[1,1,0],[1,1,0]]));

// Didn't done
// var validStrings = function (n) {
//   const result = [];
//   const dfs = (current) => {
//     if (current.length === n) {
//       if (current.includes("1")) {
//         result.push(current);
//       }
//       return;
//     }
//     dfs(current + "0");
//     dfs(current + "1");
//   };
//   dfs("1");
//   return result;
// };
// console.log(validStrings(0));

// didn't
// var canAliceWin = function (nums) {
//   const n = nums.length;
//   const memo = new Map();
//   const dfs = (l, r, turn) => {
//     const key = `${l}-${r}-${turn}`;
//     if (memo.has(key)) return memo.get(key);
//     if (l > r) return 0;
//     if (turn === 0) {
//       const chooseLeft = nums[l] + dfs(l + 1, r, 1);
//       const chooseRight = nums[r] + dfs(l, r - 1, 1);
//       memo.set(key, Math.max(chooseLeft, chooseRight));
//     } else {
//       const chooseLeft = dfs(l + 1, r, 0);
//       const chooseRight = dfs(l, r - 1, 0);
//       memo.set(key, Math.min(chooseLeft, chooseRight));
//     }
//     return memo.get(key);
//   };
//   const aliceScore = dfs(0, n - 1, 0);
//   const totalScore = nums.reduce((a, b) => a + b, 0);
//   return aliceScore > totalScore / 2;
// };

// // Example:
// console.log(canAliceWin([1, 5, 2]));
// console.log(canAliceWin([7, 8, 3, 4]));

// Done
// var finalPositionOfSnake = function(n, commands) {
//     let row = 0, col = 0;
//     for (const command of commands) {
//         if (command === "UP") {
//             row -= 1;
//         } else if (command === "DOWN") {
//             row += 1;
//         } else if (command === "LEFT") {
//             col -= 1;
//         } else if (command === "RIGHT") {
//             col += 1;
//         }
//     }
//     return row * n + col;
// };

// 1790

// var areAlmostEqual = function(s1, s2) {
//     if (s1.length !== s2.length) return false;
//     if (s1 === s2) return true;
//     let res = [];
//     for (let i = 0; i < s1.length; i++) {
//         if (s1[i] !== s2[i]) {
//             res.push(i);
//         }
//     }
//     return res.length === 2 && s1[res[0]] === s2[res[1]] && s1[res[1]] === s2[res[0]];
// };

// console.log(areAlmostEqual("npv", "zpn"))

// Dayly 3174. Clear Digits
// var clearDigits = function(s) {
//     let stack = [];
//     for (let char of s) {
//         if (/\d/.test(char)) {
//             if (stack.length > 0) stack.pop();
//         } else {
//             stack.push(char);
//         }
//     }
//     return stack.join('');
// };

// var removeOccurrences = function(s: string, part: string) {
//     while (s.includes(part)) {
//         s = s.replace(part, '');
//     }
//     return s;
// };
// console.log(removeOccurrences("aabababa", "aba"));

// class Solution {
//   public String removeOccurrences(String s, String part) {
//         while (s.contains(part)) { // Use contains() instead of includes()
//             s = s.replaceFirst(part, ""); // Replace only the first occurrence
//         }
//         return s;
//     }
// }

// 2161. Partition Array According to Given Pivot
// var pivotArray = function (nums, pivot) {
//   let left = [];
//   let middle = [];
//   let right = [];

//   for (let num of nums) {
//     if (num < pivot) {
//       left.push(num);
//     } else if (num === pivot) {
//       middle.push(num);
//     } else {
//       right.push(num);
//     }
//   }

//   return [...left, ...middle, ...right];
// };

// 2529 dayly
// var maximumCount = function (nums) {
//   let positiveCount = 0;
//   let negativeCount = 0;

//   for (let num of nums) {
//     if (num > 0) {
//       positiveCount++;
//     } else if (num < 0) {
//       negativeCount++;
//     }
//   }
//   return Math.max(positiveCount, negativeCount);
// };
// console.log(maximumCount([-1, -2, -3, 4, 5, 15]));

// 2634
// var filter = function (arr, fn) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i, arr)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };
// const arr1 = [0, 10, 20, 30];
// const fn1 = function greaterThan10(n) {
//   return n > 10;
// };
// console.log(filter(arr1, fn1));

// 2629 done
// var compose = function(functions) {
//     return function(x) {
//         return functions.reduceRight((acc, fn) => fn(acc), x);
//     }
// };

// Once done
// var once = function(fn) {
//     return function(...args){
//         if (fn) {
//             let result = fn(...args);
//             fn = null;
//             return result;
//         }
//     }
// };

// 2623
// function memoize(fn) {
//     const cache = {};
//     return function(...args) {
//         let key = JSON.stringify(args);
//         if ( key in cache) {
//             return cache[key];
//         }
//         return cache[key] = fn(...args);
//     }
// }

// 2723
// async function sleep(millis) {
//     return new Promise(resolve => setTimeout(resolve, millis));
// }

// 2715
// var cancellable = function(fn, args, t) {
//     let timer = setTimeout(() => fn(...args), t);
//     return function() {
//         clearTimeout(timer);
//     }
// };

// function cancellable(fn, args, t) {
//     let time = 0;
//     const result = [];

//     function execute() {
//         result.push({ time, returned: fn(...args) });
//         time += t;
//         timer = setTimeout(execute, t);
//     }

//     let timer = setTimeout(execute, 0); // Start immediately
//     return function cancel() {
//         clearTimeout(timer);
//     };
// }

// 2637 with gpt
// var timeLimit = function(fn, t) {
//     return async function(...args) {
//         return new Promise((resolve, reject) => {
//             const timer = setTimeout(() => reject("Time Limit Exceeded"), t);
//             fn(...args)
//                 .then(res => {
//                     clearTimeout(timer);
//                     resolve(res);
//                 })
//                 .catch(err => {
//                     clearTimeout(timer);
//                     reject(err);
//                 });
//         });
//     };
// };

// debounce
// var debounce = function(fn, t) {
//     let timeout;

//     return function(...args) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => fn(...args), t);
//     };
// };

// chunk
// var chunk = function(arr, size) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size));
//     }
//     return result;
// };

// 2631
// Array.prototype.groupBy = function(fn) {
//         return this.reduce((acc, item) => {
//             const key = fn(item);
//             if (!acc[key]) {
//                 acc[key] = [];
//             }
//             acc[key].push(item);
//             return acc;
//         }, {});
// };
