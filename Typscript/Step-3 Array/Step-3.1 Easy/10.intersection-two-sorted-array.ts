function intersection(arr1:number[],m:number, arr2:number[], n:number) {
    // S.C => O(n)
    const visited = new Array(n).fill(0);
    const ans:number[] = [];
    // T.C => O(m*n);
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(arr1[i] == arr2[j] && visited[j] == 0) {
                ans.push(arr1[i]);
                visited[j] = 1;
                break;
            }
            
            if(arr2[j] > arr1[i]) break; 
        }        
    }

    return ans;
}

const arr1 = [1,2,3];
const m = arr1.length;

const arr2 = [3,4];
const n = arr2.length;

const result = intersection(arr1,m,arr2,n);
console.log(result);
