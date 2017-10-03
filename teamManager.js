var inquirer = require('inquirer');

function Player(name, position, offense, defense, goodGame, badGame){
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;
	this.goodGame = goodGame;
	this.badGame = badGame;
}
Player.printStats = function(){
	console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\nGoodGame: " + this.goodGame "\nBadGame: " + this.badGame);
};
var count = 0;





