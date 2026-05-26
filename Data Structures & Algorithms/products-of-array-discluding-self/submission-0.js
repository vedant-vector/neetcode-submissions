class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let finalArr = []
        let element = 1;
        for (let i = 0,j=0; i<nums.length;j++){
            if (j === nums.length){
                finalArr.push(element);
                i++,j=-1,element = 1;
            }else if(i !== j){
                if(nums[j] === 0){
                    element = 0;
                    finalArr.push(element);
                    i++,j=-1,element = 1;
                } else {
                    element *= nums[j];
                }
            }
        }
        return finalArr;
    }
}
