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
  global.myFirstMod = {
    doIt: doIt,
    setMessage: setMessage,
  };

})(window);