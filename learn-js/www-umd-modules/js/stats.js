"use strict";



(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['exports'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
      // CommonJS
      factory(exports);
  } else {
      // Browser globals
      // root will be the window object, and the "stats" is
      // the name of the module to be loaded into the global
      // scope (window)
      factory((root.stats = {}));
  }
}(this, function (exports) {

  // attach properties to the exports object to define
  // the exported module properties.

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
  
  exports.sum = sum;
  exports.mean = mean;
  exports.range= range;

}));





