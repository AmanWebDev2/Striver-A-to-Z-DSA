/**
 * Time Complexity: O(n);
 * Space Complexity: O(1);
 */

function isSorted(arr:number[],n:number):boolean {
    for(let i=1; i<n; i++) {
        if(arr[i-1] > arr[i]) {
            return false;
        }
    }
    return true;
}

let arr = [1,2,4,3,4,5,6];
let size = arr.length;

console.log(isSorted(arr,size));