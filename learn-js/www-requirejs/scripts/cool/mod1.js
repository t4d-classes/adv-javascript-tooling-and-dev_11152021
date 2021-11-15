"use strict";

// define function is a global function provided by require.js

define(function() {

  function foo() {
    console.log("mod 1 foo");
  }

  function bar() {
    console.log("mod 1 bar");
  }

  return {
    // short-hand property
    // foo: foo,
    foo,
    bar,
  };

});