const containsDuplicate = function (nums) {
  const storeVal = [];
  storeVal.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    if (storeVal.includes(nums[i])) {
      return true;
    }
  }
  return false;

};
containsDuplicate();
