'use strict';

console.log("processing stats module");

// named export
export function sum(nums) {
  return nums.reduce(function(sum, num) {
    return sum + num;
  }, 0);
};

// named export
export function mean(nums) {
  return sum(nums) / nums.length;
}

// named export
export function range(nums) {
  return Math.max.apply(null, nums) - Math.min.apply(null, nums);
}


export default {
  sum,
  mean,
  range,

}