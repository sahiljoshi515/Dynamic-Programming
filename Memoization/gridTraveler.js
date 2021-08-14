// Recursive function for solving the Grid Traveler problem
// We need to find the number of ways a traveler can reach the bottom right corner from the top left corner by only being able to move bottom or right.
// gridTraveler(m: number, n: number, memo: {string: number}): number
const gridTraveler = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
}

// Before Memoization
// Time Complexity: O(2^(n + m))
// Space Complexity: O(n + m)

// After Memoization
// Time Complexity: O(n * m)
// Space Complexity: O(n + m)

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(36, 36)); // This took a while to run before using memoization!