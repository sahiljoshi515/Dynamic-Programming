// You are climbing a staircase. It takes n steps to reach the top. 
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Iterative function which returns the number of distinct ways you can climb to the top. (nth number)
// climbStairs(n: number): number
const climbStairs = (n) => {
    const table = Array(n + 1).fill(0);
    table[0] = 1;
    table[1] = 1;

    for (let i = 2; i <= n; ++i) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[n];
}

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(climbStairs(8)); // 34
console.log(climbStairs(10)); // 89
console.log(climbStairs(45)); // 1836311903
