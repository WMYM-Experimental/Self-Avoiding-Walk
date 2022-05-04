import { Drawer } from "./Drawer.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

let SIZE = 50;

let grid;

let oldX = 0;
let oldY = 0;

const COLS = canvas.width / SIZE;
const ROWS = canvas.height / SIZE;

const drawer = new Drawer(oldX, oldY);

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeMatrix = (cols, rows) => {
  let matrix = new Array(cols);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(rows);
  }
  return matrix;
};

grid = makeMatrix();
const animate = () => {
  oldX = drawer.x;
  oldY = drawer.y;
  drawer.setDirection();
  drawer.draw(oldX, oldY);
  requestAnimationFrame(animate);
};

animate();
export { getRandomInt, SIZE, ctx };
