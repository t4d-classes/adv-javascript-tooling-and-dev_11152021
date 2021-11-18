"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var displayMsg = function displayMsg(msg) {
  console.log("Message: ".concat(msg.toUpperCase()));
};

var helloWorldMsg = "Hello, World!";
displayMsg(helloWorldMsg);
displayMsg('42');

var Person = /*#__PURE__*/function () {
  function Person(fn) {
    _classCallCheck(this, Person);

    this._firstName = fn;
  }

  _createClass(Person, [{
    key: "fullName",
    value: function fullName() {
      if (this._firstName) {
        return this._firstName.toUpperCase();
      } else {
        return;
      }
    }
  }]);

  return Person;
}();

var person = new Person("Bob"); // console.log(person._firstName);

console.log(person);