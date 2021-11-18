
let message = "hello, world!";

const displayMessage = msg => {
  console.log(this);
  console.log(msg);
};



displayMessage(message);