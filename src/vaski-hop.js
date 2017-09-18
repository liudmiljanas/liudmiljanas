'use strict';

var scissors, scissors2, paper, paper2, well,well2, continueButton, resetButton, playerSelection, computerSelection, playerName;

var setComputerSelection = function () {
    computerSelection = Math.floor(Math.random() * 3) + 1;
	switch (computerSelection){
		case 1: 
			computerSelection = 'scissorsSelected';
			break;
		case 2:
			computerSelection = 'paperSelected';
			break;
		case 3:
			computerSelection = 'wellSelected';
			break;
	};
};

var init = function () {
    computerSelection = 0;
    playerSelection = -1;
   	scissors2.classList.add('hidden');
    paper2.classList.add('hidden');
    well2.classList.add('hidden');
    scissors.classList.remove('active');
    paper.classList.remove('active');
    well.classList.remove('active');
    playerName.innerHTML = "Choose wisely";
	document.querySelector('#continue').classList.remove('hidden');
   	playerName.classList.remove('errors');
};

function start() {
    initializeVariables();
    init();
    addEventListeners();
} 


function initializeVariables() {

    scissors = document.getElementById('scissors');
	scissors2 = document.getElementById('scissors2');
	paper = document.getElementById('paper');
	paper2 = document.getElementById('paper2');
    well = document.getElementById('well');
    well2 = document.getElementById('well2');

    continueButton = document.getElementById('continue');
    resetButton = document.getElementById('reset');
	playerName = document.getElementById('playerName');
} 


function addEventListeners() {
    scissors.addEventListener("click", function () {
        scissors.classList.toggle('active');
        paper.classList.remove('active');
        well.classList.remove('active');
        playerSelection = 'scissorsSelected';
        showPlayerSelection();
    });

    paper.addEventListener("click", function () {
        scissors.classList.remove('active');
        paper.classList.toggle('active');
        well.classList.remove('active');
        playerSelection = 'paperSelected';
        showPlayerSelection();
    });

    well.addEventListener("click", function () {
        scissors.classList.remove('active');
        paper.classList.remove('active');
        well.classList.toggle('active');
        playerSelection = 'wellSelected';
        showPlayerSelection();
    });


  	var nextTurn = function() {
		continueButton.addEventListener("click", displayComputerSelection)
	};

	nextTurn();
	
  	resetButton.addEventListener("click", init);

}


var showPlayerSelection = function () {
    playerName.innerHTML = "Your selection is " + playerSelection;
};

var gameOutcome, playerWins, computerWins, draw;

function calcWinner (){
	switch (true) {
		case playerSelection === computerSelection:
			gameOutcome = 'draw';
			break;
			
		case playerSelection === 'scissorsSelected' && computerSelection === 'paperSelected':
		case playerSelection === 'paperSelected' && computerSelection === 'wellSelected':
		case playerSelection === 'wellSelected' && computerSelection === 'scissorsSelected':
			gameOutcome = 'playerWins';
			break;
		
		case playerSelection === 'scissorsSelected' && computerSelection === 'wellSelected':
		case playerSelection === 'paperSelected' && computerSelection === 'scissorsSelected':
        case playerSelection === 'wellSelected' && computerSelection === 'paperSelected':
			gameOutcome = 'computerWins';
			break;
		}
};

function announceGameResult(){
	switch (gameOutcome) {
	  case 'playerWins':
		window.alert("PLAYAR WINS");
		break; 		

	  case 'computerWins':
		window.alert("COMPUTAR WINS");
		break;

	  case 'draw':
		window.alert("IT'S A BLOODY DRAW");		
		break;

	  default:
		window.alert("Oops something went wrong");
	};
};
		

var displayComputerSelection = function () {

    if (playerSelection === -1 || playerSelection === undefined) {
        playerName.innerHTML = "Please select something first!!!";
        playerName.classList.add('errors')
        return
    }
    else {
        setComputerSelection();
        continueButton.classList.add('hidden');

        if (computerSelection == 'scissorsSelected') {
           scissors2.classList.remove('hidden')
        } else if (computerSelection == 2) {
            paper2.classList.remove('hidden')
        } else if (computerSelection == 'wellSelected') {
            well2.classList.remove('hidden')
        }
        calcWinner();
		announceGameResult();
    }
};