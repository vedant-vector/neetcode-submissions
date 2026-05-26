class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        for (let i=0,j=s.length-1;i<s.length/2;i++,j--){
            let x = s[i];
                s[i] = s[j];
                s[j] = x;
        }
    }
}
