function linearSearch(arr:number[], n:number, num:number):number {
    for (let i = 0; i < n; i++) {
        const element = arr[i];
        if(element == num) {
            return i;
        }
        
    }
    return -1;
}

let arr:number[] = [1,2,3,4,5,6,7];
let num:number = 36;
let size = arr.length;

const index = linearSearch(arr,size,num);
console.log(index);
