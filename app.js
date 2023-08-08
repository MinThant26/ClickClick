const highScores = document.getElementById("highScores");
const time = document.getElementById("time");
const scores = document.getElementById("scores");
const btn = document.getElementById("btn");

let totalHighScores = 0;
let totalTime = 5;
let totalScores = 0;
let start = false;
let timeSet;



btn.addEventListener('click', function(){
    if(start === false){
        reset();
        start = true;
        timeSet = setInterval(timeLeft, 1000);
        btn.textContent = "Click Me";
    }
    if(totalTime !== 0){
        totalScores++;
        scores.textContent = totalScores;
    }
})

function setup(){
    let data = localStorage.getItem("highScores");

    if(data === null){
        highScores.textContent = "🔥 " + 0;
    }
    else{
        highScores.textContent = "🔥 " + data;
    }
    
    time.textContent = "⏳ " + totalTime + "s";
    scores.textContent = totalScores;
} setup();

function reset(){
    totalTime = 5;
    totalScores = 0;
    setup();
}

function timeLeft(){
    if(totalTime !== 0){
        totalTime--;
    }
    else{
        start = false;
        clearInterval(timeSet);
        btn.textContent = "Try Again";

        if(totalScores > totalHighScores){
            totalHighScores = totalScores;
            localStorage.setItem("highScores", totalHighScores);
        } // Checking scores

        window.alert("You got " + totalScores);
    }

    setup();
}