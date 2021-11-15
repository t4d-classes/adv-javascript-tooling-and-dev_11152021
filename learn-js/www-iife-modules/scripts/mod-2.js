// IIFE - Immediately Invoked Function Expression
(function(global) {

  var message = "hello";

  function setMessage(msg) {
    message = msg;
  }

  function doIt() {
    console.log(message);
  }

  // export through the return
  var jQuery = function(param) {

    if (typeof param === "string") {
      return document.querySelector(param);
    }

    if (typeof param === "function") {
      document.addEventListener("DOMContentLoaded", param);
    }


  }

  jQuery.ajax = function() { }

  window.jQuery = jQuery;
  window.$ = jQuery;

})(window);