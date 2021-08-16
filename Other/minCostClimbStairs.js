// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. 
// Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.
// minCostClimbStairs(cost: number[]): number
const minCostClimbStairs = (cost) => {
    for (let i = 2; i < cost.length; i++) {
        cost[i] += Math.min(cost[i - 1], cost[i - 2]);
    }

    return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
}

// n = cost.length

// Time Complexity: O(n)
// Space Complexity: O(1)

console.log(minCostClimbStairs([10, 15, 20])); // 15
console.log(minCostClimbStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
console.log(minCostClimbStairs([1, 1, 2, 4, 6, 2, 4, 10])); // 11