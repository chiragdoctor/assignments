//type your javascript code here

var nums = [0,1,2,0,1,1,1,2,2,3,3,4];
var count = 0;
nums = nums.sort(function(a, b) {
  return a - b;
});


for(i = 0; i < nums.length; i++) {
    if(nums[i] !== nums[i + 1]) {
        count++
    }
}

return count;