class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let i = 0 ; i<strs.length;i++){
            let val = strs[i].split('').sort().join('');
            if(map.has(val)){
                map.get(val).push(strs[i])
            } else {
                map.set(val,[strs[i]])
            }
        }
        return [...map.values()];
    }
}
