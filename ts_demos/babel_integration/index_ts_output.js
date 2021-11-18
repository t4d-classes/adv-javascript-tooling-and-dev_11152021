"use strict";
var displayMsg = function (msg) {
    console.log("Message: ".concat(msg.toUpperCase()));
};
var helloWorldMsg = "Hello, World!";
displayMsg(helloWorldMsg);
displayMsg('42');
var Person = /** @class */ (function () {
    function Person(fn) {
        this._firstName = fn;
    }
    Person.prototype.fullName = function () {
        return this._firstName;
    };
    return Person;
}());
var person = new Person("Bob");
// console.log(person._firstName);
console.log(person._firstName);
