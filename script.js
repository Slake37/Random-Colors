const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let button = document.querySelector('button');
let hexContainer = document.querySelector('.hex-code-container');
let colorContainer = document.querySelector('.color-container');


button.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0; i<6; i++){
        hexColor+=hex[getRandomNumber()]
    }

    hexContainer.innerHTML = hexColor;
    colorContainer.style.background = hexColor;
})



function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}