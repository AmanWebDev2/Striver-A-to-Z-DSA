function main(n:number) {
    const arr:number[] = new Array(n).fill(0)
    return print(arr,n);
}

function print(arr:number[],n:number,i=1):number[] {
    if(i > n) {
        return arr;
    }
    arr[i-1] = i
    return print(arr,n,i+1)
}

console.log(main(5))