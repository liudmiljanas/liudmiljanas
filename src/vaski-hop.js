'use strict';

var scissors, scissors2, paper, paper2, well,well2, continueButton, resetButton, playerSelection, computerSelection, playerName;

var setComputerSelection = function () {
    computerSelection = Math.floor(Math.random() * 3) + 1;
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

//function assignComputerSelection() {
//    computerSelection = setComputerSelection();
//} 

function addEventListeners() {
    scissors.addEventListener("click", function () {
        scissors.classList.toggle('active');
        paper.classList.remove('active');
        well.classList.remove('active');
        playerSelection = 1;
        showPlayerSelection();
    });

    paper.addEventListener("click", function () {
        scissors.classList.remove('active');
        paper.classList.toggle('active');
        well.classList.remove('active');
        playerSelection = 2;
        showPlayerSelection();
    });

    well.addEventListener("click", function () {
        scissors.classList.remove('active');
        paper.classList.remove('active');
        well.classList.toggle('active');
        playerSelection = 3;
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

	
function winner() {
	
	
    if (playerSelection === computerSelection){
        window.alert("IT'S A BLOODY DRAW");
    } else if (
        playerSelection === 1 && computerSelection === 2 ||
        playerSelection === 2 && computerSelection === 3 ||
        playerSelection === 3 && computerSelection === 1) {
        window.alert("PLAYAR WINS");
    } else if (
        playerSelection === 1 && computerSelection === 3 ||
        playerSelection === 2 && computerSelection === 1 ||
        playerSelection === 3 && computerSelection === 2) {
        window.alert("COMPUTAR WINS");
    }

}

// If player choice is done, reveals computer selection, removes continue button, declares winner

var displayComputerSelection = function () {

    if (playerSelection === -1 || playerSelection === undefined) {
        playerName.innerHTML = "Please select something first!!!";
        playerName.classList.add('errors')
        return
    }
    else {
        setComputerSelection();
        continueButton.classList.add('hidden');

        if (computerSelection == 1) {
           scissors2.classList.remove('hidden')
        } else if (computerSelection == 2) {
            paper2.classList.remove('hidden')
        } else if (computerSelection == 3) {
            well2.classList.remove('hidden')
        }
        winner();
    }
};