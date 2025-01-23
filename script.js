//your JS code here. If required.
let button=document.getElementById("incrementBtn");
let counter=document.getElementById("counter");
// function incrementCounter() {
// 	alert(counter.textContent)
// 	let cl=parseInt(counter.textContent);
// 	counter.textContent=cl+1;
// }

function incrementCounter() {
  let cl = parseInt(counter.textContent);
  alert(cl); // This will now alert a number, not a string
  counter.textContent = cl + 1;
}