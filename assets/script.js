var countdown = 10;

//https://theprogrammingexpert.com/javascript-countdown-timer/
const timero = function() {
var timer = setInterval(function() {
    document.getElementById('time').innerHTML = "<b>" + countdown + "</b>";
    countdown--
    if(countdown == 0){
        document.getElementById('time').innerHTML = "";
        clearInterval(timer)
    }

    
}, 1000);
}


const initButton = () => {
    const element = document.getElementById('start-btn');
    element.addEventListener("click",  function() {
        document.getElementsByClassName("question").classList.remove("hide");
        document.getElementsByClassName("question-box").classList.remove("hide");
        countdown = 12;
        timero();
    });
}


const init = () => {
 initButton();
}


window.onload = init;

