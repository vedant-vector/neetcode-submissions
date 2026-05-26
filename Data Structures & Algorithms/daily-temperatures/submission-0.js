class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const newArr = new Array(temperatures.length).fill(0);
        for (let i=0;i<temperatures.length;i++){
            let cnt = 0;
            for (let j=i+1;j<temperatures.length;j++){
                if(temperatures[i]<temperatures[j]){
                    cnt++;
                    newArr[i] = cnt;
                    break;
                }
                else {
                    cnt++;
                }
            }
        }
        return newArr;
    }
}
