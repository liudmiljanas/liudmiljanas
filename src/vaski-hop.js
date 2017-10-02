'use strict';

var allPlayerImageSelectors, allComputerImgs, scissors, scissors2, paper, paper2, well, well2, continueButton, resetButton, playerSelection, computerSelection, playerName;

var typeScissors = 1;
var typePaper = 2;
var typeWell = 3;

var allSelectionTypes = [typeScissors, typePaper, typeWell];

var setComputerSelection = function () {
	computerSelection = allSelectionTypes[Math.floor(Math.random() * allSelectionTypes.length)];

};

var removeAllUserSelections = function () {
	for (var i = 0; i < allPlayerImageSelectors.length; i++) {
		allPlayerImageSelectors[i].classList.remove('active');
	};
};

var removeErrorStyle = function () {
	playerName.classList.remove('errors')
};

var hideComputerImgs = function () {
	for (var i = 0; i < allComputerImgs.length; i++) {
		allComputerImgs[i].classList.add('hidden');
	}
};

var setDefaultText = function () {
	playerName.innerHTML = "Choose wisely";
}

var highlightUserSelection = function (htmlObject) {
	removeAllUserSelections();
	htmlObject.classList.add('active');
};


var init = function () {
	computerSelection = 0;
	playerSelection = -1;
	hideComputerImgs();
	removeAllUserSelections();
	setDefaultText();
	document.querySelector('#continue').classList.remove('hidden');
	removeErrorStyle();
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
	allComputerImgs = [scissors2, paper2, well2];
};

function addEventListeners() {

	for (let i = 0; i < allSelectionTypes.length; i++) {

		allPlayerImageSelectors[i].addEventListener("click", function () {
			highlightUserSelection(allPlayerImageSelectors[i]);
			playerSelection = allSelectionTypes[i];
			removeErrorStyle();
			showPlayerSelectionText();
		})
	};

	continueButton.addEventListener("click", continueGame);
	resetButton.addEventListener("click", init);
};


var showPlayerSelectionText = function () {
	playerName.innerHTML = "Your selection is " + playerSelection;
};

var gameOutcome, playerWins, computerWins, draw;

function calcWinner() {
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
	computerWins: "COMPUTAR WINS",
	draw: "IT'S A BLOODY DRAW"
};

function announceGameResult() {
	window.alert(resultTexts[gameOutcome])
};

var selectionNotMade = function () {
	if (playerSelection === -1 || playerSelection === undefined) {
		return true;
	} else {
		return false
	}
};

var continueGame = function () {

	if (selectionNotMade()) {
		throwSelectionError();
	} else {
		hideContinueButton();
		setComputerSelection();
		unhideComputerImg();
		calcWinner();
		announceGameResult();
	}
};

var unhideComputerImg = function () {
	allComputerImgs[computerSelection - 1].classList.remove('hidden');

};

var throwSelectionError = function () {
	playerName.innerHTML = "Please select something first!!!";
	playerName.classList.add('errors')
};

var hideContinueButton = function () {
	continueButton.classList.add('hidden');
};
