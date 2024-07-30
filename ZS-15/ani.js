var button = document.getElementById("setTarget");
var reset = document.getElementById("reset");
var start = document.getElementById("start");



// Select Canvas
const canvas = document.querySelector("#pong");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "image-500x200.jpg";

const COM_LEVEL = 1;
const PLAYER_HEIGHT = 100;
const PLAYER_WIDTH = 20;
const BALL_START_SPEED = 0.5;
const BALL_DELTA_SPEED = 0.1;

let netHitCount = 0;

// Game Objects ======================
const player = {
    x: 0,
    y: canvas.height / 2 - PLAYER_HEIGHT / 2,
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
    color: "#3AB0FF",
    score: 0,
};
const computer = {
    x: canvas.width - PLAYER_WIDTH,
    y: canvas.height / 2 - PLAYER_HEIGHT / 2,
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
    color: "#FF1E00",
    score: 0,
};

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: BALL_START_SPEED,
    velocityX: 5,
    velocityY: 5,
    color: "#3AB0FF",
};

const net = {
    x: canvas.width / 2 - 1,
    y: 0,
    width: 2,
    height: 10,
    color: "#59CE8F",
};

let isGameStarted = false; // Flag to indicate whether the game has started
img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
}

// drawCircle(100, 100, 50, "WHITE");

function drawText(text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = "45px fantasy";
    ctx.fillText(text, x, y);
    }

// drawText("Korsat X Parmaga", 200, 300, "WHITE");

function drawNet() {
    for (let i = 0; i <= canvas.height; i += 10) {
    drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

// Redraw Canvas =================
function render() {
    if (isGameStarted) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawRect(0, 0, canvas.width, canvas.height, "#000");
        drawNet();
        drawText(player.score, canvas.width / 5, canvas.height / 5, "#00d5ff");
        drawText(computer.score, (3 * canvas.width) / 4, canvas.height / 5, "#00d5ff");
        drawRect(player.x, player.y, player.width, player.height, player.color);
        drawRect(computer.x, computer.y, computer.width, computer.height, computer.color);
        drawCircle(ball.x, ball.y, ball.radius, ball.color);
    }
}

function collision(b, p) {

    b.top = b.y - b.radius; // it means b.y
    b.bottom = b.y + b.radius; 
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    // Check collision with net
    if (netHitCount < parseInt(document.getElementById("target").innerText)){
        if (b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom) {
            netHitCount+=1; // Increment net hit count
            updateCurrentScore(); // Update current score
        }   
    }
    return (b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom);
}

    // Reset Ball
    function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speed = BALL_START_SPEED;
    ball.velocityX = -ball.velocityX;
}


// Player Movement


function lerp(a, b, t) {
    return a + (b - a) * t; // t=0 (a) , t=1 (b)
}
    
function movePlayer() {
    let targetPos = ball.y - player.height / 2;
    let currentPos = player.y;
    player.y = lerp(currentPos, targetPos, COM_LEVEL);
}
function moveComputer() {
    let targetPos = ball.y - player.height / 2;
    let currentPos = player.y;
    player.y = lerp(currentPos, targetPos, COM_LEVEL);
}
    // Update : pos, mov, score, .... ==========
let paused = false;
function update() {
    if (paused) return;
    movePlayer();
    moveComputer()

    // ball movement
    ball.x += ball.velocityX * ball.speed;
    ball.y += ball.velocityY * ball.speed;

    // ball collision with Top & Bottom borders
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.velocityY = -ball.velocityY;
    }
    let selectedPlayer = ball.x < canvas.width / 2 ? player : computer;
    if (collision(ball, selectedPlayer)) {
        ball.velocityX = -ball.velocityX;
        ball.speed += BALL_DELTA_SPEED;
    }

    // Computer Movement (simple AI)
    let targetPos = ball.y - computer.height / 2;
    let currentPos = computer.y;
    computer.y = lerp(currentPos, targetPos, COM_LEVEL);
    if (ball.x - ball.radius < 0) {
        computer.score++;
        resetBall();
    } else if (ball.x + ball.radius > canvas.width) {
        player.score++;
        resetBall();
    }
}
// Game Init =====================
function game() {
    update();
    render();
    
}




button.addEventListener("click", setTarget);
reset.addEventListener("click", resetTarget);
start.addEventListener("click", startGame);

// Update the current score function
function updateCurrentScore() {
    document.getElementById("current").innerText = netHitCount;
    if(netHitCount == parseInt(document.getElementById("target").innerText)){
        resetGame();
    }
}


function setTarget(e){
    var target = document.getElementById("target"); 
    var random =2;
    target.innerHTML = random;
}

function startGame(e){
    // update the counter of message to start the game
    const targetScore = parseInt(document.getElementById("target").innerText);
    isGameStarted = true;

    if (targetScore > 0) {
        var counter = document.getElementById("counter");
        var message = document.getElementById("message");
        counter.innerHTML = 3;
        var interval = setInterval(function(){
            var current = counter.innerHTML;
            if(current > 0){
                counter.innerHTML = current - 1;
            }else{
                
                clearInterval(interval);
                message.innerHTML = "GO!";
                const FPS = 60;
                setInterval(game, 1000 / FPS);
            
            }
        },1000);
    } else {
        // Display a message asking the user to set the target score
        alert("Please set the target score before starting the game.");
    }
}

function resetTarget(e){
    var target = document.getElementById("target");
    target.innerHTML = 0;
    current.innerHTML = 0;
    netHitCount = 0;
    resetBall();
}

function pauseGame(e){
    var pause = document.getElementById("pause");
    if(pause.innerHTML == "Pause"){
        pause.innerHTML = "Resume";
        paused = true;
    }else{
        pause.innerHTML = "Pause";
        paused = false;
    }
}
const pauseBtn = document.querySelector("#pause");
pauseBtn.addEventListener("click", () => {
    if (pauseBtn.innerHTML === "Resume") {
        pauseBtn.innerHTML = "Pause";
        paused = false;
    } else {
        pauseBtn.innerHTML = "Resume";
        paused = true;
    }
});


function resetGame() {
    
}