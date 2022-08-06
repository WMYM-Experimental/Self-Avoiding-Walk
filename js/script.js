import { Walker } from "./Walker.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const CELL_SIZE = 10;

canvas.width = 500;
canvas.height = 500;

let dim = {
    x: canvas.width / CELL_SIZE,
    y: canvas.height / CELL_SIZE,
};

const posibilities = [
    { x: 1, y: 0 }, // right
    { x: -1, y: 0 }, // left
    { x: 0, y: 1 }, // down
    { x: 0, y: -1 }, // up
];

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeMatrix = (rows, cols) => {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push(new Array(cols).fill(0));
    }
    return matrix;
};

const drawMatrix = (matrix, color, space) => {
    matrix.forEach((row, i) => {
        row.forEach((col, j) => {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.rect(i * space, j * space, space, space);
            ctx.stroke();
            ctx.closePath();
        });
    });
};

let matrix = makeMatrix(dim.x, dim.y);

console.log(matrix);

const walker = new Walker(1, 1, 0, "#fff");

const animate = () => {
    if (walker.checkWallCollision()) {
        return;
    }
    walker.walk();
    drawMatrix(matrix, "#fff", CELL_SIZE);
    requestAnimationFrame(animate);
};

animate();

export {
    posibilities,
    ctx,
    canvas,
    getRandomInt,
    makeMatrix,
    drawMatrix,
    matrix,
    animate,
    CELL_SIZE,
};
