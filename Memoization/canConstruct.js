// Recursive function that returns a boolean indicating whether or not the target can be constructed by concatenating elements of the wordBank array
// canConstruct(target: string, wordBank: string[], memo: {string: boolean}): boolean
const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for (word of wordBank) {
        // Use indexOf() to check if the word starts from index 0
        if (target.indexOf(word) === 0) {
            // Use slice() to remove the prefix
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }

    memo[target] = false;
    return false;
}

// m = target.length, n = wordBank.length

// Before Memoization
// Time Complexity: O((n^m) * m)
// Space Complexity: O(m^2)

// After Memoization
// Time Complexity: O(n * (m^2))
// Space Complexity: O(m^2)


console.log(canConstruct('abcdef', ['a', 'abc', 'de', 'f']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// This took a while to run before using memoization!
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eee', 'eeeee', 'eeeeeeeee', 'eeeeee']));