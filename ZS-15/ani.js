var button = document.getElementById("setTarget");
var reset = document.getElementById("reset");
var start = document.getElementById("start");
var counter = document.getElementById("counter");
var paddle1 = document.querySelector(".plate1");
var paddle2 = document.querySelector(".plate2");
var board = document.querySelector(".boxx");

let state= "stop";

let p1 = paddle1.getBoundingClientRect();
let p2 = paddle2.getBoundingClientRect();
let bc = box.getBoundingClientRect();




button.addEventListener("click", setTarget);
reset.addEventListener("click", resetTarget);
start.addEventListener("click", startGame);



function setTarget(e){
    var target = document.getElementById("target");
    // generate a random number between 10 to 30
    var random = Math.floor(Math.random() * 21) + 10;
    target.innerHTML = random;
}

function resetTarget(e){
    var target = document.getElementById("target");
    target.innerHTML = 0;
}

function startGame(e){
    let counterValue = 0;
    let counter = document.getElementById("counter");
    let message = document.getElementById("message");

    const counterInterval = setInterval(() => {
        counterValue++;
        counter.textContent = counterValue;
        if (counterValue === 3) {
            message.textContent = "Play the game!";
            state = "start";
            clearInterval(counterInterval);
        }
    }, 1000);
    document.addEventListener("keydown", function(event) {
        if (state === "start") { // Check if the state is "start"
            if (event.key === "w") {
                paddle1.style.top =
                Math.max(
                  bc.top,
                  p1.top - window.innerHeight * 0.002
                ) + 'px';
              p1 = paddle1.getBoundingClientRect();

            } else if (event.key === "s") {
                // Handle "s" key press

            } else if (event.key === "ArrowUp") {
                // Handle "ArrowUp" key press

            } else if (event.key === "ArrowDown") {
                // Handle "ArrowDown" key press
            }
        }
    });
}



