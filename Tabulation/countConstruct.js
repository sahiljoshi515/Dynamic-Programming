// Iterative function to find the number of ways target can be constructed by concatenating elements of the wordBank array
// countConstruct(target: string, wordBank: string[]): number
const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; ++i) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }

    return table[target.length];
}

// m = target.length, n = wordBank.length

// Time Complexity: O(n * (m^2))
// Space Complexity: O(m)

console.log(countConstruct('abcdef', ['a', 'abc', 'de', 'f'])); // 1
console.log(countConstruct('purple', ['purp', 'le', 'p', 'urp'])); // 2
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0