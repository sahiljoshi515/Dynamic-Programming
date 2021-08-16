// You are climbing a staircase. It takes n steps to reach the top. 
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Iterative function which returns the number of distinct ways you can climb to the top. (nth number)
// climbStairs(n: number): number
const climbStairs = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n === 2) return 2;
    if (n <= 1) return 1;

    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
}

// Before Memoization
// Time Complexity: O(2^n)
// Space Complexity: O(n)

// After Memoization
// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(climbStairs(5));
console.log(climbStairs(8));
console.log(climbStairs(15));
console.log(climbStairs(45)); // This took a while to run before using memoization!