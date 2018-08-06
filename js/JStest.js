// Alba Neagra
"use strict"
// Variables
let alba = 0,
	neagra = 1,
	gameOnRun = false,
	gameOver = false,
	firstGame = false,
	score = 1000;


// DOM Variables
let stats = document.getElementById('stats'),
	startGame = document.getElementById('start-game'),
	whiteButton = document.getElementById('white-button'),
	blackButton = document.getElementById('black-button'),
	userDate = document.getElementById('user-date'),
	textField = document.getElementById('user-name'),
	circle = document.getElementById('circle'),
	betBox = document.getElementById('bet'),
	x = '';

	blackButton.style.display = 'none';
	whiteButton.style.display = 'none';
	betBox.style.display = 'none';


//  EVENTS
startGame.addEventListener('click', function(){
	whiteButton.style.display = 'inline';
	blackButton.style.display = 'inline';
	startGame.style.display = 'none';
	textField.style.display = 'none';
	betBox.style.display = 'inline';
	gameOnRun = true;
	showStats();

});

whiteButton.addEventListener('click', function(){

	checkForGameStatsWhite();
	showStats();
	circle.style.backgroundColor = "white";
});

blackButton.addEventListener('click', function(){

	checkForGameStatsBlack();
	showStats();
	circle.style.backgroundColor = "black";
});




//  END   EVENTS


function resetGame(){
	let	bet = document.getElementById("bet").value;
	gameOnRun = false;
	gameOver = false;
	score = 1000;
	bet = "1";
	betBox.style.display = 'none';
	startGame.style.display = 'inline';
	blackButton.style.display = 'none';
	whiteButton.style.display = 'none';
}

function random(){
	return Math.trunc(Math.random()*2);
}

function showStats(){
	var uName = document.getElementById("user-name").value;
	if(gameOnRun){
		if(!firstGame){
		stats.innerHTML = 'Alege optiunea!';
	}
	userDate.innerHTML = uName + '<br> Buget: $' + Number(score) +'<br><br>Bet';
	}
	if(score <= 0)
		gameOver = true;
	if(gameOver)
	{
		userDate.innerHTML = uName + '<br> Buget: $' +Number(score);
		betBox.style.display = 'none';
		stats.innerHTML = '&nbsp &nbsp Game over!';
		startGame.innerHTML = 'Resetare joc!';
		x = userDate.style.color="black";
		resetGame();
	}
}
 function checkForGameStatsWhite(){
 	var	bet = document.getElementById("bet").value;
 	firstGame = true;
 	let rand = random();
 	if(bet > score){
		stats.innerHTML = '&nbsp &nbsp Bet incorect' ;
	}
	 else if(bet <= 0){
		stats.innerHTML = '&nbsp &nbsp Bet incorect' ;
	}
	else if(isNaN(bet)){
		stats.innerHTML = '&nbsp &nbsp Bet incorect' ;
	}
	else{
		if(rand == alba){
			x = userDate.style.color="green";
			stats.style.color = "#898989";
			score = Number(score) + Number(bet);
			stats.innerHTML = '&nbsp &nbsp A picat:  ' + ' Alba &nbsp' + '<br> &nbsp &nbsp Ai castigat!';
		}
		else{
			x = userDate.style.color="red";
			score = Number(score) - Number(bet);
			stats.style.color = "#990019";
			stats.innerHTML = 'A picat:  ' + 'Neagra' +'<br>Ai Pierdut !';
		}
	}
}

function checkForGameStatsBlack(){
 	var	bet = document.getElementById("bet").value;
	firstGame = true;
 	let rand = random();
	stats.innerHTML = '<br> ' + rand ;
	if(bet > score){
		stats.innerHTML = '&nbsp &nbsp Bet incorect' ;
	}
	 else if(bet <= 0){
		stats.innerHTML = '&nbsp &nbsp Bet incorect' ;
	}

	else if(isNaN(bet)){
		stats.innerHTML = '&nbsp &nbsp Bet incorect' ;
	}
	else{
		if(rand == neagra){
			x = userDate.style.color="green";
			stats.style.color = "#898989";
			score = Number(score) + Number(bet);
			stats.innerHTML = 'A picat:  ' + 'Neagra' +'<br>Ai castigat !' ;
		}
		else{
			x = userDate.style.color="red";
			score = Number(score) - Number(bet);
			stats.style.color = "#990019";
			stats.innerHTML = '&nbsp &nbsp A picat:  ' + '  Alba  ' +'<br>&nbsp &nbsp Ai Pierdut !' ;
		}
	}
}
