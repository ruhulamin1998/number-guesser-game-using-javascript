let guessForm = document.getElementById('guessForm');
let guessNumber = document.getElementById('guess');
let guessSubmit = document.getElementById('guessSubmit');
let restart = document.getElementById('restart');
let guessCount = 3;
let val = 0;
//add event listener
guessForm.addEventListener('submit',guessGame);



//functions
function guessGame(e){
    
    if(guessNumber.value>=1 && guessNumber.value<=10){
        gameRunning();
    }
    else{
        alert('Sorry! You must have to enter between 1 to 10');
    }

    guessNumber.value = '';

    e.preventDefault();
}


function gameRunning(){
    let chances = document.getElementById('chances');
    chances.innerText = `You have ${guessCount-1} chances left`

    let randomNumber = Math.floor(Math.random()*10) + 1;

    if(Number(guessNumber.value) == randomNumber){
        alert('Correct answer');
        val++;
    }
    else if(Number(guessNumber.value) > randomNumber){
            alert("Correct answer is smaller!");
    }
    else if(Number(guessNumber.value) < randomNumber){
            alert("Correct answer is geater!");
    }

    if(guessCount === 1){
        if(val !==0 ){
            alert('Congratulation you win at least one time');
        }
        else{
            alert('You loss');
        }
        setGameOver();
    }
    guessCount--;
}

//game over function

function setGameOver(){
    guessNumber.disabled = true;
    guessSubmit.disabled = true;
    restart.addEventListener('click',RestartGame)
}

// restart game function
function RestartGame(){
    guessCount = 3;
    val = 0;
    guessNumber.disabled = false;
    guessSubmit.disabled = false;
    chances.innerText = `You have ${guessCount} chances left`;
}





