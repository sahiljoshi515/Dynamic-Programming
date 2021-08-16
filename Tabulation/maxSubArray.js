// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.
// maxSubArray(nums: number[]): number
const maxSubArray = (nums) => {
    const table = Array(nums.length);
    let max = nums[0];
    table[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        table[i] = Math.max(nums[i], nums[i] + table[i - 1]);
        max = Math.max(table[i], max);
    }

    return max;
}

// n = nums.length

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23