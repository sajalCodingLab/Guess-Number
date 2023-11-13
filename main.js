const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const currentScore0El = document.querySelector("#current--0");
const currentScore1El = document.querySelector("#current--1");


const imageDice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold");

let score, currentPlayer, currentScore, playing, playerScore;

const init = function(){
    currentScore = 0;
    currentPlayer = 0;
    playerScore = 0;

    playing = true;
    score = [0,0]
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent=0;
    currentScore1El.textContent=0;
    imageDice.classList.add("hidden")
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
   
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')

   

    
}

init();


const switchPlayer = function(){

    document.getElementById(`current--${currentPlayer}`).textContent=0;
    currentScore = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
   

    
}


btnRoll.addEventListener('click', function(){

    if(playing){
        let dice = Math.trunc(Math.random()*6+1);
        console.log(dice)
        imageDice.classList.remove("hidden");
        imageDice.src=(`/Dice/dice-${dice}.png`);
        
        
        if(dice !=1 ){
            currentScore +=dice;
            document.getElementById(`current--${currentPlayer}`).textContent=currentScore;
    
    }

    else{
        // Switch to next player
        switchPlayer()
    }

    }
 

   

});


btnHold.addEventListener('click', function(){
    score[currentPlayer] += currentScore
    document.getElementById(`score--${currentPlayer}`).textContent =  score[currentPlayer]
    if(score[currentPlayer] >= 100){
         
        //Finish the Game
       currentScore = 0;
       playing = false;
       imageDice.classList.add("hidden");
       
       document.getElementById(`winningColor--${currentPlayer}`).classList.remove("player--active")
       document.getElementById(`winningColor--${currentPlayer}`).classList.add("player--winner")


    }
    else{
        //Switch the next Player
        switchPlayer();
    }
});
  

btnNew.addEventListener('click', init);