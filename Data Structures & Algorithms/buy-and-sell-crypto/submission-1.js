class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0];
        let maxProfit = 0;
        for(let i = 0;i<prices.length;i++){
            maxProfit = prices[i] - min > maxProfit ? prices[i] - min : maxProfit;
            if(prices[i] > prices[i+1]){
                min = min > prices[i+1] ?  prices[i+1] : min;
            }
        }
        return maxProfit;
    }
}
