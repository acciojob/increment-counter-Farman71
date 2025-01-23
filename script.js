//your JS code here. If required.
let button=document.getElementById("btn");
let counter=document.getElementById("para");
function incre() {
	alert(counter.textContent)
	let cl=parseInt(counter.textContent);
	counter.textContent=cl+1;
}