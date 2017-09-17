'use strict';

var scissors, scissors2, paper, paper2, well,well2, continueButton, resetButton, playerSelection, magicNumber, playerName;

var computerSelection = function () {
    return Math.floor(Math.random() * 3) + 1;
};

var init = function () {
    magicNumber = 0;
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

function setComputerNumber() {
    magicNumber = computerSelection();
} 

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

    if (playerSelection === magicNumber){
        window.alert("IT'S A BLOODY DRAW");
    } else if (
        playerSelection === 1 && magicNumber === 2 ||
        playerSelection === 2 && magicNumber === 3 ||
        playerSelection === 3 && magicNumber === 1) {
        window.alert("PLAYAR WINS");
    } else if (
        playerSelection === 1 && magicNumber === 3 ||
        playerSelection === 2 && magicNumber === 1 ||
        playerSelection === 3 && magicNumber === 2) {
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
        setComputerNumber();
        continueButton.classList.add('hidden');

        if (magicNumber == 1) {
           scissors2.classList.remove('hidden')
        } else if (magicNumber == 2) {
            paper2.classList.remove('hidden')
        } else if (magicNumber == 3) {
            well2.classList.remove('hidden')
        }
        winner();
    }
};