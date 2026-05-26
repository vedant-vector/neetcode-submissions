class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        const mapping = new Map();
        for (let i =0; i<nums.length;i++){
            if(!mapping.has(nums[i])){
                mapping.set(nums[i],i);
            } else {
               nums.splice(i,1)
               --i;
           }
        }
        return mapping.size;
    }
}
