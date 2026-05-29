class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        for(let i =0,x=0;i<nums.length;i++){
            if(nums[i] !== 0){
                let temp = nums[x];
                nums[x] = nums[i];
                nums[i] = temp;
                x++;
            }
        }
    }
}
