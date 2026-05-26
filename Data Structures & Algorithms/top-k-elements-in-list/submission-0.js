class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (let i=0;i<nums.length;i++){
            if(map.has(nums[i])){
                let cnt = map.get(nums[i]);
                map.set(nums[i],++cnt)
            } else {
                map.set(nums[i],1)
            }
        }

        const result = [...map.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k).map(i=>i[0])
        return result
    }
}
