// selecting elements on page
const canvas = document.querySelector(`#etch-a-sketch`);
const ctx = canvas.getContext(`2d`);
const shakeButton = document.querySelector(`.shake`);

// setup canvas for drawing 
const width = canvas.width; // x
const height = canvas.height; // y

// create random x and y postion
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = `12`;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// draw function 
function draw({ key }) {
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
