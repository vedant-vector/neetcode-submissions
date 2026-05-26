class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.split('').sort().join().toUpperCase() === t.split('').sort().join().toUpperCase())
        {
            return true;
        } else{
       return false;
        }
    }
}
