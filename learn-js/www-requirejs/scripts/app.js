"use strict";

console.log("app.js");

require(['cool/mod1'], function(mod1) {

  mod1.foo();
  mod1.bar();

});

setTimeout(() => {

  require(['cool/mod1', 'mod2'], function(mod1, mod2) {

    mod1.foo();
    mod1.bar();

    mod2.foo();
    mod2.bar();
  
  });

}, 10000);