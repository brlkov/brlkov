let cvs = document.getElementsByClassName("canvas");
let ctx = cvs[0].getContext("2d");

let count = 0;

let bg = new Image()
let bird = new Image()
let pipeUp = new Image()
let pipeBottom = new Image()

bg.src = "../images/grey.png"
bird.src = "../images/m-bird.png";
pipeUp.src = "../images/pipe-up.png";
pipeBottom.src = "../images/pipe-bottom.png";

let gap = 150;
let gravitation = 1
document.addEventListener("keydown", moveUp);
document.addEventListener("click", moveUp)
function moveUp(){
    yBird -= 30;
}
let xBird = 10;
let yBird = 150;


let pipe = [];
pipe[0] = {
    x: 350,
    y: -80
}

function draw() {
    ctx.drawImage(bg, 0, 0);

    for (let i=0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;

        if(pipe[i].x === 120){
            pipe.push({x: 350, y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height})
        }

        if(pipe[i].x === -30){
            count++;
            document.querySelector("#counter").innerText = count;
        }

        if ((xBird + bird.width >= pipe[i].x)
            && (xBird <= pipe[i].x + pipeUp.width)
            && (yBird <= pipe[i].y + pipeUp.height || yBird + bird.height >= pipe[i].y + pipeUp.height + gap)) {
            xBird = - 100;
            yBird = - 100;
            document.querySelector("#counter").innerText = "Game over";
            setTimeout(() => {location.reload();}, 1500);
        }
    }

    ctx.drawImage(bird, xBird, yBird);

    yBird += gravitation;
    requestAnimationFrame(draw);
}

pipeBottom.onload = draw;