// start hangman game! 

prompt('Press any key to get started!');


// list of different species of shark for hangman game.

var islandWordsArr = ['antigua', 'beach', 'pineapple', 'shark', 
'palmtree','ocean', 'sunblock', 'rum','waves', 'lifeguard', 'sun', 'breeze', 'exotic', 'bahamas', 'Lemon','spices', 'surfing', 'scuba', 'fish', 'beach ball']

// using above array we choose a random word.
var islandWords = islandWordsArr[Math.floor(Math.random() * islandWordsArr.length)];


// global variables 

var s;
var count = 0;
var answerArray = [];



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