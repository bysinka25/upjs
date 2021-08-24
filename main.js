"use strict";
let lang = "ru";
let n;
if (n === "ru") {
  console.log(
    "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
  );
} else if (n === "en") {
  console.log("Monday,Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}
switch (lang) {
  case "ru":
    alert(
      "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
    );
    break;
  case "en":
    alert("Monday,Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
    break;
}
let language = [
  "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье",
  "Monday,Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
];
console.log(language[0]);
console.log(language[1]);
let NamePerson = "Артем";
NamePerson = "Артем" ? console.log("Директор"),
  console.log("Студент");
NamePerson = "Максим"
  ? console.log("Преподаватель")
  : NamePerson !== console.log("Студент");
