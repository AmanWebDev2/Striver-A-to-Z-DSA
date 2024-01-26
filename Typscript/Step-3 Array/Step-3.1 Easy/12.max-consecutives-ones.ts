function maxConsecutive(arr:number[],n:number) {
    let count = 0;
    let max = 0;
    let len = arr.length;
    for(let i=0; i<len; i++) {
        if(arr[i] == 1) {
            count++;
            if(count > max) {
                max = count;
            }
        }else {
            count = 0;
        }
    }
    return max;
}

const arr = [0,1,1,0,0,1,1,1];
const n = arr.length;

console.log(maxConsecutive(arr,n));