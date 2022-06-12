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

const playerSelection = 'rock';
const computerSelection = computerPlay();

// Play round function
function playRound(playerSelection, computerSelection) {
    // convert playerSelection to lower case for comparison
    const playerChoice = playerSelection.toLowerCase();

    // write out the conditionals
    if (playerChoice === 'rock' && computerSelection === 'scissors') {
        console.log('You Win! Rock beats Scissors');
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper beats rock!');
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
        console.log('You Win! Paper beats rock!');
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
        console.log('You Lose! Scissors beats paper');
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        console.log('You Win! Scissors beats paper');
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
        console.log('You lose! Rock beats Scissors');
    } else {
        console.log('You tied!')
    }
}

playRound(playerSelection, computerSelection);