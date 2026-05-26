class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = s.split(" ").join("").split("")

        let newArr = [];
        for (let i= 0;i<arr.length;i++){
            if((arr[i]>= "A" && arr[i]<="Z") || (arr[i]>= "a" && arr[i]<="z") || (arr[i]>= 0 && arr[i]<=9)){
                newArr.push(arr[i])
            }
        }

        newArr = newArr.join('').toLowerCase();
        for(let i = 0,j= newArr.length - 1; i<newArr.length/2;i++,j--){
        if (newArr[i] !== newArr[j]){
            return false;
        }
        }
        return true;
    }
}
