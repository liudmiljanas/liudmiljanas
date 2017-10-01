'use strict';

var allPlayerImageSelectors, scissors, scissors2, paper, paper2, well,well2, continueButton, resetButton, playerSelection, computerSelection, playerName;


var typeScissors = 1;
var typePaper = 2;
var typeWell = 3;

var allSelectionTypes = [typeScissors, typePaper, typeWell];


var setComputerSelection = function () {
    computerSelection = allSelectionTypes[Math.floor(Math.random() * allSelectionTypes.length)];

};

var removeAllUserSelections = function (){
	for (var i=0; i<allPlayerImageSelectors.length; i++) {
		allPlayerImageSelectors[i].classList.remove('active');
	};
};


var init = function () {
    computerSelection = 0;
    playerSelection = -1;
   	scissors2.classList.add('hidden');
    paper2.classList.add('hidden');
    well2.classList.add('hidden');
	removeAllUserSelections();
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
	allPlayerImageSelectors = [scissors, paper, well];
};



var highlightUserSelection = function (htmlObject){
	removeAllUserSelections();
	htmlObject.classList.add('active');
};

function addEventListeners() {
    scissors.addEventListener("click", function () {
		highlightUserSelection(scissors);
        playerSelection = typeScissors;
        showPlayerSelection();
    });

    paper.addEventListener("click", function () {
		highlightUserSelection(paper);
        playerSelection = typePaper;
        showPlayerSelection();
    });

    well.addEventListener("click", function () {
        highlightUserSelection(well);
        playerSelection = typeWell;
        showPlayerSelection();
    });

	
//	setBorder+removeBorder
// setPlayerSelection

	
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
			
		case playerSelection === typeScissors && computerSelection === typePaper:
		case playerSelection === typePaper && computerSelection === typeWell:
		case playerSelection === typeWell && computerSelection === typeScissors:
			gameOutcome = 'playerWins';
			break;
		
		case playerSelection === typeScissors && computerSelection === typeWell:
		case playerSelection === typePaper && computerSelection === typeScissors:
        case playerSelection === typeWell && computerSelection === typePaper:
			gameOutcome = 'computerWins';
			break;
		}
};

var resultTexts = {
	playerWins: "PLAYAR WINS",
	computerWins:"COMPUTAR WINS",
	draw: "IT'S A BLOODY DRAW"
};

function announceGameResult(){
	window.alert(resultTexts[gameOutcome])
};
	



	
//	switch (gameOutcome) {
//			
//	  case 'playerWins': gameResultText = "PLAYAR WINS";
//		break; 		
//
//	  case 'computerWins': gameResultText = "COMPUTAR WINS";
//		break;
//
//	  case 'draw': gameResultText = "IT'S A BLOODY DRAW";		
//		break;
//
//	  default: gameResultText = "Oops something went wrong";
//	};
//};	
	
		

var displayComputerSelection = function () {

    if (playerSelection === -1 || playerSelection === undefined) {
        playerName.innerHTML = "Please select something first!!!";
        playerName.classList.add('errors')
        return
    }
    else {
        setComputerSelection();
        continueButton.classList.add('hidden');

        if (computerSelection == typeScissors) {
           scissors2.classList.remove('hidden')
        } else if (computerSelection == typePaper) {
            paper2.classList.remove('hidden')
        } else if (computerSelection == typeWell) {
            well2.classList.remove('hidden')
        }
        calcWinner();
		announceGameResult();
    }
};