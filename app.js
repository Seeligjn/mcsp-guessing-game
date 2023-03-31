var nameInput = prompt('Hello, what is your name?')
let input = prompt("Guess a number between 1 & 30 " + nameInput + '!')
let number = Number(input);
let secretNum = 19
var counts = 1
var oldGuesses = []

if (!isNaN(input)) {
oldGuesses.push(input);
}




//Feature 1 and 2 - Guessing section - Higher or lower
while (number !== secretNum) {
    if (Number.isNaN(number)) {
        alert('Not a valid number')
        number = Number(prompt('Guess Again ' + nameInput + '!'));
        oldGuesses.push(number)
} else if (number < secretNum) {
        number = Number(prompt('Guess Higher ' + nameInput + '!'));
        counts++;
        oldGuesses.push(number);
} else if (number > secretNum) {
        number = Number(prompt('Guess Lower ' + nameInput + '!'));
        counts++;
        oldGuesses.push(number);
    } 
}

if(number === secretNum) {
    alert(`You got it ${nameInput}! Your number of tries was ${counts}! Your guesses were ${oldGuesses}!`)
    } 












