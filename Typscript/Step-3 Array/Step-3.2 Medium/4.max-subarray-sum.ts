/**
 * 
 * @param arr 
 * @param n 
 * Time Complexity: O(n^3);
 * Space Complexity: O(1);
 */

function maxSubarrayBrute(arr:number[], n:number) {
    let max = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<n; i++) {
        for(let j=i; j<n; j++) {
            //subarray from i to j;
            let sum = 0;
            for(let k=i; k<=j; k++) {
                sum+=arr[k];
                max = Math.max(max,sum);
            }
        }
    }

    return max;
}

function maxSubarrayBetter(arr:number[], n:number) {
    // T.C : O(n^2);
    // S.C : O(1);
    let max = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<n; i++) {
        let sum = 0;
        for(let j=i; j<n; j++) {
            //subarray from i to j;
            sum+=arr[j];
            max = Math.max(max,sum);
        }
    }

    return max;
}

// Kadane's Algorithm
function maxSubarrayOptimal(arr:number[],n:number) {
    let sum = 0;
    let max = arr[0];
    let ansStart = -1;
    let ansEnd = -1;
    for(let i=0; i<n; i++) {
        if (sum == 0) {
            ansStart = i;
        }
        sum+=arr[i];
        if(sum > max) {
            max = sum;
            ansEnd = i;
        };
        if(sum<0) {
            sum = 0;
        }
    }
    for(let i=ansStart; i<=ansEnd; i++) {
        console.log(arr[i]);
    }
    return max;
}

const arr = [-2,-3,4,-1,-2,1,5,-3];
const n = arr.length;

console.log(maxSubarrayOptimal(arr,n))
