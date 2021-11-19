import { log } from './utils';
// import { framework } from './vendor';

log("hello, world!!!!!!");

// framework();

setTimeout(() => {
  import('./vendor').then(m => m.framework())
}, 10000);