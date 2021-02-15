// selecting elements on page
const canvas = document.querySelector(`#etch-a-sketch`);
const ctx = canvas.getContext(`2d`);
const shakeButton = document.querySelector(`.shake`);

// setup canvas for drawing 
const width = canvas.width;
const height = canvas.height;

ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = `10`;

ctx.beginPath(); // start the drawing
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();

// create random x and y postion
