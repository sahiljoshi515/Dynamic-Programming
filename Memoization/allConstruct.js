// Recursive function that returns a 2D array containing all the ways that the target can be constructed by concatenating elements of the wordBank array
// allConstruct(target: string, wordBank: string[], memo: {string: string[][]}): string[][]
const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
        // Use indexOf() to check if the word starts from index 0
        if (target.indexOf(word) === 0) {
            // Use slice() to remove the prefix
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

    memo[target] = result;
    return result;
}

// m = target.length, n = wordBank.length

// Time Complexity: O(n^m)
// Space Complexity: O(n^m)

console.log(allConstruct('abcdef', ['a', 'abc', 'de', 'f']));
console.log(allConstruct('purple', ['purp', 'le', 'p', 'urp']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// This crashes the program since this problem will have exponential time complexity no matter which approach you take!
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eee', 'eeeee', 'eeeeeeeee', 'eeeeee']));