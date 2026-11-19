class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums) {
        let pair = 0;
        for(let i=0;i<nums.length;i++){
            if(nums[i]>nums[i+1]){
                pair++;
            }
        }
        if(nums[nums.length-1]>nums[0]){
            pair++;
        }

        return pair === 1
    }
}
