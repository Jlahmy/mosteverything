let winning = false;
let loosing = false;
let bodyControl = document.getElementById("mainBody");
let divControl = document.getElementById("mainDiv");

let startButton = document.getElementById("startButton");
    startButton.style.left = '50%';
    startButton.style.top = '50%';

let playButton = document.getElementById("playButton");
    playButton.style.left = Math.random() * 1340 + "px";
    playButton.style.top = Math.random() * 700 + "px";  
    playButton.style.visibility = "hidden"; 

let resetButton = document.getElementById("resetButton");
    resetButton.style.left = '50%';
    resetButton.style.top = '50%';

//-----------------------------------------------------------

function won() {
    if(loosing) return;
     winning = true;
    resetButton.style.visibility = 'visible'
     playButton.style.visibility = 'hidden'
    divControl.innerHTML = "You won"
};

function lost() {
    if(winning) return;
     loosing = true;
     resetButton.style.visibility = 'visible'
     playButton.style.visibility = 'hidden'
    divControl.innerHTML = "you lost"
};
// THE MAGIC BEGINS HERE
function prepGame() {
    playButton.style.visibility = 'hidden';
    resetButton.style.visibility = "hidden";
    resetButton.addEventListener('click', () => window.location.reload())
    startButton.addEventListener('click', gameTime);
}
function gameTime() {
    setTimeout(startGame, Math.random() * 2000 + 1000)
}



function startGame(){
    startButton.style.visibility = "hidden";
    playButton.style.visibility = "visible";

    playButton.addEventListener("click", won);
    bodyControl.addEventListener('click', lost);

    setTimeout(lost, 1500);
    if(winning === true || loosing === true) {
    }

}

prepGame();