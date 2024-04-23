// Anonymous function
// Rotate an array by k times

const rotateArray1 = function (nums,k){
    for (let i=0;i<k;i++) {
        nums.unshift(nums.pop());
    }
    return nums;
  }
  let nums=[2,7,6,8];
  let k=[2];
  console.log(rotateArray1(nums,k));

    
        
    