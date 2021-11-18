const displayMsg = (msg: string) => {
  console.log(`Message: ${msg.toUpperCase()}`);
}

const helloWorldMsg: string = "Hello, World!";

displayMsg(helloWorldMsg);
displayMsg('42');

type UndefinedString = string | undefined

class Person {

  private _firstName: UndefinedString;

  constructor(fn: string) {
    this._firstName = fn;
  }

  fullName() {
    if (this._firstName) {
      return this._firstName.toUpperCase();
    } else {
     return;
    }
  }

}

const person = new Person("Bob");
// console.log(person._firstName);

console.log(person);