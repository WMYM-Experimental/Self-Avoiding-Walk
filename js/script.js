const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let SIZE = 50;

let grid;
let oldX = SIZE;
let oldY = SIZE;
let x = oldX;
let y = oldY;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeGrid = () => {
  let coords = [];
  for (let i = 0; i < canvas.width; i += SIZE) {
    for (let j = 0; j < canvas.height; j += SIZE) {
      coords.push(new Point(i, j));
    }
  }
  return coords;
};

const animate = () => {
  let direction = getRandomInt(0, 4);
  oldX = x;
  oldY = y;
  switch (direction) {
    case 0:
      x += SIZE;
      break;
    case 1:
      x -= SIZE;
      break;
    case 2:
      y += SIZE;
      break;
    case 3:
      y -= SIZE;
      break;
    default:
      break;
  }

  grid[x][y] == true;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(oldX - SIZE / 2, oldY - SIZE / 2);
  ctx.lineTo(x - SIZE / 2, y - SIZE / 2);
  ctx.strokeStyle = "#000000";
  ctx.stroke();
  requestAnimationFrame(animate);
};

grid = makeGrid();
console.log(grid);

animate();
