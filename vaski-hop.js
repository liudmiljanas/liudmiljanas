// just some useless comment from 2017-08-13. And another one here.

/*vaski chi .

-Player can select 1 out of 3 signs
-Computer player then randomly rolls 1 out of 3 signs
-The winner is selected, and displayed on screen

*/

//declaring most of variables here

var scissors, paper, well, continueButton, resetButton, playerSelection, magicNumber;

//defining selectors here

scissors = document.getElementById('scissors');
paper = document.getElementById('paper');
well = document.getElementById('well');
continueButton = document.getElementById('continue');
resetButton = document.getElementById('reset')

// function that resets all to starting state
var init = function() {
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
  document.querySelector("#playerName").classList.remove('errors')

}

init();


// Get's a random integer 1, 2 or 3 .
var computerSelection = function() {
  return Math.floor(Math.random() * 3) + 1
};

function setComputerNumber() {
  magicNumber = computerSelection();
  console.log("checking random number: " + magicNumber);
};


// saves what pic player has selected, and adds a style frame

scissors.addEventListener("click", function() {
  scissors.classList.toggle('active');
  paper.classList.remove('active');
  well.classList.remove('active');
  playerSelection = 1;
  showPlayerSelection();
});

paper.addEventListener("click", function() {
  scissors.classList.remove('active');
  paper.classList.toggle('active');
  well.classList.remove('active');
  playerSelection = 2;
  showPlayerSelection();
});

well.addEventListener("click", function() {
  scissors.classList.remove('active');
  paper.classList.remove('active');
  well.classList.toggle('active');
  playerSelection = 3;
  showPlayerSelection();
});

// Tells user what he's selected
var showPlayerSelection = function() {
  document.querySelector("#playerName").innerHTML = "Your selection is " + playerSelection;
};


// declares who wins the game 

function winner() {

  if (
    playerSelection === 1 & magicNumber === 1 ||
    playerSelection === 2 & magicNumber === 2 ||
    playerSelection === 3 & magicNumber === 3) {
    window.alert("IT'S A BLOODY DRAW");
  } else if (
    playerSelection === 1 & magicNumber === 2 ||
    playerSelection === 2 & magicNumber === 3 ||
    playerSelection === 3 & magicNumber === 1) {
    window.alert("PLAYAR WINS");
  } else if (
    playerSelection === 1 & magicNumber === 3 ||
    playerSelection === 2 & magicNumber === 1 ||
    playerSelection === 3 & magicNumber === 2) {
    window.alert("COMPUTAR WINS");
  }

};




// If player choice is done, reveals computer selection, removes continue button, declares winner

var displayComputerSelection = function() {

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

continueButton.addEventListener("click", displayComputerSelection);

resetButton.addEventListener("click", init);
