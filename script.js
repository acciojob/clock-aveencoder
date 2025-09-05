//your JS code here. If required.
function updateTime(){
	 const date = new Date();
	const ds = date.toLocalDateString();
	const ts = date.toLocalTimeString();
 document.getElementById("timer").textContent = ds +','+ts;
	
	
}

updateTime();
setInterval(updateTimer, 1000);