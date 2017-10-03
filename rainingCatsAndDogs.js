function Animal(raining, noise){
	this.raining = raining;
	this.noise	= noise;
	this.makeNoise = function(){
		if(this.raining === true){
			console.log(this.noise);
		}
	};
}
//new means instance (instantiates)
var dogs = new Animal(true, "Woof");
var cats = new Animal(false, "Meow");

dogs.makeNoise();
cats.makeNoise();

cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs,cats) {
	if(dogs.raining === true && cats.raining === true){
		console.log("DOGS AND CATS LIVING TOGETHER? THAT IS MASS HYSTERIA!");
	}
};

massHysteria(dogs,cats);
