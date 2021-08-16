// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.
// coinChange(coins: number[], amount: number): number
const coinChange = (coins, amount) => {
    const table = Array(amount + 1).fill(amount + 1);
    table[0] = 0;

    for (let i = 0; i <= amount; ++i) {
        for (let coin of coins) {
            if (i >= coin) {
                table[i] = Math.min(table[i], 1 + table[i - coin]);
            }
        }
    }

    return table[amount] > amount ? -1 : table[amount];
}

// m = amount, n = coins.length

// Time Complexity: O(n * m)
// Space Complexity: O(m)

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1, 2], 2)); // 1