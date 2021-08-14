// Recursive function that will return an array containing the shortest combination of numbers that add up exactly to the targetSum
// bestSum(targetSum: number, numbers: number[], memo: {number: number[] | null}): number[] | null
const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let finalCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const result = bestSum(remainder, numbers, memo);
        if (result !== null) {
            const combination = [...result, num];
            if (finalCombination === null || finalCombination.length > combination.length) {
                finalCombination = combination;
            }
        }
    }

    memo[targetSum] = finalCombination;
    return finalCombination;
}

// m = targetSum, n = numbers.length

// Before Memoization
// Time Complexity: O((n^m) * m)
// Space Complexity: O(m^2)

// After Memoization
// Time Complexity: O(n * (m^2))
// Space Complexity: O(m^2)

console.log(bestSum(10, [2, 3, 4, 5]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(21, [2, 3, 7, 10]));
console.log(bestSum(100, [1, 2])); // This took a while to run before using memoization!