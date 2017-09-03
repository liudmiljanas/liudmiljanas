var scissors, paper, well, continueButton, resetButton, playerSelection, magicNumber;

var computerSelection = function () {
    return Math.floor(Math.random() * 3) + 1;
};

var init = function () {
    magicNumber = 0;
    playerSelection = -1;
    document.querySelector('#scissors2').classList.add('hidden');
    document.querySelector('#paper2').classList.add('hidden');
    document.querySelector('#well2').classList.add('hidden');
    scissors.classList.remove('active');
    paper.classList.remove('active');
    well.classList.remove('active');
    document.querySelector("#playerName").innerHTML = "Choose wisely";
    document.querySelector('#continue').classList.remove('hidden');
    document.querySelector("#playerName").classList.remove('errors');
};

function start() {
    initializeVariables();
    init();
    addEventListeners();
} 


function initializeVariables() {

    scissors = document.getElementById('scissors');
    paper = document.getElementById('paper');
    well = document.getElementById('well');
    continueButton = document.getElementById('continue');
    resetButton = document.getElementById('reset');
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

    continueButton.addEventListener("click", displayComputerSelection);

    resetButton.addEventListener("click", init);

}


var showPlayerSelection = function () {
    document.querySelector("#playerName").innerHTML = "Your selection is " + playerSelection;
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
        document.querySelector("#playerName").innerHTML = "Please select something first!!!";
        document.querySelector("#playerName").classList.add('errors')
        return
    }
    else {
        setComputerNumber();
        document.querySelector('#continue').classList.add('hidden');

        if (magicNumber == 1) {
            document.querySelector('#scissors2').classList.remove('hidden')
        } else if (magicNumber == 2) {
            document.querySelector('#paper2').classList.remove('hidden')
        } else if (magicNumber == 3) {
            document.querySelector('#well2').classList.remove('hidden')
        }
        console.log("computer selection is " + magicNumber);
        console.log("Player selection is " + playerSelection);
        winner();
    }
};