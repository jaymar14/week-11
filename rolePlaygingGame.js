function Character(name,profession,gender,age,strength,hitpoints){
	this.name = name;
	this.profession = profession; 
	this.gender = gender;
	this.age 	= age; 
	this.strength = strength;
	this.hitPoints = HitPoints;
	
	this.printStats = function(){
		var stats = "Name: " + this.name;
		stats += "\nProfession: " + this.profession;
		stats += "\nGender: " + this.gender;
		stats += "\nAge: " + this.age;
		stats += "\nStrength: " + this.strength;
		stats += "\nhitPoints: " + this.hitPoints;
		console.log(stats);
	}

	this.isAlive function(){
		if(this.hitPoints > 0){
			console.log(this.name + " is still kicking tail!");
			return true;
		}
		console.log(this.name + "is pushing up the daisies");
		return false;
	}

//alt way of doing function above.
	this.isAliveTheAltVersion = function(){
		this.hitPoints > 0 ? console.log("Live");
		return this.hitPoints > 0;
	}

	this.attack = function(opponent){
		opponent.hitpoints -= this.strength;
		
	}
};
