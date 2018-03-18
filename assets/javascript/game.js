//Choices of words for the system to choose from//
//System should chose a world//
//Create _ _ _ with number of availble letters in the world
//Print _ _ _
// Get imput from customer for letters
// verify if letter is in the world chosen
// If yes, print letter. If not, loose a life
//reset game with win/loss count

// function reset();{
//     usedLetters = []; 
//     lives = 6;
//     var wordOutPut = [];
// }

window.onload = function () {

    var wordBank = ["milkshake", "xerox", "gnocchi", "awkward", "bagpipes", "banjo","bungler","croquet","crypt","dwarves","fervid","fishhook","fjord","gazebo","gypsy","haiku","haphazard","hyphen","ivory","jazzy","jiffy","jinx","jukebox","kayak","kiosk","klutz","memento","mystify","numbskull","ostracize","oxygen","pajama","phlegm","pixel","polka","quad", "quip","rhythmic", "rogue", "sphinx", "squawk","swivel", "toady","twelfth", "unzip","waxy","wildebeest","yacht", "zealous","zigzag", "zippy","zombie"];
    ;

    var wordOutPut = [];
    var usedLetters = [];
    var lives = 6;
    var random = 0
    var wins = 0


    document.getElementById("start").onclick = function () { game() };
    document.getElementById("reset").onclick = function () { reset() };
    document.getElementById("play-again").onclick = function () { playAgin() };
    document.querySelector("#wins").innerHTML = "You have figure out the word " + wins + " times!";


    function reset() {
        usedLetters = [];
        lives = 6;
        wordOutPut = [];
        wins = 0;
        document.querySelector(".word").innerHTML = " ";
        document.querySelector(".guesses-left").innerHTML = lives
        document.querySelector(".used-letters").innerHTML = usedLetters;
        document.querySelector("#wins").innerHTML = "You have figure out the word " + wins + " times!";
    }

    function playAgin() {
        usedLetters = [];
        lives = 6;
        wordOutPut = [];
        document.querySelector(".word").innerHTML = " ";
        document.querySelector(".guesses-left").innerHTML = lives
        document.querySelector(".used-letters").innerHTML = usedLetters;
        game();
    }


    function game() {

        wordOutPut = [];
        usedLetters = [];
        lives = 6;
        var random = Math.floor(Math.random() * wordBank.length);
        var word = wordBank[random]
        //Show how many letter are there in the world
        for (var i = 0; i < word.length; i++) {
            wordOutPut.push("_ ");
        }
        //show how many letters

        var html = "<p>" + wordOutPut.join("") + "</p>";

        document.querySelector(".word").innerHTML = html;

        // Select the letter guessed
        document.onkeyup = function (event) {

            if (lives > 1) {
                var userGuess = event.key;
                usedLetters.push(userGuess);

                // if (wordOutPut.join("") === word) {
                //     wins++;
                //     alert("You figured the word out!")
                // }
                    var position = word.indexOf(userGuess);
                    if (position > -1) {
                        for (var g = 0; g < word.length; g++) {
                            var positionNew = word.indexOf(userGuess, g);
                            if (positionNew > -1) {
                                wordOutPut.splice(positionNew, 1, userGuess);
                                g = positionNew
                                if (wordOutPut.join("") === word) {
                                        wins++;
                                        alert("You figured the word out!")
                                    }
                            }
                            else {
                                g = word.length;
                            }
                        }
                    }
                    else {
                        lives--;
                    }

            }
            else{
                alert("You hang! The word was " + word );
            }
            //}
            //

            var guessAletter =
                "<p>" + wordOutPut.join("") + "</p>";

            var letters = usedLetters.join(" ")

            document.querySelector(".word").innerHTML = guessAletter;
            document.querySelector(".guesses-left").innerHTML = lives;
            document.querySelector(".used-letters").innerHTML = letters;
            document.querySelector("#wins").innerHTML = "You have figure out the word " + wins + " times!";
        }
        
    }

}




