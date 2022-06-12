console.log('Hello World');

// Computer Play Function

// create rock paper scissors array
const computerChoices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    // return a random instance of rock of an element in the above array
    console.log(computerChoices[Math.floor(Math.random() * computerChoices.length)]);
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

computerPlay();