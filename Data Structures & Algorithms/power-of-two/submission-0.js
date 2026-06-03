class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isPowerOfTwo(n) {
        if (n <= 0) return false;

        while (n > 1) {
            // if not divisible by 2
            if (n % 2 !== 0) {
                return false;
            }

            n = n / 2;
        }

        return true;
    }
}
