export class Node<T> {
    data:T;
    next: null | Node<T>;

    constructor(data:T) {
        this.data = data;
        this.next = null;
    }
}

function convert2LL(arr:number[]) {
    let head = new Node(arr[0]);
    let mover = head;
    for(let i=1; i<arr.length; i++) {
        const temp = new Node(arr[i]);
        mover.next = temp;
        mover = temp;
    };
    return head;
}

function printLL(head:Node<number>) {
    let temp:Node<number>|null = head;
    while(temp) {
        console.log(temp.data);
        temp = temp.next;
    }
}

function lengthOfLL(head:Node<number>):number {
    let len = 0;
    let temp:null | Node<number> = head;
    while(temp) {
        len++;
        temp = temp.next;
    }
    return len;
}

function search(head:Node<number>,elem:number):boolean {
    let temp:Node<number>|null = head;
    while(temp) {
        if(temp.data == elem) {
            return true;
        }
        temp = temp.next;
    }
    return false;
}

const arr = [5,4,3,2,1];
const head = convert2LL(arr);
// traversal
printLL(head)
console.log(lengthOfLL(head));
console.log(search(head,52))