// Recursive function that returns a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array
// canSum(targetSum: number, numbers: number[], memo: {number: boolean}): boolean
const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
}

// m = targetSum, n = numbers.length

// Before Memoization
// Time Complexity: O(n^m)
// Space Complexity: O(m)

// After Memoization
// Time Complexity: O(n * m)
// Space Complexity: O(m)

console.log(canSum(4, [2]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(7, [2, 4]));
console.log(canSum(7, [2, 4, 7]));
console.log(canSum(300, [7, 14])); // This took a while to run before using memoization!
