const buttonOne = document.querySelector('.btnOne');
const btnMore = document.querySelector('.btnMore');
const h1 = document.querySelector('.tittle')
let curVal = 0;

buttonOne.addEventListener('click', (e) =>{
const scorLine = document.querySelector('.scoreline')
curVal =  curVal + 1 ; 
scorLine.innerHTML = `<p class="scoreline">Score :${curVal} </p>`
})
btnMore.addEventListener('click', (e) =>{
const scorLine = document.querySelector('.scoreline')
curVal =  curVal + Math.floor(Math.random() * 10)
scorLine.innerHTML = `<p class="scoreline">Score :${curVal} </p>`
})