/**
 * Time Complexity: O(d) + O(n-d) + O(d) ==> O(n+d);
 * Space Complexity: O(d);
 * Brute force approach;
 */

function leftRotateByDplaces(arr:number[],n:number,d:number) {
    d = d % n;

    const temp:number[] = new Array(d);

    // time complexity: O(d);
    for(let i=0; i<d; i++) {
        temp[i] = arr[i];
    }

    // time complexity: O(n-d);
    for(let i=d; i<n; i++) {
        arr[i-d] = arr[i];
    }

    // put back
    // time complexity: O(d);
    for(let i=n-d; i<n; i++) {
        arr[i] = temp[i-(n-d)];
    }
}

let arr:number[] = [1,2,3,4,5,6,7];
let size = arr.length;
let d = 3;
console.log(arr);
leftRotateByDplaces(arr,size,d);
console.log(arr);