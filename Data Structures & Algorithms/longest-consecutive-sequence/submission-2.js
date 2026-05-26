class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(!nums.length){
            return 0;
        }
        const sorted = [... new Set(nums)].sort((a,b)=> a - b)

        let cnt = 0,finalCnt = 0;
        for (let i =0; i<sorted.length;i++){
            if(sorted[i]+1 === sorted[i+1]){
                cnt++;
            } else {
                finalCnt = finalCnt > cnt ? finalCnt : cnt;
                cnt = 0;
            }
        }

        return finalCnt === 0 ? 1 : ++finalCnt;
    }
}
