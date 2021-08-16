// You are given an integer array nums. 
// You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.
// canJump(nums: number[]): boolean
const canJump = (nums) => {
    let reachable = 0;

    for (let i = 0; i < nums.length; ++i) {
        if (reachable < i) {
            return false;
        }
        reachable = Math.max(reachable, i + nums[i]);
    }

    return true;
}

// n = nums.length

// Time complexity: O(n)
// Space complexity: O(1)

console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([2, 0])); // true
console.log(canJump([2, 5, 0, 0])); // true
