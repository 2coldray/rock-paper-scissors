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
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper beats rock!');
        computerScore++;
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
        console.log('You Win! Paper beats rock!');
        userScore++;
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
        console.log('You Lose! Scissors beats paper');
        computerScore++;
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        console.log('You Win! Scissors beats paper');
        userScore++;
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
        console.log('You lose! Rock beats Scissors');
        computerScore++;
    } else {
        console.log('You tied!');
        ties++;
    }
}

//playRound(playerSelection, computerSelection);
// let play = true;
// Game function
// write variables to keep score
// function game() {
//     // loop to 5 and call play around on each iteration
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Enter rock, paper, or scissors');
//         const computerSelection = computerPlay();
//         playRound(playerSelection, computerSelection);
//     }
//     play = false;
//     if (userScore > computerScore) {
//         console.log('You won beat the computer');
//     } else {
//         console.log('You lost to the computer');
//     }

// }

// game loop created
// while (play) {
//     game();
// }


