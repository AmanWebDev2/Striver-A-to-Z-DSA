/*
    * Kadane's Algo
    * Time Complexity: O(n);
    * Space Complexity: O(1);
*/

function maxSubarraySumOptimal(arr:number[],n:number):number {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    for(let i=0; i<n; i++) {
        sum+=arr[i];
        max = Math.max(sum,max);
        if(sum<0) sum =0;
    }

    return max;
}

const arr = [-1]; 
const n  = arr.length;

console.log(maxSubarraySumOptimal(arr,n))
