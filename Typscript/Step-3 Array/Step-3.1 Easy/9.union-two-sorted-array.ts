function unionOfTwoSortedArray(arr1:number[],n:number,arr2:number[], m:number):number[] {
    const mySet = new Set<number>();
    
    for(let i=0; i<n; i++) {
        mySet.add(arr1[i]);
    } 

    for(let i=0; i<m; i++) {
        mySet.add(arr2[i]);
    }

    const union:number[] =  Array.from(mySet);
    return union;
}

const arr1 = [1,1,2,3,4,5];
const arr2 = [1,2,3,4,5,5,6,7,8];

let n = arr1.length;
let m = arr2.length;

const union = unionOfTwoSortedArray(arr1,n,arr2,m);
console.log(union)