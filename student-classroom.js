//require student module exported from student.js
var student = require("./student.js");

//const funct for creating classroom objcts
var classroom = function(profName, roomNum){
	//this.students will hold all student objcts
	this.student = [];
	this.profName = profName;
	this.roomNum = roomNum;

//method that creates a student using  student const.
//it then pushes the new student objct  to this.students and updates this.numStudents.
	this.addStudent = function(x,y,z){
		this.student.push(new Student(x,y,z));
	};

	//this method will tell you how many students are in the class. 
	this.studentCount = function(){
		return this.student.length;
	};
};
//exporting our classroom const. I will require it in main.js
module.exports = student-classroom;
