/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, activePlayer , roundScore ,currentDOM ,gamePlaying;
init();
//document.querySelector('#score-' + activePlayer).textContent = dice ;
document.querySelector(".dice").style.display = 'none';
document.querySelector(".btn-roll").addEventListener("click",function(){
        if(gamePlaying){
            //random number
            var dice = Math.floor(Math.random() * 6) + 1;
            //random display
            var diceDOM = document.querySelector(".dice");
            diceDOM.src = 'dice-' + dice + '.png';
            diceDOM.style.display = 'block';
            //add number if not = 1
            if(dice !== 1){
                //add score
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }else{
                //remove score
                nextPlayer();
            }
        }
    
})
document.querySelector('.btn-hold').addEventListener("click",function(){
    if(gamePlaying){
        //add currant to global score
        score[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
        //chack if player win the game ;
        if(score[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent = "WINNER!";
            document.querySelector('.dice').style.display ='none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
        //change player
        nextPlayer();
        }
    }
})
document.querySelector('.btn-new').addEventListener('click',function(){
        //update to IU
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
        document.querySelector('#name-' + activePlayer).textContent = "PLAYER" + activePlayer;
        document.querySelector('.player-0-panel').classList.add('active');
        init();
})
function nextPlayer(){
    roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
        //hiden dice
        document.querySelector('.dice').style.display ='none';
}
function init(){
    score = [0 ,0];
    gamePlaying = true;
    activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
}