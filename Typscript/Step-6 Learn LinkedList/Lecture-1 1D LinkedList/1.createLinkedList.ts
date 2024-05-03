export class Node<T> {
    data:T;
    next:number|null;
    constructor(data:T) {
        this.data = data;
        this.next = null;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node('5');
console.log(node1,node2,node3,node4.data)