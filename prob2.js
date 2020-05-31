/*

Problem statement 2: 

"sendEvent" function is being spammed by a user [ roughly 100 events per second ], implement a function "processUserAnalytics" to only send events to the server at a reasonable rate [ roughly 10 events to the server per second], make sure no events are discarded and at the same time server should not be spammed

*/

let allowedEvents = 10;

let reqTimeDiff = 1000/allowedEvents;

let lastTS = 0;

function processUserAnalytics(e){

	// implement this

	if(Date.now()-lastTS < reqTimeDiff)
		
		/*process.nextTick(function() {
			return processUserAnalytics(this,e);
		});*/
		
		setTimeout(function() {
			return processUserAnalytics(this,e)
		},reqTimeDiff-(Date.now()-lastTS));
	
	else {
		
		lastTS = Date.now();

		console.log(`Sending single event to server [ ${new Date().toISOString() } ] : ${JSON.stringify(e,0,2)}`);
	}

}



function sendEvent(){

	processUserAnalytics({eventname:"card swipe",headline:"modi became pm",userid:"arjit", cardid:"modi1234" });

	setTimeout( sendEvent, Math.floor(5 + Math.random() * 10))

}

sendEvent();

