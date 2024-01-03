/*
    * Time Complexity: O(N);
    * Space Complexity: O(1);
*/

function leftRotateByOnePlace(arr:number[],n:number) {
    let temp = arr[0];

    for(let i=1; i<n; i++) {
        arr[i-1] = arr[i];
    }

    arr[n-1] = temp;
}

let arr:number[] = [1,2,3,4,5];
console.log(arr);
leftRotateByOnePlace(arr,arr.length);
console.log(arr);
