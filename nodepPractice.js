class Node {
    constructor(data) {
this.data = data;
this.next = null;
    }
    getNode (data) {
        return this.data
    }
    setNextNode (node) {
        if(node instanceof Node || node === null)
        this.next = node;

    }
}