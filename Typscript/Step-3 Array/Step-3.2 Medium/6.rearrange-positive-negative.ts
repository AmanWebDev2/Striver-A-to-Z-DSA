/**
 * Condition no. of positive == no. of negatives
 * @param nums 
 * @returns 
 */

// Time complexity: O(N)+O(N/2)
// Space complexity: O(N); --> we are store positive and negatives
function rearrangeArrayBrute(nums:number[]):number[] {
    const positive:number[] = [];
    const negative:number[] = [];
    // O(N)
    for(let i=0; i<nums.length; i++) {
        if(nums[i] >= 0) {
            positive.push(nums[i]);
        }else{
            negative.push(nums[i]);
        }
    }
    // O(N/2)
    for(let i=0; i<nums.length/2; i++) {
        nums[2*i] = positive[i];
        nums[2*i+1] = negative[i];
    }
    return nums;
}

// Time complexity: O(N);
// Space complexity: O(N);
function rearrangeArrayOptimal(nums:number[]) {
    let posIndex = 0;
    let negIndex = 1;
    let ans = new Array(nums.length).fill(0);

    for(let i=0; i<nums.length; i++) {
        if(nums[i] < 0) {
            ans[negIndex] = nums[i];
            negIndex+=2;
        }else{
            ans[posIndex] = nums[i];
            posIndex+=2;
        }
    }
    return ans;
}

const arr = [3,1,-2,-5,2,-4];
rearrangeArrayBrute(arr);
console.log(arr);