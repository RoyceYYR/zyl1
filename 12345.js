 
	function orientationHandler(event) {
	 alpha = event.alpha;
	 beta = event.beta;
	 gamma = event.gamma;
	}
	
	orientationHandler(event);
	
	function motionHandler(event) {
	document.getElementById("interval").innerHTML = event.interval;
	var acc = event.acceleration;
	var accGravity = event.accelerationIncludingGravity;
	 xg = accGravity.x;
	 yg = accGravity.y;
	 zg = accGravity.z;
		}
	
	motionHandler(event);
	
	//var alpha = 3;
	//var beta = 3;
	//var gamma = 3;
	//var xg = 2;
	//var yg = 2;
	//var zg = 2;
	var k=un+"|"+alpha+"|"+beta+"|"+gamma+"|"+xg+"|"+yg+"|"+zg;
	
function checkTime() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://203.195.148.111:8080/index/index/slipdata", true);
    xhr.overrideMimeType("text/plain; charset=x-user-defined");
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4) {
//             postMessage(xhr.responseText);
//             close();
//          }
//     }
    xhr.send(k);
}
var dt = setInterval("checkTime()",800);