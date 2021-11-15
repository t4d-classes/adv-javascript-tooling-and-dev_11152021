"use strict";

// define function is a global function provided by require.js

define(function() {

  function foo() {
    console.log("mod 2 foo");
  }

  function bar() {
    console.log("mod 2 bar");
  }

  return {
    // short-hand property
    // foo: foo,
    foo,
    bar,
  };

});