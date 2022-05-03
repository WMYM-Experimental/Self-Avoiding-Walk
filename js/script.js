const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let SIZE = parseInt(canvas.width / 100) + 2;

let grid;
let oldX = 0;
let oldY = 0;
let x = 0;
let y = 0;

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeGrid = (cols, rows) => {
  let matrix = new Array(cols);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(rows).fill(false);
  }
  return matrix;
};

const draw = () => {
  let direction = getRandomInt(0, 4);
  oldX = x;
  oldY = y;
  switch (direction) {
    case 0:
      x += 5;
      break;
    case 1:
      x -= 5;
      break;
    case 2:
      y -= 5;
      break;
    case 3:
      y -= 5;
      break;
    default:
      break;
  }
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(oldX, oldY);
  ctx.lineTo(x, y);
  ctx.strokeStyle = "#000000";
  ctx.stroke();
};

const animate = () => {
  draw();
  requestAnimationFrame(animate);
};

grid = makeGrid(SIZE, SIZE);
console.log(grid);

animate();
