// Time Complexity: O(2Log10(N))

function isArmstrong(n:number):boolean {
    let dup = n;
    let armstrong = 0;
    const noOfDigits = Math.floor(Math.log10(n))+1
    while(n > 0) {
        let lastDigit = n%10;
        armstrong += Math.pow(lastDigit,noOfDigits);
        n = Math.floor(n/10);
    }
    return dup == armstrong
}

console.log(isArmstrong(1634))