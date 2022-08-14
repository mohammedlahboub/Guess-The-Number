let randomNumber = Math.floor(Math.random()*100)+1;

const lastResult = document.querySelector('.lastResult');

const tooHigh = document.querySelector('.tooHigh');

const tooLow = document.querySelector('.tooLow');

const guesses = document.querySelector('.guesses');

const guessField = document.querySelector('.guessField');

const guessSubmit = document.querySelector('#guessSubmit');

const reseButton = document.querySelector('button')

const pWon =document.querySelector('.won');

const pLost =document.querySelector('.lost');



let playerWon =0;
let playerLost = 0;
let guessCount = 1;

function game(){
  const userGuess = Number(guessField.value);
  if(guessCount === 1){
        guesses.textContent = '';
    
    }
    guesses.textContent += `${userGuess}    `;

    if (userGuess === randomNumber){
        lastResult.innerHTML = 'Congratulations!<br> You got it right!';
        lastResult.style.backgroundColor = "#34eb7d";
            tooLow.style.display = "none"
            tooHigh.style.display = "none"
            playerWon++;
            pWon.textContent ='Wins : ' +`${playerWon}`

        gameOver();
    }
    else if(guessCount === 10 ){
        lastResult.textContent = '!!! GAME OVER !!!';
        lastResult.style.backgroundColor = "#000000";
        lastResult.style.color = "#ffffff";
            tooLow.style.display = "none"
            tooHigh.style.display = "none"
            playerLost++;
            pLost.textContent = 'Losses : '+ `${playerLost}`

        gameOver();
    }
    else{
        lastResult.textContent = 'Wrong';
        lastResult.style.backgroundColor = '#eb3434';
        if (userGuess < randomNumber ){
            tooHigh.style.display = "none"
            tooLow.style.display = "block"
        }
        else if (userGuess > randomNumber ){
            tooLow.style.display = "none"
            tooHigh.style.display = "block"
        }
    }

    guessCount++;
    guessField.value= '';
    guessField.focus();
}

// ##############################################################################

guessSubmit.addEventListener('click',game);
//###############################################################################
function gameOver (){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    reseButton.style.display = 'block';
    reseButton.addEventListener('click',gameReset);
}
//###############################################################################

function gameReset(){
    guessCount = 1;
    tooLow.style.display = "none";
    tooHigh.style.display = "none";
    reseButton.style.display ="none";
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.color = "#000";
    guesses.textContent= ""
    lastResult.textContent ='Enter A Guess';
    lastResult.style.backgroundColor = "#ffd60a";
    
    randomNumber = Math.floor(Math.random()*100)+1;
}