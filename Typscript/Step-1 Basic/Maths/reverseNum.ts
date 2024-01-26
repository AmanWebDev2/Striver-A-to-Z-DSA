// Time Complexity: O(Log10(n))

function reverse(n:number): number {
    let reverse = 0;
    while(n > 0) {
        let lastDigit = n%10
        reverse = reverse*10 + lastDigit
        n = Math.floor(n/10)
    }
    return reverse;
}

console.log(reverse(1234))