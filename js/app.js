/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
    var scores , roundscore , activeplayer,gamePlaying;
    init();
    document.querySelector('.btn-roll').addEventListener('click',function(){
        if (gamePlaying) {
            var dice = Math.floor(Math.random()*6)+1;
            diceDOM = document.querySelector('.dice');
            diceDOM.style.display="block";
            diceDOM.src ="img/dice-"+ dice + ".png";
            if(dice !== 1){
                roundscore +=dice;
                document.getElementById("current-"+activeplayer).textContent=roundscore;       
            }else{
                NextPlayer();
            }
        }
    });
    document.querySelector('.btn-hold').addEventListener('click',function(){
        if (gamePlaying) {
            score[activeplayer]+=roundscore;
            document.getElementById('score-'+activeplayer).textContent=score[activeplayer];
            if (score[activeplayer]>=100) {
                gamePlaying=false;
                document.querySelector('#name-'+activeplayer).textContent="Winner !";
                document.querySelector('.dice').style.display="none";
                document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
                document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
            }else{
                NextPlayer();
            }
        }
    });
    function NextPlayer(){
        activeplayer==0 ? activeplayer=1 : activeplayer=0;
        roundscore=0;
        document.querySelector('#current-0').textContent="0";
        document.querySelector('#current-1').textContent="0";
        //we can use add or remove to add or remove class 
        //document.querySelector('player-0-panel').classList.add('nameclass');
        //document.querySelector('player-0-panel').classList.remove('nameclass');
        //auther way toggle (add class if not exsist if exsist remove it )
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
    };
    document.querySelector('.btn-new').addEventListener('click',init)
    function init(){
        gamePlaying=true;
        score= [0,0];
        roundscore = 0;
        activeplayer = 0;
        //document.querySelector('#score-0').textContent = dice;
        document.querySelector('.dice').style.display="none";
        //if you want to use function in outher place 
        //function Enent(){
        //    alert('seccess');
        //}
        //document.querySelector('.btn-roll').addEventListener('click',Enent);
        //else use the function anonymous
        //getElementById is like querySelector but is fast ant is just for Ids 
        for (var i =0 ; i <2; i++){
             document.getElementById('score-'+i).textContent='0';
             document.getElementById('current-'+i).textContent='0';
        }
         document.getElementById('name-0').textContent="player 1";
         document.getElementById('name-1').textContent="player 2";
         document.querySelector('.player-0-panel').classList.remove('winner');
         document.querySelector('.player-1-panel').classList.remove('winner');
         document.querySelector('.player-0-panel').classList.remove('active');
         document.querySelector('.player-1-panel').classList.remove('active');
         document.querySelector('.player-0-panel').classList.add('active');

    };