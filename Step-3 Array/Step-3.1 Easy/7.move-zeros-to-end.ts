/**
 * Time complexity: O(2n);
 * Space complexity: O(n);
 */

function moveZeros(arr:number[], n:number) {

    // worst case space complexity: o(n)
    let temp:number[] = [];

    // O(n)
    for(let i=0; i<n; i++) {
        if(arr[i] != 0) {
            temp.push(arr[i]);
        }
    }

    // O(n)
    for(let i=0; i<n; i++) {
        if(i<temp.length) {
            arr[i] = temp[i];
        }else {
            arr[i] = 0;
        }
    }
}

let arr:number[] = [1,0,2,3,2,0,0,4,5,1];
let size = arr.length;

moveZeros(arr,size);
console.log(arr);