"use strict";

require(['stats'], function(stats) {

  const nums = [1,2,3,4,5];

  console.log(stats.sum(nums));
  console.log(stats.mean(nums));
  console.log(stats.range(nums));

});

