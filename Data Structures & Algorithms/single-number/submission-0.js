class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        const newMap = new Map();
        let total = 0;
        for (let i = 0;i<nums.length;i++){
            if(newMap.has(nums[i])){
                total-=nums[i];
            } else {
                newMap.set(nums[i],i);
                total+=nums[i];
            }
        }
        return total;
    }
}
