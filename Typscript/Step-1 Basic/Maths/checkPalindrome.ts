// Time Complexity: O(Log10(N))

function isPalindrome(n:number):boolean {
    let dup = n;
    let reverse = 0;
    while(n > 0) {
        let lastDigit = n%10;
        reverse = reverse * 10 + lastDigit
        n = Math.floor(n/10);
    }
    return dup == reverse;
}

console.log(isPalindrome(123))
console.log(isPalindrome(121))