// Iterative function that returns an array containing any combination of elements that add up to exactly the targetSum
// howSum(targetSum: number, numbers: number[]): number[] | null
const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);

    table[0] = [];

    for (let i = 0; i <= targetSum; ++i) {
        if (table[i] !== null) {
            for (let num of numbers) {
                if (i + num <= targetSum) table[i + num] = [...table[i], num];
            }
        }
    }

    return table[targetSum];
}

// m = targetSum, n = numbers.length

// Time Complexity: O(n * (m^2))
// Space Complexity: O(m^2)

console.log(howSum(7, [2, 3, 4])); // [ 3, 2, 2 ]
console.log(howSum(10, [2, 5, 4])); // [ 2, 2, 2, 2, 2 ]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(300, [14, 7])); // null
console.log(howSum(8, [2, 3, 5])); // [ 2, 2, 2, 2 ]






