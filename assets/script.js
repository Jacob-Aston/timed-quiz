const initButton = () => {
    const element = document.getElementById('start-btn');

    console.log('hi');

    element.addEventListener("click",  function() {
        console.log('howdy');
    });
}

const init = () => {
 initButton();

}

window.onload = init;

