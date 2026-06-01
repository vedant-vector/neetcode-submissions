class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let total = (nums.length * (nums.length + 1))/2;
        let internalTotal = 0;
        for(let i=0;i<nums.length;i++){
            internalTotal+=nums[i];
        }
        return total-internalTotal;
    }
}
