function missingNum(arr:number[], N:number) {
    // T.C => O(N);
    // S.C => O(1);
    let arrSum = 0;
    for(let i=0; i<N-1; i++) {
        arrSum+=arr[i];
    }

    const NSum = (N*(N+1))/2;

    return NSum - arrSum;
}

const arr = [1,2,4,5];
const N = arr.length+1;

console.log(missingNum(arr,N));


function missingNum2(arr:number[],N:number) {
    // T.C => O(2N);
    // S.C => O(1);

    let xor1 = 0;
    let xor2 = 0;

    for(let i=0; i<N-1; i++) {
        xor1 = xor1 ^ arr[i];
    }

    for(let i=1; i<=N; i++) {
        xor2 = xor2 ^ i;
    }

    return xor1 ^ xor2;
}

function missingNum3() {
    // T.C => O(N);
    // S.C => O(1);

    let xor1 = 0;
    let xor2 = 0;

    for(let i=0; i<N-1; i++) {
        xor2 = xor2 ^ arr[i];
        xor1 = xor1 ^ (i+1);
    }
    xor1 = xor1 ^ N;

    return xor1 ^ xor2;
}

console.log(missingNum2(arr,N));