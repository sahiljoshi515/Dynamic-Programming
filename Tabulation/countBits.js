// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
// countBits(n: number): number[]
const countBits = (n) => {
    const table = Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        table[i] = table[i >> 1] + (i % 2);
    }

    return table;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(countBits(2)); // [ 0, 1, 1 ]
console.log(countBits(5)); // [ 0, 1, 1, 2, 1, 2 ]
console.log(countBits(8)); // [ 0, 1, 1, 2, 1, 2, 2, 3, 1 ]
