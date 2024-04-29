function isPowerOf2(n:number) {
    if(n==0) return false;
    let num = n&(n-1);
    return num===0;
}

console.log(isPowerOf2(0))