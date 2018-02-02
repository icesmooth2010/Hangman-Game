// start hangman game! 

prompt('Press any key to get started!');


// list of different species of shark for hangman game.

var islandWordsArr = ['antigua', 'beach', 'pineapple', 'shark', 
'palmtree','ocean', 'sunblock', 'rum','waves', 'lifeguard', 'sun', 'breeze', 'exotic', 'bahamas', 'lemon','spices', 'surfing', 'scuba', 'fish', 'beach ball']

// using above array we choose a random word.
var islandWords = islandWordsArr[Math.floor(Math.random() * islandWordsArr.length)];


// global variables 

var s;
var count = 0;
var answerArray = [];
// Start the game with a score of 0.
var score = 0;

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
         // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
// filling the answer array with underscores as required
// number of underscores correlates to the randomly selected word in the array

function startUp() {
  console.log(islandWords)
  for (var i = 0; i < islandWords.length; i++) {
    answerArray.push(" _ ");
  }

  // putting in a string
  s = answerArray.join(" ");
  document.querySelector("#counter").innerHTML = answerArray.join(" ");
}

function letter() {
  var letter = document.getElementById("letter").value;

  if (letter.length > 0) {
    for (var i = 0; i < islandWords.length; i ++) {
      if (islandWords[i] === letter) {
        answerArray[i] = letter;
      }
    }
    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = String.fromCharCode(event.which).toLowerCase();
    count++;
    document.getElementById("counter").innerHTML = "No of clicks: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }
  if(count>5) {
    document.getElementById("stat").innerHTML = "You should have guessed it by now!";
  }
}
document.onkeyup = function(event) {
  console.log (event.key.toLocaleLowerCase())

console.log (islandWords.indexOf(event.key, 0))

}
startUp()
 // Function that updates the score...
 function updateScore() {
  document.querySelector("#score").innerHTML = "Score: " + score;
}
