// Time Complexity: O(Log10(N))

function countDigit(n:number):number {
    let count = 0
    while(n>0) {
        count++;
        n = Math.floor(n/10)
    }
    return count;
}

function countDigit2(n:number):number {
    return Math.floor(Math.log10(n))+1
}

console.log(countDigit(123))
console.log(countDigit2(1111))