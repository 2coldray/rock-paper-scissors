console.log('Hello World');

// Computer Play Function

// create rock paper scissors array
const computerChoices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    // return a random instance of rock of an element in the above array
    console.log(computerChoices[Math.floor(Math.random() * computerChoices.length)]);
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}


// Take in the user's choice
// const usersChoice = prompt('Enter rock, paper, or scissors for your selection');
// console.log(usersChoice);3

//const playerSelection = 'rock';
//const computerSelection = computerPlay();

// bring in button elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

// bring in all other elements
const roundResults = document.getElementById('round');
const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');
const tieScoreEl = document.getElementById('tie-score');

// add event listener to rock button
rockBtn.addEventListener('click', function() {
    // get the text of the rock
    const rockText = rockBtn.textContent;
    // get the computer selection
    const computerSelection = computerPlay();
    // play round
    playRound(rockText, computerSelection);
});

// add event listener to the paper button
paperBtn.addEventListener('click', function() {
    // get text of paper button
    const paperText = paperBtn.textContent;
    // get the computer selection
    const computerSelection = computerPlay();
    // play round
    playRound(paperText, computerSelection);
});

// add event listener to scissors button
scissorsBtn.addEventListener('click', function() {
    // get text of scissors button
    const scissorsText = scissorsBtn.textContent;
    // get computer selection
    const computerSelection = computerPlay();
    //playRound
    playRound(scissorsText, computerSelection);
})

let userScore = 0;
let computerScore = 0;
let ties = 0;

// Play round function
function playRound(playerSelection, computerSelection) {

    // convert playerSelection to lower case for comparison
    const playerChoice = playerSelection.toLowerCase();

    // write out the conditionals
    if (playerChoice === 'rock' && computerSelection === 'scissors') {
        console.log('You Win! Rock beats Scissors');
        userScore++;
        roundResults.textContent = 'You Win! Rock beats Scissors.';
        userScoreEl.textContent = userScore;
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper beats rock!');
        computerScore++;
        roundResults.textContent = 'You Lose! Paper beats Rock.';
        computerScoreEl.textContent = computerScore;
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
        console.log('You Win! Paper beats rock!');
        userScore++;
        roundResults.textContent = 'You Win! Paper beats Rock.';
        userScoreEl.textContent = userScore;
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
        console.log('You Lose! Scissors beats paper');
        computerScore++;
        roundResults.textContent = 'You Lose! Scissors beats Paper.'
        computerScoreEl.textContent = computerScore;
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        console.log('You Win! Scissors beats paper');
        userScore++;
        roundResults.textContent = 'You Win! Scissors beats Paper.';
        userScoreEl.textContent = userScore;
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
        console.log('You lose! Rock beats Scissors');
        computerScore++;
        roundResults.textContent = 'You Lose! Rock beats Scissors.'
        computerScoreEl.textContent = computerScore;
    } else {
        console.log('You tied!');
        ties++;
        roundResults.textContent = 'You Tied!';
        tieScoreEl.textContent = ties;
    }

    if (userScore === 5) {
        roundResults.textContent = 'You have beat the computer!';
        userScore = 0
        computerScore = 0;
        ties = 0;
        userScoreEl.textContent = 0;
        computerScoreEl.textContent = 0;
        tieScoreEl.textContent = 0;
    } else if (computerScore === 5) {
        roundResults.textContent = 'The computer has beat you!';
        userScore = 0
        computerScore = 0;
        ties = 0;
        userScoreEl.textContent = 0;
        computerScoreEl.textContent = 0;
        tieScoreEl.textContent = 0;
    }
}


//playRound(playerSelection, computerSelection);
let play = true;
// Game function
// write variables to keep score
function game() {
    // loop to 5 and call play around on each iteration
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter rock, paper, or scissors');
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    play = false;
    if (userScore > computerScore) {
        console.log('You won beat the computer');
    } else {
        console.log('You lost to the computer');
    }

}

// game loop created
// while (play) {
//     game();
// }


