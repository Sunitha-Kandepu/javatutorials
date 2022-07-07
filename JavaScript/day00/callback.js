function printWorld(callbackParam) {
	console.log(callbackParam)
}

function callWorld(callback) {
	let value;

	console.log("[Wait 3 sec . . .]");

	setTimeout(function() {
		value = "World";
		callback(value);
	}, 3000);

}

console.log("Hello");
callWorld(printWorld);