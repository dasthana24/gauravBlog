


var wordBank = ["red", "blue", "pink"];
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 10;
var underScores = [];
var userGueses = [];
var randWord;
// var winCounter =0;


//Function 
//*******************************


function startGame() {
    //picks random word
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randWord);
    // guessesLeft=9;
    for (var i = 0; i < randWord.length; i++) {
        underScores.push('_');
    }
    document.getElementById('word-blanks').textContent = underScores.join(" ");
    console.log(underScores);
    //reset

    wrongLetter = [];
    guessesLeft = 10;

    document.getElementById("guesses-left").textContent = guessesLeft;
    //html

}


function winlose() {
    if (win-counter=== randWord.length) {
        alert('winner');
        startGame();

    }
    else if (guessesLeft === 0) {
        alert('loser');
        startGame();
    }
}

document.onkeyup = function (event) {
    userGueses = event.key;
    //   console.log(userGueses);
    {
        if (randWord.indexOf(userGueses) > -1) {
            for (var i = 0; i < randWord.length; i++) {
                if (randWord[i] === userGueses) {
                    underScores[i] = userGueses;
                    document.getElementById('word-blanks').innerHTML = underScores.join(" ");
                    winCounter++;
                    winlose();
                }
            }
        }
        else {
            wrongLetter.push(userGueses);
            guessesLeft--;
            document.getElementById("guessesLeft").innerHTML = guessesLeft;
            console.log(wrongLetter);
            winlose();
        }
    }
}

//********Main *************

startGame();
console.log(random)





