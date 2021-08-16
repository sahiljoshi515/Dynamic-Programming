// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Your goal is to reach the last index in the minimum number of jumps.
// You can assume that you can always reach the last index.
// minJump(nums: number[]): number
const minJump = (nums) => {
    let jump = 0;
    let end = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; ++i) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i === end) {
            jump++;
            end = farthest;
        }
    }

    return jump;
}

// n = nums.length

// Time Complexity: O(n)
// Space Complexity: O(1)

console.log(minJump([2, 3, 1, 1, 4])); // 2
console.log(minJump([2, 3, 0, 1, 4])); // 2
