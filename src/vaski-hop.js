'use strict';

var allPlayerImageSelectors, allComputerImgs, scissors, scissors2, paper, paper2, well, well2, continueButton, resetButton, playerName, streakNumberSelector, wonCountSelector, lostCountSelector, drawCountSelector;

let playerSelection, computerSelection;

var [streakNumber, wonCount, lostCount, drawCount] = [0,0,0,0];

function createFigure(associatedNumber, name) {
	this.associatedNumber = associatedNumber;
	this.name = name;
	this.setStrongerThan = function (overWhat) {
		this.winsAgainst = overWhat;
	};
	this.isStrongerThan = function (otherFigure) {
		return (this.winsAgainst === otherFigure)
	}
}

var typeScissors = new createFigure(1, 'Scissors');
var typePaper = new createFigure(2, 'Paper');
var typeWell = new createFigure(3, 'Well');

typeScissors.setStrongerThan(typePaper);
typePaper.setStrongerThan(typeWell);
typeWell.setStrongerThan(typeScissors);


function checkWinner(playerFigure, computerFigure) {
	switch (true) {
		case playerFigure == computerFigure:
			return gameOutcome.draw;
			break;
		case playerFigure.isStrongerThan(computerFigure):
			return gameOutcome.playerWins;
			break;
		default:
			return gameOutcome.computerWins;
	}
};

const gameOutcome = {
	playerWins: "PLAYAR WINS",
	computerWins: "COMPUTAR WINS",
	draw: "IT'S A BLOODY DRAW"
};

function announceGameResult(someText) {
	window.alert(someText);
};

var allSelectionTypes = [typeScissors, typePaper, typeWell];

var setComputerSelection = function () {
	computerSelection = allSelectionTypes[Math.floor(Math.random() * allSelectionTypes.length)];
};

var removeAllPlayerSelections = function () {
	playerSelection = -1;
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
	removeAllPlayerSelections();
	htmlObject.classList.add('active');
};

var unhideComputerImg = function () {
	allComputerImgs[computerSelection.associatedNumber - 1].classList.remove('hidden');

};

var throwSelectionError = function () {
	playerName.innerHTML = "Please select something first!!!";
	playerName.classList.add('errors')
};

var hideContinueButton = function () {
	continueButton.classList.add('hidden');
};

function unhideContinueButton() {
	document.querySelector('#continue').classList.remove('hidden');

};


var init = function () {
	hideComputerImgs();
	removeAllPlayerSelections();
	setDefaultText();
	unhideContinueButton();
	removeErrorStyle();
	displayStats();
};

function start() {
	initializeVariables();
	init();
	addEventListeners();
}


//function createSelector (elementName){
//	var elementName = document.getElementById(elementName);
//};
//
//createSelector(scissors);

function initializeVariables() {


	scissors = document.getElementById('scissors');
	scissors2 = document.getElementById('scissors2');
	paper = document.getElementById('paper');
	paper2 = document.getElementById('paper2');
	well = document.getElementById('well');
	well2 = document.getElementById('well2');
	streakNumberSelector = document.getElementById('streak_number');
	wonCountSelector = document.getElementById('won');
	lostCountSelector = document.getElementById('lost');
	drawCountSelector = document.getElementById('draws');
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
	playerName.innerHTML = "Your selection is " + playerSelection.name;
};

var selectionNotMade = function () {
	if (playerSelection === -1 || playerSelection === undefined) {
		return true;
	} else {
		return false
	}
};

function calcStats() {

	switch (true) {
		case playerSelection.isStrongerThan(computerSelection):
			streakNumber += 1;
			wonCount += 1;
			break;
		case computerSelection === playerSelection:
			streakNumber += 0;
			drawCount += 1;
			break;
		default:
			streakNumber = 0;
			lostCount += 1;
			
	}
}

function displayStats() {
	streakNumberSelector.innerHTML = streakNumber;
	wonCountSelector.innerHTML = wonCount;
	lostCountSelector.innerHTML = lostCount;
	drawCountSelector.innerHTML = drawCount;
}


var continueGame = function () {

	if (selectionNotMade()) {
		throwSelectionError();
	} else {
		hideContinueButton();
		setComputerSelection();
		unhideComputerImg();
		announceGameResult(checkWinner(playerSelection, computerSelection));
		calcStats();
		displayStats();
	}
};
