var userName = prompt('Hello, what is your name?')
let playAgain = true;
let players = {}
let secretNum = Math.floor(Math.random()* 10) + 1

while (playAgain) {
//var userName = prompt('Hello, what is your name?')
let input = prompt(`Guess a number between 1 & 10 ${userName}!`)
let number = Number(input);
var tries = 1
var oldGuesses = []

if (!isNaN(input)) {
oldGuesses.push(input);
}

while (number !== secretNum) {
    if (Number.isNaN(number)) {
        alert('Not a valid number')
        number = Number(prompt('Guess Again ' + userName + '!'));
        oldGuesses.push(number)
} else if (number < secretNum) {
        number = Number(prompt('Guess Higher ' + userName + '!'));
        tries++;
        oldGuesses.push(number);
} else if (number > secretNum) {
        number = Number(prompt('Guess Lower ' + userName + '!'));
        tries++;
        oldGuesses.push(number);
    } 
}

//feature 7

if (players[userName] !== undefined) {
    let numGuesses = oldGuesses.length
    let previousGuesses = players[userName].length
        if(number === secretNum && numGuesses < previousGuesses) {
            alert (`Congrats you got it! You beat your old score by ${ previousGuesses - numGuesses} guesses.`)
        }else if(number === secretNum && numGuesses > previousGuesses) {
            alert(`You guessed it! It took you ${numGuesses - previousGuesses} more tries than last time!`)
        }else {
            alert (`Congrats you guessed it! You got the same score!`)
        }
} else {
    alert (`Congrats ${userName} you guessed it! Your number of tries was ${tries}. Your previous guesses were ${oldGuesses}.`)
}
players[userName];
players[userName] = oldGuesses;


playAgain = prompt('Do you want to play again?')
if(playAgain.toLowerCase() == 'yes') {
    playAgain = true;
} else {
    playAgain = false;
}
}
















