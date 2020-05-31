/*

Problem statement 6: Create a function alphabet() which can be called in the following way

alphabet().next().next().next().next() => and each next function should print next alphabet abcd…zabcd..z so on

*/

function alphabet() {
	return 'z';
}

function nextChar(ch) {
	if(ch=='z') return 'a';
	return String.fromCharCode(ch.charCodeAt(0)+1);
}
String.prototype.next = function() {
	let ch = nextChar(this);
	console.log(ch);
	return ch;
}


alphabet().next().next().next() 

/*
=> this should print 

a

b

c

*/

alphabet().next().next().next().next()


/*
=> this should print 

a

b

c

d

*/

var a = alphabet()

b = a.next() 

c = b.next() 

d = c.next() 

/*
=> this should print

a

b

c
*/