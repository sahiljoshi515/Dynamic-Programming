// Iterative function for finding the nth Fibonacci number
// fibonacci(n: number): number
const fibonacci = (n) => {
    if (n < 0) return 0;

    const table = Array(n + 1).fill(0);
    table[1] = 1;

    for (let i = 2; i <= n; ++i) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[n];
}

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(8)); // 21
console.log(fibonacci(50)); // 12586269025




