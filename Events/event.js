const EventEmitter = require("node:events");

class MyBirthday extends EventEmitter {}

const MyBirthday1 = new MyBirthday();

MyBirthday1.on("birthday", () => {
  console.log("Happy Birthday");
});
MyBirthday1.on("birthday", () => {
  console.log("I Will Send You A Gift");
});


MyBirthday1.emit("birthday")