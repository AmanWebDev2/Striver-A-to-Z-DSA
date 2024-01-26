function twoSum(arr:number[],n:number,target:number):number[] {
    // T.C = O(n^2);
    let ans:number[] = [];
    for(let i=0; i<n; i++) {
        for(let j=i+1; j<n; j++) {
            if(arr[i] + arr[j] == target) {
                ans.push(arr[i]);
                ans.push(arr[j]);
                break;
            }
        }
    }
    return ans;
}



function twoSumBetter(nums: number[], n:number,target: number): number[] {
    // T.C : O(n);
    const map = new Map<number,number>();
    const ans:number[] = [];
    for(let i=0; i<n; i++) {
        const elem = nums[i];
        const rem = target - elem;
        const remkey = map.get(rem);
        if(map.has(rem) && remkey) {
            ans.push(i);
            ans.push(remkey);
            return ans;
        }
        map.set(elem,i);
    }
    return ans;
};


function twoSumTwoPointer(arr:number[],n:number,target:number):number[] {
    // T.C = O(m);
    let left = 0;
    let right = n-1;
    const ans:number[] = new Array(2);
    while(left < n) {
        if(left == right) {
            left++;
            right = n-1;
        }

        const sum = arr[left]+arr[right];

        if(sum == target) {
            ans[0]=left;
            ans[1]=right;
            return ans;
        }else{
            right--;
        }
    }
    return ans;
}


const arr = [2,6,5,8,11];
const n = arr.length;
const target = 14;
const ans = twoSumTwoPointer(arr,n,target);
console.log(ans);