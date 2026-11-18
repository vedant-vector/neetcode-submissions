class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mapping = new Map();
        for(let i = 0; i<nums.length;i++){
            if(mapping.has(nums[i])){
                return true;
            } else{
                mapping.set(nums[i],i)
            }
        }
        return false;
    }
}
