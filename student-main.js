//require Classroom module exported from student-classroom.js
var student = require("./student-classroom.js");

//creates and stores a new classroom objct 
var firstClass = new Classroom("Aaron", 3187);

//calling addStudent method on our firstClass objct
firstClass.addStudent("Judge", "coding", 3.87);

console.log(firstClass);