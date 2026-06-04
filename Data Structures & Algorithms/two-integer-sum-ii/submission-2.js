class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i=1,x=0;x<numbers.length;i++){
            if(numbers[x]+numbers[i] === target){
                return [++x,++i]
            } else if ( i+1 === numbers.length || numbers[x]+numbers[i] > target){
                x++;
                i = x;
            }
        }
    }
}
