class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length === 0){
        return true;
        }

        if(s.length%2 !== 0){
            return false;
        }

        const arr =[];
        for (let i=0; i<s.length;i++){
            if(s[i] === '[' || s[i] === '{' || s[i] === '('){
                arr.push(s[i]);
            }
            else if(s[i] === ']' && arr[arr.length-1] !== '[') {
                return false;
            } else if(s[i] === '}' && arr[arr.length-1] !== '{') {
                return false;
            }else if(s[i] === ')' && arr[arr.length-1] !== '(') {
                return false;
            }
            else {
                arr.pop()
            }
        }

    return arr.length !== 0 ? false : true;
    }
}
