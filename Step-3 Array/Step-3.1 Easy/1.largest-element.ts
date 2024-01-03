/**
 * Time Complexity: O(n);
 * Space Complexity: O(1);
 * Optimal Approach 
 */

function largestElement(arr:number[], n:number):number {
    let largest = arr[0];
    for(let i=1; i<n; i++) {
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

let arr:number[] = [1,2,3,4,5,6,7,7];


// Time Complexity: O(nlogn);
function largestElementBrute(arr:number[],n:number):number {
    arr.sort((a,b)=>a-b);
    return arr[n-1];
}

const largest = largestElement(arr,arr.length);
const largest2 = largestElementBrute(arr,arr.length);
console.log(largest,largest2);