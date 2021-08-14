// Recursive function for finding the nth Fibonacci number
// fibonacci(n: number, memo: {number: number}): number
const fibonacci = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n < 1) return 0;
    if (n === 2 || n === 1) return 1;

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

// Before Memoization
// Time Complexity: O(2^n)
// Space Complexity: O(n)

// After Memoization
// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(100)); // This took a while to run before using memoization!
