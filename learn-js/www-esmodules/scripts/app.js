// named imports
// import { sum as sum2, mean } from './stats.js';
// import stats from './stats.js';

// import { sum, mean } from './stats.js';

const nums = [1,2,3,4,5];

setInterval(() => {

  console.log("running interval");
  
  import('./stats.js').then(stats => {
    console.log(stats.sum(nums))
    console.log(stats.mean(nums))
  });

  require(['stats'], function(stats) {
    
  })

}, 2000);
