function Human(name,profession,gender,age,strength,HitPoints, PrintStats){
	this.name = Spencer;
	this.profession = developer;
	this.gender = male;
	this.age = 21;
	this.strength = bodybuilder;
	this.HitPoints = fit;
	this.PrintStats = function(){
		var stats = "Name: " + this.name;
		stats += "\nProfession: " + this.profession;
		stats += "\nGender: " + this.gender;
		stats += "\nAge: " + this.age;
		stats += "\nstrenght: " + this.strength;
		stats += "\nHitPoints: " + this.HitPoints;
		console.log(stats);
	} 

	this.isAlive = funciton(){
		if(this.hitPoints > 0){
			console.log(this.name + "is still kicking");
			return true;
		}
		console.log(this.name + " is pushing up the daisies");
		return false;
	}

	this.isAliveTheAltVersion = funciton(){
		this.hitPoints > 0 ? console.log("Live") : console.log("")
		return this.hitPoints > 0;
	}

	this.attack = function(opponent){
		opponent.hitPoints -= this.strength;
	}

	this.levelUp = function(){
		this.age += 1;
		this.strength +5;
		this.hitPoints += 25;

	}

	var warrior = new Human("Conan", "Barbarian", "M", 25, 10, 75);
	var rogue = new Human("Subotai", "Thief", "M", 40, 10, 75);

	var warrior.PrintStats();
	var rogue.PrintStats();

	rogue.levelUp();
	warrior.isAlive();

	while(warrior.isAlive() && rogue.isAlive()){
		warrior.attack(rogue);
		rogue.attack(warrior);

		warrior.printStats();
		rogue.printStats();

	}
	if(warrior.isAlive()){
		console.log("The Warrior is Victorious");
	} else {
		console.log(rogue.name is + " is Victorious!");
	}
	

} 