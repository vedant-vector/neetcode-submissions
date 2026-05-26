class MinStack {
    
    constructor() {
        this.miniStack = [];
        this.internalArr = [];
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.miniStack.push(val);
        if(this.internalArr.length ===0){
            this.internalArr.push(val);
        } else if(val <= this.internalArr[this.internalArr.length -1]) {
            this.internalArr.push(val);
        }  
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.internalArr[this.internalArr.length - 1] === this.miniStack[this.miniStack.length - 1]){
            this.internalArr.pop();
        }
        this.miniStack.pop();

    }

    /**
     * @return {number}
     */
    top() {
        return this.miniStack[this.miniStack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.internalArr[this.internalArr.length - 1]
    }
}
