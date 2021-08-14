// Recursive function that returns an array containing any combination of elements that add up to exactly the targetSum
// howSum(targetSum: number, numbers: number[], memo: {number: number[] | null}): number[] | null
const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const result = howSum(remainder, numbers, memo);
        if (result !== null) {
            memo[targetSum] = [...result, num];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null;
    return null;
}

// m = targetSum, n = numbers.length

// Before Memoization
// Time Complexity: O((n^m) * 2)
// Space Complexity: O(m)

// After Memoization
// Time Complexity: O(n * (m^2))
// Space Complexity: O(m^2)

console.log(howSum(10, [2, 3, 4, 5]));
console.log(howSum(7, [2, 4]));
console.log(howSum(21, [2, 3, 7, 10]));
console.log(howSum(300, [7, 14])); // This took a while to run before using memoization!