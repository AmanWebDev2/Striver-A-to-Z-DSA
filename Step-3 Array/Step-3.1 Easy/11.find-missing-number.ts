function findMissingNumBrute(arr:number[],N:number):number{
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
const N = arr.length;

console.log(findMissingNumBrute(arr,N+1));