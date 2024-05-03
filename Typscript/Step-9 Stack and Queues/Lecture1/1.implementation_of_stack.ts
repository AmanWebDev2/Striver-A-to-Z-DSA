class Stack {
    private size:number;
    private arr:number[];
    private top:number = -1;

    constructor(stackSize:number) {
        this.size = stackSize;
        this.arr = new Array(this.size);
    }

    // push()
    push(elem:number) {
        this.top+=1;
        if(this.isFull()){
            console.log("stack is full")
        }else{
            this.arr[this.top] = elem;
        }
    }

    // pop()
    pop() {
        if(this.isEmpty()) {
            console.log("stack is empty cannot delete element from it!");
        }else{
            this.top -= 1;
            return this.arr[this.top];
        }
    }

    // peek()
    peek() {
        if(this.top === -1){
            console.log("stack is empty");
        }else{
            return this.arr[this.top];
        }
    }

    // size()
    stackSize() {
        return this.top+1;
    }

    // isEmpty()
    isEmpty() {
        return this.top === -1;
    }

    // isFull()
    isFull() {
        return this.top === this.size;
    }

    print(){
        console.log(this.arr,this.top)
        for(let i=0; i<=this.top; i++) {
            console.log(this.arr[i]);
        }
    }

}
let a = new Stack(5);
a.print();
a.push(1);
a.push(2);
a.push(3);
// a.push(4);
// a.push(5);
a.pop();
a.pop();
a.pop();
a.peek();
// a.print();
