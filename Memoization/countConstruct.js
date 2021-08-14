// Recursive function to find the number of ways target can be constructed by concatenating elements of the wordBank array
// countConstruct(target: string, wordBank: string[], memo: {string: numebr}): number
const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let count = 0;

    for (let word of wordBank) {
        // Use indexOf() to check if the word starts from index 0
        if (target.indexOf(word) === 0) {
            // Use slice() to remove the prefix
            const suffix = target.slice(word.length);
            const result = countConstruct(suffix, wordBank, memo);
            count += result;
        }
    }

    memo[target] = count;
    return count;
}

// m = target.length, n = wordBank.length

// Before Memoization
// Time Complexity: O((n^m) * m)
// Space Complexity: O(m^2)

// After Memoization
// Time Complexity: O(n * (m^2))
// Space Complexity: O(m^2)

console.log(countConstruct('abcdef', ['a', 'abc', 'de', 'f']));
console.log(countConstruct('purple', ['purp', 'le', 'p', 'urp']));
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// This took a while to run before using memoization!
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eee', 'eeeee', 'eeeeeeeee', 'eeeeee']));