//your JS code here. If required.
let button=document.getElementById("incrementBtn");
let counter=document.getElementById("counter");
function incrementCounter() {
	alert(counter.textContent)
	let cl=parseInt(counter.textContent);
	counter.textContent=cl+1;
}