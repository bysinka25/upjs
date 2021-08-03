"use strict";
let num = 266219;
console.log(
  num
    .toString()
    .split("")
    .reduce((res, item) => item * res, 1)
);
let number = num ** 3;
console.log(number);
console.log(String(number).slice(0, 2));
