class CreateNode{
        constructor(val){
            this.value = val;
            this.next = null;
        }
    }

class MyLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {}

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) return -1;
        if(index === 0){
            return this.head.value;
        }
        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        return current.value;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const newNode = new CreateNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const newNode = new CreateNode(val);
        if(this.head === null){
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.size++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0 || index > this.size) return -1;
        if(index === 0){
            this.addAtHead(val);
            return;
        }else if(index === this.size){
            this.addAtTail(val);
            return;
        }else {
            const newNode = new CreateNode(val);
            let counter = 0;
            let currentNode = this.head;
            while(counter < index-1){
                currentNode = currentNode.next;
                counter++;
            }
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                this.size++;
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) return -1;
        if (index === 0){
            this.head = this.head.next;
        }
        let current = this.head;
        for(let i = 0 ; i < index-1;i++){
            current = current.next;
        }
        current.next = current.next.next;
        this.size--;
    }
}
