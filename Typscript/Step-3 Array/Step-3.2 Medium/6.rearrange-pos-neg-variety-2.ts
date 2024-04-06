/**
 * Condition no. of positive != no. of negatives
 * @param nums 
 * @returns 
 */

// Time complexity: O(2N) --> worst case
// Space complexity: O(N) 
function rearrangeArray(nums:number[]):number[] {
    let pos:number[] = [];
    let neg:number[] = [];
    let ans:number[] = new Array(nums.length).fill(0);
    // O(N)
    for(let i=0; i<nums.length; i++) {
        if(nums[i]<0) {
            neg.push(nums[i]);
        }else{
            pos.push(nums[i]);
        }
    }

    // O(min(pos,neg)) + O(leftover)
    if(pos.length > neg.length) {
        for(let i=0; i<neg.length; i++) {
            ans[2*i] = neg[i];
            ans[2*i+1] = pos[i];
        }
        // fill the leftover positive
        let index = neg.length*2;
        for(let i=index; i<pos.length; i++) {
            ans[index] = nums[i];
            index++;
        }
    }else{
        for(let i=0; i<pos.length; i++) {
            ans[2*i] = neg[i];
            ans[2*i+1] = pos[i];
        }
        // fill the leftover negative
        let index = pos.length*2;
        for(let i=index; i<neg.length; i++) {
            ans[index] = nums[i];
            index++;
        }
    }

    return ans;
}