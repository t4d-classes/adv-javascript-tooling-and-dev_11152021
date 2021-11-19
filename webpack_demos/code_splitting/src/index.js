import $ from 'jquery';
import { log } from './utils';
import { framework } from './vendor';

log("hello, world!!!!!!");

$("body").append($("<div>").text("hi"));

framework();

// setTimeout(() => {
//   import('./vendor').then(m => m.framework())
// }, 10000);