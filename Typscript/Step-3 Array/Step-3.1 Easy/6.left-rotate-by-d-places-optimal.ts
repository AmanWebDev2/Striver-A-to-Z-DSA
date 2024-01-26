/**
 * Time Complexity: O(d/2) + O((n-d)/2) + O(d/2) ==> O(n);
 * Space Complexity: O(1);
 * Optimal force approach;
 */

function reverse(arr:number[],start:number,end:number) {
    let left = start;
    let right = end-1;
    while(left< right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

function leftRotateByDplaces(arr:number[],n:number,d:number) {
    d = d % n;
    reverse(arr,0,d); // O(d/2)
    reverse(arr,d,n); // O((n-d)/2)
    reverse(arr,0,n); // O(n/2)
}

let arr:number[] = [1,2,3,4,5,6,7];
let size = arr.length;
let d = 3;
console.log(arr);
leftRotateByDplaces(arr,size,d);
console.log(arr);