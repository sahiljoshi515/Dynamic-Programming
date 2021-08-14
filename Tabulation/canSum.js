// Iterative function that returns a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array
// canSum(targetSum: number, numbers: number[]): boolean
const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= targetSum; ++i) {
        if (table[i]) {
            for (let j = 0; j < numbers.length; ++j) {
                if (i + numbers[j] <= targetSum) table[i + numbers[j]] = true;
            }
        }
    }

    return table[targetSum];
}

// m = targetSum, n = numbers.length

// Time Complexity: O(n * m)
// Space Complexity: O(m)

console.log(canSum(10, [2, 5])); // true
console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false