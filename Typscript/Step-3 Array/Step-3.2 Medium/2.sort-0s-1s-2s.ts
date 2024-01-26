// Better Approach T.C : O(2N);
// S.C : O(1);

function sort(arr:number[], n:number){
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    // T.C : O(N);
    for(let i=0; i<n; i++) {
        if(arr[i]==0){
            count0++;
        }else if(arr[i]==1){
            count1++;
        }else if(arr[i]==2){
            count2++;
        }
    }

    // Total 3 loop T.C : O(N);
    for(let i=0; i<count0; i++) {
        arr[i] = 0;
    } 
    for(let i=count0; i<count0+count1; i++) {
        arr[i] = 1;
    } 
    for(let i=count0+count1; i<n; i++) {
        arr[i] = 2;
    }
}

function sortOptimial(arr:number[], n:number) {
    // T.C => O(N);
    // S.C => O(1);
    
    let low = 0;
    let mid = 0;
    let high = n-1;

    while(mid<=high) {
        if(arr[mid]==0) {
            let temp = arr[mid];
            arr[mid] = arr[low];
            arr[low] = temp;
            low++;
            mid++;

        }else if(arr[mid]==1) {
            mid++;
        }else{
            let temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high--;
        }
    }   
}

const arr = [0,1,2,0,1,2,1,2,0,0,0,1];
const n = arr.length;

// sort(arr,n);
sortOptimial(arr,n);
console.log(arr);


