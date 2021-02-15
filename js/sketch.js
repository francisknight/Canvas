// selecting elements on page
const canvas = document.querySelector(`#etch-a-sketch`);
const ctx = canvas.getContext(`2d`);
const shakeButton = document.querySelector(`.shake`);
const MOVE_AMOUNT = 12;

// setup canvas for drawing 
const width = canvas.width; // x
const height = canvas.height; // y

// create random x and y postion
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = MOVE_AMOUNT;

let hue = Math.floor(Math.random() * 360);

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// draw function 
function draw({ key }) {
    // change the hue value 
    hue += 2;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    // start the path 
    ctx.beginPath();
    ctx.moveTo(x, y);

    // move to user (key) position 
    switch (key) {
        case `ArrowUp`:
            y -= MOVE_AMOUNT;
            break;
        case `ArrowRight`:
            x += MOVE_AMOUNT;
            break;
        case `ArrowDown`:
            y += MOVE_AMOUNT;
            break;
        case `ArrowLeft`:
            x -= MOVE_AMOUNT;
            break;

        default:
            break;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
}

// key handler function 
function handleKey(e) {
    if (e.key.includes(`Arrow`)) {
        e.preventDefault();
        draw({ key: e.key });
    }
}

// clear the canvas 
function clearCanvas() {
    canvas.classList.add(`shake`);
    canvas.addEventListener(`animationend`, function() {
        canvas.classList.remove(`shake`);
    })
}

// listen for window event (arrow keys)
window.addEventListener(`keydown`, handleKey);
clearCanvas();
