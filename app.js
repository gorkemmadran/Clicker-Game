const buttonOne = document.querySelector('.btnOne');
const btnMore = document.querySelector('.btnMore');
const h1 = document.querySelector('.tittle')
const highScore = document.querySelector('.highscore');
const avarageBtn = document.querySelector('.avarage')
let curVal = 0;
let highScorePoint = 3500;

buttonOne.addEventListener('click', (e) =>{
const scorLine = document.querySelector('.scoreline')
curVal =  curVal + 1 ; 
scorLine.innerHTML = `<p class="scoreline">Score :${curVal} </p>`   
checkHighScore()
})


btnMore.addEventListener('click', (e) =>{
const scorLine = document.querySelector('.scoreline')
curVal =  curVal + Math.floor(Math.random() * 10)
scorLine.innerHTML = `<p class="scoreline">Score :${curVal} </p>`
checkHighScore()
})

avarageBtn.addEventListener('click', () =>{
    alert(`You need more click like => ${highScorePoint - curVal} `)
    
   
})

function checkHighScore(){
    if(curVal > highScorePoint){
        highScore.innerHTML = `<p class="highscore">High Score:${curVal}</p>`
    } 
}
 
checkHighScore()