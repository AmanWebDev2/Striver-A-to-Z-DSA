/**
 * Two pointer approach
 * Time Complexity: O(x) + O(n-x) = O(n);
 * Space Complexity: O(1);
 */

function moveZeros(arr:number[], n:number) {
     let j = -1;
    //  T.C = O(x);
     for(let i=0; i<n; i++) {
        if(arr[i] == 0) {
            j = i;
            break;
        }
     }

    //  array does not contains zeros
     if(j==-1) {
        return;
     }
    // T.C = O(n-x);
     for(let i = j+1; i<n; i++) {
        if(arr[i] != 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
     }
}

let arr:number[] = [3,5,0,0,4];
let size = arr.length;

moveZeros(arr,size);
console.log(arr);