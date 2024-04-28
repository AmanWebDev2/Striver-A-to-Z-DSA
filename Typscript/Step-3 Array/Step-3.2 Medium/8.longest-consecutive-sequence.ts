function longestConsecutiveSequenceBrute(nums:number[]){
    let longest = 1;
    for(let i=0; i<nums.length; i++) {
        let x = nums[i];
        let count = 1;
        while(linearSearch(nums,x+1) == true) {
            count++;
            x+=1;
        }
        longest = Math.max(longest,count);
    }
    return longest;
}

function linearSearch(arr:number[],num:number):boolean {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == num) {
            return true;
        }
    }
    return false;
}

const arr:number[] = [102,4,100,1,101,3,2,1,1]; // 1 2 3 4


// Better
function longestConsecutiveSequenceBetter(nums:number[]):number {
    // sort
    nums.sort((a,b)=>a-b);

    let longest = 1;
    let count = 0;
    let lastSmallest = Number.MIN_SAFE_INTEGER;

    for(let i=0; i<nums.length; i++) {
         if(nums[i]-1 == lastSmallest) {
            count++;
            longest++;
         }else if(nums[i] != lastSmallest) {
            // restart
            count = 1;
            lastSmallest = nums[i];
         }
         longest = Math.max(longest,count);
    }
    return longest;
}


// const ans = longestConsecutiveSequenceBrute(arr);
const ans = longestConsecutiveSequenceBetter(arr);
console.log(ans);