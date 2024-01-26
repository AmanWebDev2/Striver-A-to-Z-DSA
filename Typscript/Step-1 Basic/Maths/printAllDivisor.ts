// Time Complexity: O(n)
function printAllDivisor(n:number) {
    for(let i=1; i<n; i++) {
        if(n%i==0){
            console.log(i);
        }
    }
}

// Time Complexity: O(sqrt(n))
function printAllDivisorBetter(n:number) {
    for(let i=1; i*i<=n; i++) {
        if(n%i==0) {
            console.log(i);
            if(n/i != i) {
                console.log(n/i);
            }
        }
    }
}

// printAllDivisor(36)
printAllDivisorBetter(36)