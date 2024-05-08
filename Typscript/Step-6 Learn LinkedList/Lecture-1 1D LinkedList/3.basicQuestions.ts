export class Node<T> {
    data:T;
    next:null | Node<T>;

    constructor(data:T) {
        this.data = data;
        this.next = null;
    }

}

function printLL(head:Node<number>|null) {
    let temp = head;
    while(temp) {
        console.log(temp.data);
        temp = temp.next;
    }
}

function convert2LL(arr:number[]){
    const node1 = new Node(arr[0]);
    let temp = node1;
    for(let i=1; i<arr.length; i++) {
        const node = new Node(arr[i]);
        temp.next = node;
        temp = node;
    }
    return node1;
}

const arr = [1,2,3];
const head = convert2LL(arr);

// delete head
function deleteHead(head:Node<number> | null):Node<number>|null {
    if(head == null) return head;
    head = head.next;
    return head;
}

// delete tail
function deleteTail(head:Node<number>|null) {
    // either LL is empty or it contains only one node
    if(head == null || head.next == null) {
        return null
    }
    // LL must have minimum of 2 nodes
    let temp = head;
    while(temp.next?.next != null) {
        temp = temp.next;
    }
    temp.next = null;
    return head;
}

// delete kth node
function deleteKthNode(head:Node<number>|null,k:number) {
    
    if(head==null) {
        return head;    
    }
    
    // delete head
    if(k==1) {
        head = head.next;
        return head;
    }

    let pos = 1;
    let temp:Node<number>|null = head;
    let prev:Node<number>|null = null;
    while(temp != null) {
       
        if(pos == k) {
            if(prev) {
                prev.next = temp.next;
                break;
            }
        }
        prev = temp;
        temp = temp.next;
        pos++;
    }
    return head;
}

// delete element
function deleteElem(head:Node<number>|null,el:number) {

    if(head==null) return head;
    
    // head
    if(head.data == el) {
        head = head.next;
    }

    let prev:Node<number>|null = null;
    let temp = head;
    while(temp) {
        if(temp.data == el) {
            if(prev) {
                prev.next = temp.next;
            }
        }
        prev = temp;
        temp = temp.next;
    }
}

function insertAtHead(head:Node<number>|null,val:number) {
    const node = new Node(val);
    if(head == null) {
        return node;
    } 
    node.next = head;
    head = node;
    return head;

}

function insertAtTail(head:Node<number>|null,val:number) {    
    const newNode = new Node(val); 
    if(head == null) return newNode;
    let temp:Node<number>|null = head;
    while(temp?.next) {
        temp = temp.next;
    }
    temp.next = newNode;
    return head;

}

function insertAtK(head:Node<number>|null,ele:number,k:number) {
    const newNode = new Node(ele);
    if(head==null) {
        if(k==1) {
            return newNode;
        }else{
            return head;
        }
    }
    if(k==1) {
        newNode.next = head;
        head = newNode;
        return head;
    }

    let count = 1;
    let temp:Node<number>|null = head;

    while(temp) {
        if(count == k-1) {
           newNode.next = temp.next;
           temp.next = newNode; 
           break;
        }
        temp = temp.next;
        count++;
    }
    return head;
}

function insertBeforeValue(head:Node<number>|null,ele:number,val:number) {
    if(head == null) {
        return null;
    }

    // insert at head
    if(head.data == val) {
        const newNode = new Node(ele);
        newNode.next = head;
        head = newNode;
        return head;
    }

    let temp:Node<number>|null = head;
    while(temp?.next) {
        if(temp.next.data == val) {
            let newNode = new Node(ele);
            newNode.next = temp.next;
            temp.next = newNode;
            break;
        }
        temp = temp.next;
    }
    return head;
}

// const newHead = deleteHead(head);
// const newHead = deleteTail(head);
// const newHead = deleteKthNode(head,3);
// const newHead = insertAtHead(head,100);
// const newHead = insertAtTail(head,100);
// const newHead = insertAtK(head,100,5);
const newHead = insertBeforeValue(head,100,1);
printLL(newHead);