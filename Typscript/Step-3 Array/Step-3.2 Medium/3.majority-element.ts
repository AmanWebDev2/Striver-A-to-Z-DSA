// Better Approach
function majorityElement(nums: number[]): number {

    // T.C : O(N)+O(N) = O(2N);
    // S.C : O(N); if array contains all unique elements, it ended up taking whole size of an array;
    const n = nums.length;
    const condition = Math.floor(n/2);
    let ans = -1;
    const map = new Map<number,number>();

    // T.C O(N)
    for(let i=0; i<n; i++) {
        let val = map.get(nums[i]);
        if(val) {
            val++;
            map.set(nums[i],val);
        }else{
            map.set(nums[i],1);
        }
    }

    // T.C : O(N) if array contains all unique elements;
    for(let [key,value] of map.entries()) {
        if(value > condition) {
            ans = key;
            return ans;
        }
    }

    return ans;
};


const nums = [3,2,3];

console.log(majorityElement(nums));
