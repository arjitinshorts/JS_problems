/*

Problem statement 1: 

"click" function is being spammed by a user [ roughly 100 clicks per second ], implement a function "processUserClick" to only send reasonable clicks to the server [ roughly 10 clicks to the server per second], discard all other clicks.

*/


//Frequency of clicks, per second
let cntClicks = 0;
let averageClicks = 100;
let allowedClicks = 10;
let lastTS = 0;

function processUserClick_algo1(e){

	// Sending first 10 clicks for every 100 clicks
	// Definitely not a good method

	cntClicks++;
	if(cntClicks == averageClicks) {
		cntClicks = 1;
	}
	if(cntClicks <= allowedClicks)
		console.log(`Sending click to server [ ${new Date().toISOString() } ] : ${JSON.stringify(e,0,2)}`);

}


function processUserClick_algo2(e){

	// Sending 1 out of every 10 clicks to the server.
	// Better than algo1 because it maintains the average

	if(cntClicks%allowedClicks==0)
		console.log(`Sending click to server [ ${new Date().toISOString() } ] : ${JSON.stringify(e,0,2)}`);
	
	cntClicks++;
}

function processUserClick_algo3(e) {
	if(Date.now()-lastTS <= 100) return;
	lastTS = Date.now();
	console.log(`Sending click to server [ ${new Date().toISOString() } ] : ${JSON.stringify(e,0,2)}`);
}

function processUserClick(e) {
	
	//processUserClick_algo1(e);
	
	// processUserClick_algo2(e);

	processUserClick_algo3(e);
}

function click(){

	processUserClick({click:true,x:0,y:0});

	setTimeout( click, Math.floor(5 + Math.random() * 10))

}

click();