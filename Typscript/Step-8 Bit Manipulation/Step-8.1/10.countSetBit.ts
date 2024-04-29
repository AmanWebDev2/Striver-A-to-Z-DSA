function countSetBit(n:number) {
    let count = 0;
    while(n!=0) {
        if(n%2==1) {
            count++;
        }
        n = Math.floor(n/2);
    };
    return count;
}

function countSetBitOptimal(n:number) {
    let count = 0;
    while(n!=0) {
        count += n&1;
        n = n>>1;
    };
    return count;
}

console.log(countSetBit(7));