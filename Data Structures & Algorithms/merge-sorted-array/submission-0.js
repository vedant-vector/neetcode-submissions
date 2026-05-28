class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        for(let i = m-1,j=n-1,x=nums1.length-1;x>=0;){
            if(nums1[i] < nums2[j] || i == -1){
                nums1[x] = nums2[j];
                j--;
                x--;
            } else {
                nums1[x] = nums1[i];
                i--;
                x--;
            }
        }
    }
}
