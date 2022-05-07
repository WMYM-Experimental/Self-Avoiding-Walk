import { Walker } from "./Walker.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

let SIZE = 50;

let matrix;

let oldX = 0;
let oldY = 0;

const COLS = parseInt(canvas.width / SIZE);
const ROWS = parseInt(canvas.height / SIZE);

const drawer = new Walker(oldX, oldY);

const allOptions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeMatrix = (cols, rows) => {
  let matrix = new Array(cols);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(rows);
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      matrix[i][j] = false;
    }
  }
  return matrix;
};

const isValid = (i, j) => {
  if (i < 0 || i >= COLS || j < 0 || j >= ROWS) {
    return false;
  }
  return !matrix[i][j];
};

matrix = makeMatrix(COLS, ROWS);
let options = [];
console.log(matrix);
const animate = () => {
  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      ctx.beginPath();
      ctx.strokeStyle = "#000000";
      ctx.rect(i * SIZE, j * SIZE, SIZE, SIZE);
      ctx.stroke();
      ctx.closePath();
    }
  }
  let selector = getRandomInt(0, 3);
  drawer.oldX = drawer.x;
  drawer.oldY = drawer.y;
  drawer.setDirection();
  drawer.draw();
  requestAnimationFrame(animate);
};

animate();

export { getRandomInt, SIZE, ctx, matrix, canvas };
