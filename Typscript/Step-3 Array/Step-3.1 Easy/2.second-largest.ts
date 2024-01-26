
// Brute Force
// Time Complexity: O(nlogn)+O(n);
// Space Complexity: O(1);
function secondLargest(arr:number[], n:number):number {
    // O(nlogn);
    arr.sort((a,b)=>a-b);

    const largest = arr[n-1];
    let secondLargest = -1;

    // worst case: O(n);
    for(let i=n-2; i>=0; i--) {
        if(arr[i] != largest){
            secondLargest = arr[i];
            break;
        }
    }
    return secondLargest;
}

// ------------------------------------------------

// Better : Time Complexity: O(n) +O(n)
function secondLargestBetter(arr:number[],n:number):number {
    let largest = arr[0]
    let secondLargest = -1;

    // O(n)
    for(let i=1; i<n; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }

    // O(n)
    for(let i=0; i<n; i++) {
        if(arr[i] != largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}


function secondLargestOptimal(arr:number[], n:number):number {
    let largest = arr[0];
    let secondLargest = -1;

    for(let i=1; i<n; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }else if(arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let arr:number[] = [1,2,3,7,7,5,6,6,6];
let size:number = arr.length;

let bruteForce = secondLargest(arr,size);
let better = secondLargestBetter(arr,size);
let optimal = secondLargestOptimal(arr,size);

console.log(bruteForce,better,optimal)