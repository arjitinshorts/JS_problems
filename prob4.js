// Problem statement 4: Implement classes in plain javascript (without using class keyword of course) [ you can use google and medium blogs for this]

/*

Implementing a simple class Person.
Person stores name, age, gender.

It's properties are being inherited by two other classes
Teacher (also stores Subject)
Student (also stores marks)

*/


// Class Person = [name, age, gender]

function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

Person.prototype.getName = function () {
	return this.name;
}

Person.prototype.getAge = function() {
	return this.age;
}

Person.prototype.getGender = function() {
	return this.gender;
}

// Class Teacher = [name, age, gender, subject]

function Teacher(name, age, gender, subject) {
	Person.call(this,name,age,gender);
	this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.getSubject = function () {
	return this.subject;
}

//Class Student = [name, age, gender, marks]

function Student(name, age, gender, marks) {
	Person.call(this,name,age,gender);
	this.marks = marks;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.getMarks = function() {
	return this.marks;
}


let teacher = new Teacher('Manish', 25, 'Male', 'javascript');

let student = new Student('Arjit', 22, 'Male', 0);

console.log('Teacher Record : ', teacher.getName(), teacher.getAge(), teacher.getGender(), teacher.getSubject());

console.log('Student Record : ', student.getName(), student.getAge(), student.getGender(), student.getMarks());
