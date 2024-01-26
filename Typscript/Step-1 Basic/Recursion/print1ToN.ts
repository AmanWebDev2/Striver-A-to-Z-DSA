// return array containing 1 to n

function main(n:number):number[] {
    const arr = new Array(n).fill(0);
    return print(arr,n);
}   

function print(arr:number[],n:number):number[] {
    if(n < 1) {
        return arr;
    }
    arr[n-1] = n;
    return print(arr,n-1);
}


console.log(main(15))