class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0,j= i+1;i<=nums.length;j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            } else if(j === nums.length - 1){
                i++,j=i;
            }
        }
    }
}
