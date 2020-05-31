// Problem statement 5: Create following object and print it

// {  a : { b : { c :  { d …… z: { alphabets : 'abcd…..z' } …. } 

//Code starts




// let util = require('util');

let str = "";

let ch = "a";

function nextChar(a) {
	return String.fromCharCode(a.charCodeAt(0) + 1);
}

for(let i=0; i<26; i++, ch = nextChar(ch)) {
	str += ch;
}

//console.log(str);

let ans = {};
ans['alphabets'] = str;

for(let i=25;i>=0;i--) {
	// ch = String.fromCharCode(ch.charCodeAt(0) - 1);
	let obj = {};
	obj[str[i]] = ans;
	ans = obj;
}

console.log(JSON.stringify(ans,0,2));

// console.log(util.inspect());
