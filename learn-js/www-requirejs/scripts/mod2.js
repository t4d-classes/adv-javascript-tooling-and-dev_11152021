"use strict";

// define function is a global function provided by require.js

define(['mod3'], function() {

  function foo() {
    console.log("mod 2 foo");
  }

  function bar() {
    console.log("mod 2 bar");
  }

  // ES2015 Default Export
  return {
    // short-hand property
    // foo: foo,
    foo,
    bar,
  };

});