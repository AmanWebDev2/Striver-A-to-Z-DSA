function findMissingNumBrute(arr:number[],N:number):number{
    // T.C = O(n^2);
    // S.C = O(1);
    let missingNum = -1;
    for(let i=1; i<=N; i++) {
        let isFound = false;
        for(let j=0; j<N-1; j++) {
            if(arr[j] == i) {
                isFound = true;
                break;
            }
        }
        if(!isFound) {
            missingNum = i;
            break;
        }
    }
    return missingNum;
}

const arr = [1,2,3,4,5,6,8];
const N = arr.length+1;

// console.log(findMissingNumBrute(arr,N+1));

function findMissingNumBetter(arr:number[],N:number):number {
    // T.C => O(N) + O(N);
    // S.C => O(N)

    const hash = new Array(N+1).fill(0);
    let ans = -1;

    for(let i=0; i<N-1; i++) {
        hash[arr[i]] = 1;
    }

    for(let i=1; i<hash.length; i++) {
        if(hash[i] == 0) {
            ans = i;
            break;
        }
    }

    return ans;
}

console.log(findMissingNumBetter(arr,N+1));
