function superiorElementBrute(arr: number[], n: number):number[] {
    let ans:number[] = [];
    for (let i = 0; i < n; i++) {
        let leader = true;
        for (let j = i+1; j < n; j++) {
            if(arr[j] > arr[i]) {
                leader = false;
                break;
            }
        }
        if(leader) {
            ans.push(arr[i]);
        }
    }
    return ans;
}

function superiorElementOptimal(arr:number[],n:number):number[] {
    let ans:number[] = [];
    let max:number = Number.MIN_SAFE_INTEGER;
    for(let i=n-1; i>=1; i--) {
        if(arr[i]>max) {
            ans.push(arr[i]);
        }
        max = Math.max(arr[i],max);
    }
    return ans;
}

const arr = [1, 2, 3, 2];
const n = arr.length;

// const ans = superiorElementBrute(arr,n);
const ans = superiorElementOptimal(arr,n);
console.log(ans);