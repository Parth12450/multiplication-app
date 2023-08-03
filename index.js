const num1 = Math.ceil(Math.random()*10);

const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
};

questionEl.innerText = "what is " + ( num1 ) + " multiply by " + (num2) + "?";

const correctAns = num1*num2;

formEl.addEventListener("submit", function(){
    const userAns = +inputEl.value
    if(userAns === correctAns){
        score++
        updateLocalStorage()
    }else{
        score--
        updateLocalStorage()
    }
});

scoreEl.innerHTML= "score : " + score ;

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
};