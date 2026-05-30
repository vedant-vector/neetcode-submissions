class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let final = 0;
        let internal = 0;
        for(let i=0;i<nums.length;i++){
            if(nums[i] === 0){
                final = final > internal ? final : internal;
                if(nums[i+1] === 1){
                    internal = 0;
                }
            } else {
                internal++;
            }
        }
        return final > internal ? final : internal;
    }
}
