// Iterative function that returns a boolean indicating whether or not the target can be constructed by concatenating elements of the wordBank array
// canConstruct(target: string, wordBank: string[]): boolean
const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; ++i) {
        if (table[i]) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }

    return table[target.length];
}

// m = target.length, n = wordBank.length

// Time Complexity: O(n * (m^2))
// Space Complexity: O(m)

console.log(canConstruct('abcdef', ['a', 'abc', 'de', 'f'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eee', 'eeeee', 'eeeeeeeee', 'eeeeee'])); // false