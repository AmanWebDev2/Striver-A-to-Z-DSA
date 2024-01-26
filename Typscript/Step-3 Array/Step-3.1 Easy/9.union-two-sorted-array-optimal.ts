function unionOfTwoSortedArray(a:number[],n:number,b:number[], m:number):number[] {
    let i=0;
    let j=0;
    let union:number[] = [];
    const usize = union.length;

    while(i<n && j<m) {
        if(a[i] <= b[j]) {
            if(usize == 0 || union[usize-1] != a[i]) {
                union.push(a[i]);
                console.log(union[usize-1]);
            }
            i++;
        }else{
            if(usize == 0 || union[usize-1] != b[j]) {
                console.log(union[usize-1]);
                union.push(b[i]);
            }
            j++;
        }
    }

    while(j<m) {
        if(usize == 0 || union[usize-1] != b[j]) {
            union.push(b[i]);
        }
        j++;
    }

    while(i<n) {
        if(usize == 0 || union[usize-1] != a[i]) {
            union.push(a[i]);
        }
        i++;
    }

    return union;

}

const a = [1,1,2,3,4,5];
const n = a.length;

const b = [2,3,4,4,5,6];
const m = b.length;

const union = unionOfTwoSortedArray(a,n,b,m);

console.log(union);