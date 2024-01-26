// Time Complexity: O(n)
function isPrime(n:number):boolean {
    let divisor = 0;
    for(let i=1; i<=n; i++) {
        if(n%i==0) {
            divisor++;
        }
    }

    return divisor==2
}

// Time Complexity: O(sqrt(n))
function isPrimeBetter(n:number):boolean {
    let divisor = 0;
    for(let i=1; i*i<=n; i++) {
        if(n%i==0) {
            divisor++;
            if(n/i != i) {
                divisor++
            }
        }
    }
    return divisor == 2
}

console.log(isPrime(61))
console.log(isPrimeBetter(61))