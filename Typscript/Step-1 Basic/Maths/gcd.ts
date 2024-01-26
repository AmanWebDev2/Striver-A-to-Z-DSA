// Time Complexity: O(min(a,b))

function gcd(a:number,b:number):number {
    let ans = 1;
    for(let i=1; i<=Math.min(a,b);i++) {
        if(a%i==0 && b%i==0) {
            ans = i
        }
    }
    return ans;
}

// Time Complexity: O(log(phie)(min(a,b)))
function gcgByEuclidean(a:number,b:number):number {
    while(a>0 && b>0) {
        if(a>b) a=a%b
        else b = b%a
    }

    if(a==0) return b 
    return a
}

console.log(gcd(12,9))
console.log(gcgByEuclidean(12,9))