chrome.runtime.onMessage.addListener(function(){
	console.log(1111);
	var msg = arguments[0];
	if(!msg){
		return false;
	}
});