window.onload = function () {

    var wordBank = ["milkshake", "xerox", "gnocchi", "awkward", "bagpipes", "banjo","bungler","croquet","crypt","dwarves","fervid","fishhook","fjord","gazebo","gypsy","haiku","haphazard","hyphen","ivory","jazzy","jiffy","jinx","jukebox","kayak","kiosk","klutz","memento","mystify","numbskull","ostracize","oxygen","pajama","phlegm","pixel","polka","quad", "quip","rhythmic", "rogue", "sphinx", "squawk","swivel", "toady","twelfth", "unzip","waxy","wildebeest","yacht", "zealous","zigzag", "zippy","zombie"];
    
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wordOutPut = [];
    var usedLetters = [];
    var lives = 6;
    var random = 0
    var wins = 0




    //Assigning a funcion to each button

    document.getElementById("start").onclick = function () { game() };
    document.getElementById("reset").onclick = function () { reset() };
    document.getElementById("play-again").onclick = function () { playAgin() };
    document.querySelector("#wins").innerHTML = "You have figure out the word " + wins + " times!";

    // Function to use for the different Buttons

    function erase(){
        usedLetters = [];
        lives = 6;
        wordOutPut = [];
        document.querySelector(".word").innerHTML = " ";
        document.querySelector(".used-letters").innerHTML = usedLetters;
        
        document.getElementById("cabeca").classList.add("hidden");
        document.getElementById("torso").classList.add("hidden");                
        document.getElementById("umbraco").classList.add("hidden");
        document.getElementById("doisbracos").classList.add("hidden");        
        document.getElementById("umaperna").classList.add("hidden");
        document.getElementById("corpo").classList.add("hidden");
        document.getElementById("estrutura").classList.remove("hidden");
    }


    function reset() {
        wins = 0;
        erase();
        document.querySelector("#wins").innerHTML = "You have figure out the word " + wins + " times!";

    }


    function playAgin() {
        erase();
        game();
    }

    //game logic

    function game() {

        //make sure the game starts from 0

        erase();

        //select random word from word bank

        var random = Math.floor(Math.random() * wordBank.length);
        var word = wordBank[random]
        
        //Show how many letter are there in the world and print the _ _ 
        for (var i = 0; i < word.length; i++) {
            wordOutPut.push("_ ");
        }

        document.querySelector(".word").innerHTML  = "<p>" + wordOutPut.join("") + "</p>";

        // User selects the letter
        document.onkeyup = function (event) {
        
        //make sure the user hasn't been hanged yet
            if (lives > 0) {
                
                // assign letter chose & make sure it is lower case

                var userGuessH = event.key;
                var userGuess = userGuessH.toLowerCase();

                //make sure the user chose a letter from the alphabet and hasn't chosen it before

                if ((alphabet.indexOf(userGuess) > -1) && (usedLetters.indexOf(userGuess) === -1)){
                    
                    //add chosen letter to letter bank

                    usedLetters.push(userGuess);
                
                    

                    var position = word.indexOf(userGuess);
                   
                    //check if letter is in word

                    if (position > -1) {
                    
                        //Run over all the letters in the word in case the letter appears more than once
                        for (var g = 0; g < word.length; g++) {
                            var positionNew = word.indexOf(userGuess, g);
                            if (positionNew > -1) {
                                wordOutPut.splice(positionNew, 1, userGuess);
                                g = positionNew
                                
                                // check if word is complete, if yes, alert the user
                                if (wordOutPut.join("") === word) {
                                        wins++;
                                        document.getElementById("victory").play();
                                        document.body.style.backgroundImage = "../images/mario.gif"
                                        alert("You figured the word out!")
                                    }
                            }
                            //make sure next check is done starting with the index of last time that letter was shown
                            else {
                                g = word.length;
                            }
                        }
                    }
                    else {
                        lives--;
                        
                        //show the image of the hangman

                        document.getElementById("estrutura").classList.add("hidden");
                            if (lives === 5){
                                document.getElementById("estrutura").classList.add("hidden");
                                document.getElementById("cabeca").classList.remove("hidden");
                            }
                            else if (lives === 4){
                                document.getElementById("cabeca").classList.add("hidden");
                                document.getElementById("torso").classList.remove("hidden");
                            }
                            else if (lives === 3){
                                document.getElementById("torso").classList.add("hidden");
                                document.getElementById("umbraco").classList.remove("hidden");
                            }
                            else if (lives === 2){
                                document.getElementById("umbraco").classList.add("hidden");
                                document.getElementById("doisbracos").classList.remove("hidden");
                            }
                            else if (lives === 1){
                                document.getElementById("doisbracos").classList.add("hidden");
                                document.getElementById("umaperna").classList.remove("hidden");
                            }
                            //Let them know the game was lost and print the whole hang man
                            else if (lives === 0){
                                document.getElementById("umaperna").classList.add("hidden");
                                document.getElementById("corpo").classList.remove("hidden");
                                document.getElementById("death").play();
                                alert("You've been hanged! The word was " + word );
                            }
                    }
                }
                else{
                    alert("Please choose another letter!");
                }             

            }
        
            document.querySelector(".word").innerHTML = "<p>" + wordOutPut.join("") + "</p>";
            document.querySelector(".used-letters").innerHTML = usedLetters.join(" ")
            document.querySelector("#wins").innerHTML = "You have figure out the word " + wins + " times!";
        }
        
    }

}




