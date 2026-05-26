class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i=0,j=i+1;j<nums.length;j++){
            let temp = nums[i];
            if(temp === nums[j]){
                return true;
            } else if(j === nums.length - 1){
                i++;
                j = i;
            }
        }
        return false;
    }
}
