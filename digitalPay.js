var digitalPay = function(){
	this.hungry = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;
}

this.feed = function() {
	if(this.hungry === true){
		console.log("that was yummy!");
		this.hungry = false;
		this.sleepy	= true;
	}
	else{
		console.log("No thanks.");
	}
};
