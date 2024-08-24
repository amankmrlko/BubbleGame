var timer;
var score = 0;
var game = 0;
var tickSound = new Audio('click.mp3');
var error = new Audio('error.mp3');
var gameOver = new Audio('game.mp3');

function bubble() {
    var clutter = "";
    for (let i = 1; i <= 168; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<button class="bubble">${rn}</button>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;

    let bubdis = document.querySelectorAll(".bubble");
    bubdis.forEach((bub) => {
        bub.addEventListener("click", () => {
            if (game == 1) {
                

            
                if (bub.textContent == document.querySelector("#Hit").textContent) {
                    scoreval(); 
                    bub.disabled = true;
                bub.style.opacity = "0.7";
                }else{
                    error.play();
                    bub.disabled = true;
                bub.style.opacity = "0.6";
                bub.style.backgroundColor= "#c94a4a";
                }
            }
        });
    });
}

function timerint() {
    timer = 15;
    const timeReset = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer;
            tickSound.play();
        } else {
            clearInterval(timeReset);
            if (timer === 0) {
                gameOver.play();
                document.querySelector("#finalmsg").style.display = "block";
                game = 0;
            }
        }
    }, 1000);
}

function hitval() {
    var rnhit = Math.floor(Math.random() * 10);
    document.querySelector("#Hit").textContent = rnhit;
}

function scoreval() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
    document.querySelector("#final-score").textContent = score;
}

document.querySelector("#startBtn").addEventListener("click", () => {
    game = 1;
    score = 0; 
    document.querySelector("#scoreval").textContent = score;
    timerint();
    document.querySelector("#startBtn").disabled = true;
    document.querySelector("#startBtn").style.cursor = "not-allowed";
    document.querySelector("#startBtn").style.opacity = "0.6";
    hitval(); 
    bubble();
});

document.querySelector("#cross").addEventListener("click", () => {
    document.querySelector("#finalmsg").style.display = "none";
    document.querySelector("#startBtn").disabled = false;
    document.querySelector("#startBtn").style.cursor = "";
    document.querySelector("#startBtn").style.opacity = "1";
    document.querySelector("#time").textContent = "15";
    game = 0;
    document.querySelector("#final-score").textContent = "0";
    
});


