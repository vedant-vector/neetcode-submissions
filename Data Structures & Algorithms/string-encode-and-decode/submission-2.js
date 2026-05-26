class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newStrs = "";
        for (let i=0; i<strs.length;i++){
            newStrs = newStrs.concat(strs[i].length);
            newStrs = newStrs.concat("#");
            newStrs = newStrs.concat(strs[i].slice(0,strs[i].length))
        }
        return newStrs;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const finalArr = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = Number(str.substring(i, j));
            i = j + 1;
            finalArr.push(str.substring(i, i + length));
            i += length;
        }
        return finalArr;
    }
}