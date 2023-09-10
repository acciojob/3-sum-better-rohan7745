function threeSum(nums, target) {
// write your code here
	  nums.sort((a, b) => a - b); // Sort the array in ascending order.
  let threeSum = Infinity;
  
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (Math.abs(target - sum) < Math.abs(target - threeSum)) {
        threeSum = sum;
      }
      
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return threeSum;
  
}

module.exports = threeSum;
