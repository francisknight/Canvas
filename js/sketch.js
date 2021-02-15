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

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// draw function 
function draw({ key }) {
    // start the path 
    ctx.beginPath();
    ctx.moveTo(x, y);

    // move to user position 
    x -= MOVE_AMOUNT;
    y -= MOVE_AMOUNT;
    ctx.lineTo(x, y);
    ctx.stroke();
    console.log(key);
}

// key handler function 
function handleKey(e) {
    if (e.key.includes(`Arrow`)) {
        e.preventDefault();
        draw({ key: e.key });
    }
}

// listen for window event (arrow keys)
window.addEventListener(`keydown`, handleKey);
