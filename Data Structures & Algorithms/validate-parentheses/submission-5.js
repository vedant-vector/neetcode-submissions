class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length%2 !== 0){
            return false;
        }

        if(s.length === 0){
            return true;
        }

        let stackJob = [];

        for(let i = 0; i<s.length;i++){
            console.log("->s[i]",s[i], " ->stackJob[i-1]",stackJob[i-1])
            if(s[i] === '[' || s[i] === '{' || s[i] === '('){
                stackJob.push(s[i]);
            } else if ((s[i] === ']' && stackJob[stackJob.length-1] === '[') || (s[i] === '}' && stackJob[stackJob.length-1] === '{') || (s[i] === ')' && stackJob[stackJob.length-1] === '(')) {
                stackJob.pop()
            } else {
                return false
            }
        }
        return stackJob.length>0 ? false : true;


    }
}
