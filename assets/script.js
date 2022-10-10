var countdown = 13;

//https://theprogrammingexpert.com/javascript-countdown-timer/
const timero = function() {
var timer = setInterval(function() {
    document.getElementById('time').innerHTML = "<b>" + countdown + "</b>";
    countdown--
    if(countdown == -1){
        clearInterval(timer)
        // document.getElementById('time').innerHTML = "";
    }

    
}, 1000);
}


const initButton = (hide) => {
    const element = document.getElementById('start-btn');
    element.addEventListener("click",  function() {
        timero();
        document.getElementById("question").classList.remove("hide");
        document.getElementById("question-box").classList.remove("hide");
        document.getElementById("start-btn").classList.add("hide");
    });
}


const init = () => {
 initButton();
}


window.onload = init;

