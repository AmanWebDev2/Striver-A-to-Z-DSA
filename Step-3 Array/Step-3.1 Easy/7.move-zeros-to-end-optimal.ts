function moveZeros(arr:number[], n:number) {
    for(let j=0; j<n;) {

        if(arr[j] != 0) {
            j++;
        }

        if(j==n-1) {
            break;
        }

        let i = j+1;

        while(arr[i] ==0) {
            i++;
            if(i>n-1){
                return
            }
        }
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        j++;
    }
}

let arr:number[] = [3,5,0,0,4];
let size = arr.length;

moveZeros(arr,size);
console.log(arr);