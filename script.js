const number = document.querySelector('#num');
const button = document.querySelector('#btn');
const body = document.querySelector('body');

 let array = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black"];

function getNumber() {
    // this is a random number generator
    const randomNumber = Math.floor(Math.random() * 100);
    number.innerHTML = randomNumber;
    // this is a random color generator
    const randomNumberColor = Math.floor(Math.random() * array.length);
    number.style.color = array[randomNumberColor];
    // this is a random background color generator
    const randomColor = Math.floor(Math.random() * array.length);
    body.style.background = array[randomColor];
    // this is a random button backgroung color generator
    button.style.background = array[randomColor];

}





