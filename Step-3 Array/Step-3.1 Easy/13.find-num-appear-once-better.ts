function findNumAppearOnceBetter1(arr:number[],n:number) {
    let ans = -1;

    const hash = new Array(arr[n-1]).fill(0);
    for(let i=0; i<n; i++) {
        hash[arr[i]]++;
    }

    for(let i=0; i<n; i++) {
        if(hash[arr[i]] == 1) {
            ans = arr[i];
            break;
        }
    }
    return ans;
}

function findNumAppearOnceBetter(arr:number[], n:number):number {
    let ans = -1;
    const freq = new Map<number,number>();
    for(let i=0; i<n; i++) {
        let val = freq.get(arr[i]);
        if(freq.has(arr[i]) && val != undefined) {
            val++;
            freq.set(arr[i],val);
        }else{
            freq.set(arr[i],1)      
        }
    }
    for(let [key,value] of freq){
        if(value == 1) {
            ans = key;
        }
    }
    return ans;
}

const arr = [1,1,2,3,3,4,4,4];
const size = arr.length;

const ans = findNumAppearOnceBetter(arr,size);
console.log(findNumAppearOnceBetter1(arr,size));
console.log(ans);