// import "core-js/stable";
// import "regenerator-runtime/runtime";

// ES2022

class Car {

  #transmission = "automatic";

  drive = () => {
    console.log(this.#transmission);
  }

}

const c = new Car();

// console.log(c.transmission); // should be undefined

const drive = c.drive;

drive(); // should be automatic

// ES2021

let x = true;
let y = false;

x &&= y;
console.log(x);

x ||= y;
console.log(x);

x ??= y;
console.log(x);

// ES2020

const num = BigInt(2000);
console.log(num);

console.log(false ?? true);

// ES2019

try {
  throw Error("test")
} catch {
  console.log("error occurred");
}

// ES2018

const reDate = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
console.log(reDate.exec('2022-04-07').groups);


// ES2017

const doIt = async () => {

  console.log(await Promise.resolve("done"))

};

// ES2016

console.log(2 ** 3);

console.log([1,2,3,4].includes(3));

// ES6 - 2015

class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p = new Person("Bob", "Smith");
console.log(p.fullName());

const colors = {
  red: 'f00',
  green: '0f0',
}

console.log({ ...colors, blue: '00f' });

const set = new Set([1, 2, 3]);
set.has(2);

function* nums() {
  yield 1;
  yield 2;
}

for (let n of nums()) {
  console.log(n);
}

// ES5 - ES2010

console.log([1,2,3,4].map(n => n * 2));