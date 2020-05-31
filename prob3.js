/*

"sendEvent" function is being spammed by a user [ roughly 100 events per second ], implement a function "processUserAnalytics" to only send events to the server at a reasonable rate [ roughly 10 events to the server per second], make sure no events are discarded and at the same time server should not be spammed, additionally now the server can accept multiple events in batches

also keep in mind to send all events
*/


let allowedClicks = 10; // per second
let timeGap = 1000; // in ms

let batch = [];

let lastPrintTS = 0;

function processUserAnalytics(e){

	// implement this

	if(Date.now() >= lastPrintTS + timeGap) {
		lastPrintTS = Date.now();
		console.log(`Sending multiple events to server ${batch.length} [ ${new Date().toISOString() } ] : ${JSON.stringify(batch,0,2)}`);
		batch = [];
	}

	if(batch.length == allowedClicks) {
		
		setTimeout(function() {
			return processUserAnalytics(this,e);
		}, lastPrintTS + timeGap - Date.now());

		return;
	}

	batch.push(e);

}



function sendEvent(){

	processUserAnalytics({eventname:"card swipe",headline:"modi became pm",userid:"arjit", cardid:"modi1234" });

	setTimeout( sendEvent, Math.floor(5 + Math.random() * 10))

}

sendEvent();

