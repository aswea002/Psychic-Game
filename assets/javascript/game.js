var computerChoice = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

var computerGuess =
  computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log (computerGuess);

document.onkeyup = function(event) {
  var userGuess = event.key;
  console.log (userGuess);



  if (userGuess != computerGuess) {
    losses++;
  } else {
    wins++;
  } 
  console.log (losses)

  directionsText.textContent = "";

  computerChoiceText.textContent = "The computer chose: " + computerGuess;
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  guessesLeft.textContent = "Guesses left:" + guessesLeft;
  userChoiceText.textContent = "Your guesses so far:" + userGuess;
};
