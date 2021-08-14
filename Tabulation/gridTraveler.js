// Iterative function for solving the Grid Traveler problem
// We need to find the number of ways a traveler can reach the bottom right corner from the top left corner by only being able to move bottom or right.
// gridTraveler(m: number, n: number): number
const gridTraveler = (m, n) => {
    const table = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    table[1][1] = 1;

    for (let i = 0; i <= m; ++i) {
        for (let j = 0; j <= n; ++j) {
            const current = table[i][j];
            if (j + 1 <= n) table[i][j + 1] += current;
            if (i + 1 <= m) table[i + 1][j] += current;
        }
    }

    return table[m][n];
}

// Time Complexity: O(n * m)
// Space Complexity: O(n + m)

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220

