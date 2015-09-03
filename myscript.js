alert("Hello World");

// class 1
var amount = 500;

if (amount < 1000) {     alert("Amount is less than 1000"); } else {
alert("Nope"); }

// class 2
var a = 5;
var b = "5";

if (a == b) {
	alert("equal");
} else {
	alert("not equal");
}

// logical operation
var playerOne = 500;
var playerTwo = 600;

var highScore;

if (playerOne > playerTwo) {
	highScore = playerOne;
} else {
	highScore = playerTwo;
}

console.log(highScore);

// tenary operation
var playerOne = 500;
var playerTwo = 600;

var highScore;

var highScore = playerOne > playerTwo? playerOne : playerTwo
var highScore = (playerOne > playerTwo)? playerOne : playerTwo;


// loop
var a = 1; //setup the index
while (a < 10) { //check condition
	console.log(a); //increment index
	a++
}

// for loop
for( var a = 10; a < 10; a++) {
	console.log(a);
}


// function
function myFunction () {
	console.log("We're in the function");
}

function myOtherFunction( x,y ) {
	var myVar = x*y;
	console.log(myVar);
}

function calculateLoan(amount, months, interest, name) {
	var loan = (amount * months)/interest;
	console.log(loan);
}

// class 3
// working with arrays
var multipleValues = [1,2,3,4,5,6];
console.log(multipleValues.length)
var reversedValues = multipleValues.reverse();
var myArrayOfLinks = document.getElementsByTagName("a");
// working with numbers
Math.round(x);
Math.max(1,2,3);
// working with string
.split
.slice
// working with dates
var date = new Date();
var today = today.getYear();


var date1 = new Date(2000,0,1);
var date1 = new Date(2000,0,1);
// working with objects
var player = new Object();
player.name = "Fred";
player.score = 10000;
player.rank = 1;

var player1 = { name: "Fred", score: 10000, rank: 1 }
var player2 = { name: "Sam", score: 500, rank: 5 }

function playerDetails () {
	console.log(this.name + " has a rank of: " +
		this.rank + " and a score of " + this.score);
}

player1.logDetails = playerDetails;
player2.logDetails = playerDetails;

