// 'use strict'

//selecting elements
let score0=document.querySelector('#score--0');
let score1=document.querySelector('#score--1');

score0.textContent=0;
score1.textContent=0;

//hiding dice

const diceimg=document.querySelector('.dice');

diceimg.classList.add('hidden');
let activePlayer=0;

let scoreArray=[0,0];

// rolling dice
let flg=1;
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
let mainScore=[0,0];

const btnroll=document.querySelector('.btn--roll');




btnroll.addEventListener('click',function(){

     if(!(mainScore[0] >=45 || mainScore[1]>=45) && flg)
{
    const randomNo=Math.trunc(Math.random()*6)+1;

    diceimg.classList.remove('hidden');
    diceimg.src=`dice-${randomNo}.png`;

    if(randomNo!=1)
    {
        scoreArray[activePlayer]+=randomNo;
        let currentScore=document.querySelector(`#current--${activePlayer}`);
        currentScore.textContent=scoreArray[activePlayer];
    }
    else{
        scoreArray[activePlayer]=0;
        let currentScore=document.querySelector(`#current--${activePlayer}`);
        currentScore.textContent=scoreArray[activePlayer];
        activePlayer=activePlayer===0 ? 1 : 0;
        player0.classList.toggle('player--active'); //toggle if class is there then it will remove it and if not there then add it
        player1.classList.toggle('player--active');
    }

}


});

const btnhold=document.querySelector('.btn--hold');

btnhold.addEventListener('click',function(){
    mainScore[activePlayer]+=scoreArray[activePlayer];
    document.querySelector(`#score--${activePlayer}`).textContent=mainScore[activePlayer];
    scoreArray[activePlayer]=0;
        let currentScore=document.querySelector(`#current--${activePlayer}`);
        currentScore.textContent=scoreArray[activePlayer];

        if(mainScore[activePlayer]<45)
        {
        activePlayer=activePlayer===0 ? 1 : 0;
        player0.classList.toggle('player--active'); //toggle if class is there then it will remove it and if not there then add it
        player1.classList.toggle('player--active');
        }
        else{
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        }
});

const newbtn=document.querySelector('.btn--new');

newbtn.addEventListener('click',function(){
    scoreArray=[0,0];
    mainScore=[0,0];
    score0.textContent=0;
    score1.textContent=0;
   
        document.querySelector(`#score--${activePlayer}`).textContent=0;
        
        player0.classList.add('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
        document.querySelector(`.player--1`).classList.remove('player--active');
        activePlayer=0;
        
    });





    // -----------------------------------------------------

    const ins=document.querySelector('.custom');
    const lines=document.querySelector('.customRules');
    const main1=document.getElementById('main-div');

    ins.addEventListener('click',function(){
    lines.classList.remove('hidden');
main1.classList.add('overlay');
main1.style.zIndex='1';
lines.style.zIndex="100";
diceimg.classList.add('hidden');
flg=0;
    });

    main1.addEventListener('click',function(){
        main1.classList.remove('overlay');
        lines.classList.add('hidden');
        main1.style.zIndex='1';
        flg=1;
    });


    document.addEventListener('keypress',function(x){

        if(x.key==="Escape" && !ins.classList.contains('hidden'))
        {
            main1.classList.remove('overlay');
            lines.classList.add('hidden');
        }

        flg=1;
    });