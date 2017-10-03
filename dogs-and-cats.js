var dogs = {
	raining: true,
	noise: "woof!",
	makeNoise: function(){
		is(this.raining){
			console.log(this.noise);
		}
	}

};

var cat = {
	raining: false,
	noise:"meow!",
	makeNoise: function(){
		if(this.raining) {
			console.log(this.noise);
		}
	}
};

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs,cats){
	if(dogs.raining === true && cats.raining === true){
		console.log("Dogs and cats living together! mass..")
	}
};
massHysteria(dogs, cats);

