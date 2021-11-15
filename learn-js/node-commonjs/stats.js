"use strict";

function sum(nums) {
  return nums.reduce(function(sum, num) {
    return sum + num;
  }, 0);
};

function mean(nums) {
  return sum(nums) / nums.length;
}

function range(nums) {
  return Math.max.apply(null, nums) - Math.min.apply(null, nums);
}

module.exports.sum = sum;
module.exports.mean = mean;
module.exports.range= range;