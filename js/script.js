import { Drawer } from "./Drawer.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

let SIZE = 50;

let grid;
let visited = [];
let oldX = 0;
let oldY = 0;

const drawer = new Drawer(oldX, oldY);

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeGrid = () => {
  let coords = [];
  for (let i = 0; i < canvas.width; i += SIZE) {
    for (let j = 0; j < canvas.height; j += SIZE) {
      coords.push({ x: i, y: j });
    }
  }
  return coords;
};

const animate = () => {
  oldX = drawer.x;
  oldY = drawer.y;
  visited.push({ x: oldX, y: oldY });
  drawer.setDirection();
  drawer.draw(oldX, oldY);
  requestAnimationFrame(animate);
};

grid = makeGrid();

animate();
console.log(visited);
export { getRandomInt, SIZE, ctx };
