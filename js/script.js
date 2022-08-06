import { Walker } from "./Walker.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const CELL_SIZE = 50;

canvas.width = 500;
canvas.height = 500;

let dim = {
    x: canvas.width / CELL_SIZE,
    y: canvas.height / CELL_SIZE,
};

const allOptions = [
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
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
            if (matrix[i][j] === 1) {
                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.fillStyle = color;
                ctx.fillRect(i * space, j * space, space, space);
                ctx.stroke();
                ctx.closePath();
            } else {
                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.rect(i * space, j * space, space, space);
                ctx.stroke();
                ctx.closePath();
            }
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    matrix[walker.x][walker.y] = 1;
    walker.move();
    drawMatrix(matrix, "#fff", CELL_SIZE);
    requestAnimationFrame(animate);
};

animate();

export { ctx, canvas, getRandomInt, makeMatrix, drawMatrix, matrix, animate };
