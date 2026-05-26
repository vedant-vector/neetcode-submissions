class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash1 = new Map();
        for(let str of strs){
            const key = str.split('').sort().join('');

            if(hash1.has(key)){
                hash1.get(key).push(str);
            } else {
                hash1.set(key,[str])
            }
        }
        return Array.from(hash1.values())
    }
}
