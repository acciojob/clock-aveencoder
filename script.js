//your JS code here. If required.
function updateTime(){
	 const date = new Date();
	const ds = date.toLocaleDateString();
	const ts = date.toLocaleTimeString();
 document.getElementById("timer").textContent = ds +','+ts;
	
	
}

updateTime();
setInterval(updateTime, 1000);