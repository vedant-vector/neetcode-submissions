class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if(nums.length <=1 ) return nums;
        const mid = Math.floor(nums.length/2);
        const left = this.sortArray(nums.slice(0,mid));
        const right = this.sortArray(nums.slice(mid));

        return this.merge(left,right);
    }

    merge(left,right){
        const arr = [];
        let i = 0;
        let j = 0;

        while(i < left.length && j < right.length){
            if(left[i] > right[j]){
                arr.push(right[j]);
                j++;
            }else {
                arr.push(left[i]);
                i++;
            }
        }

        return [...arr,...left.slice(i),...right.slice(j)]
    }
}
