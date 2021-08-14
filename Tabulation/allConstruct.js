// Iterative function that returns a 2D array containing all the ways that the target can be constructed by concatenating elements of the wordBank array
// allConstruct(target: string, wordBank: string[]): string[][]
const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill().map(() => []);
    table[0] = [[]];

    for (let i = 0; i <= target.length; ++i) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const combinations = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...combinations);
            }
        }
    }

    return table[target.length];
}

// m = target.length, n = wordBank.length

// Time Complexity: O(n^m)
// Space Complexity: O(n^m)

console.log(allConstruct('abcdef', ['a', 'abc', 'de', 'f'])); // [ [ 'abc', 'de', 'f' ] ]
console.log(allConstruct('purple', ['purp', 'le', 'p', 'urp'])); // [['purp', 'le'], ['p', 'urp', 'le']]
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // []