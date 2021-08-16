/*
A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"

To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). 
For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The answer is guaranteed to fit in a 32-bit integer.

*/
// decodeWays(s: string): number
const decodeWays = (s) => {
    const table = Array(s.length + 1).fill(0);
    table[0] = 1;
    table[1] = s.charAt(0) === '0' ? 0 : 1;

    for (let i = 2; i <= s.length; ++i) {
        let oneDigit = Number(s.slice(i - 1, i));
        let twoDigit = Number(s.slice(i - 2, i));

        if (oneDigit >= 1 && oneDigit <= 9) {
            table[i] += table[i - 1];
        }

        if (twoDigit >= 10 && twoDigit <= 26) {
            table[i] += table[i - 2];
        }
    }

    return table[s.length];
}

// n = s.length

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(decodeWays('12')); // 2
console.log(decodeWays('226')); // 3
console.log(decodeWays('06')); // 0
console.log(decodeWays('678')); // 1
