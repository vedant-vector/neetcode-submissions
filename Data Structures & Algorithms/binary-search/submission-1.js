class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        
        let left = 0;
        let right = nums.length - 1;
        let index;
        while(left <= right){
            index = Math.floor((left+right)/2);
            if(nums[index] === target){
                return index;
            }else if(nums[index] > target){
                right = index - 1;
            } else {
                left = index +1 ;
            }
        }
        return -1;
    }
}
