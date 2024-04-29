function checkIthBitIsSet(n:number,i:number):boolean {
    return (n & (1 << i))!=0;
}

function checkIthBitIsSetRightShift(n:number,i:number):boolean {
    return ((n>>i) & 1)!=0;
}

console.log(checkIthBitIsSetRightShift(13,4));