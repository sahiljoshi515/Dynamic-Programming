// Iterative function that will return an array containing the shortest combination of numbers that add up exactly to the targetSum
// bestSum(targetSum: number, numbers: number[]): number[] | null
const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; ++i) {
        if (table[i] !== null) {
            for (let num of numbers) {
                if (!table[i + num] || (i + num <= targetSum && table[i + num].length > [...table[i], num].length)) {
                    table[i + num] = [...table[i], num];
                }
            }
        }
    }

    return table[targetSum];
}

// m = targetSum, n = numbers.length

// Time Complexity: O(n * (m^2))
// Space Complexity: O(m^2)

console.log(bestSum(7, [2, 3, 4])); // [ 3, 4 ]
console.log(bestSum(10, [2, 5, 4])); // [ 5, 5 ]
console.log(bestSum(7, [2, 4])); // null
console.log(bestSum(100, [1, 2, 5, 25])); // [ 25, 25, 25, 25 ]
console.log(bestSum(8, [2, 3, 5])); // [[ 3, 5 ]





