const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const CELL_SIZE = 10;

canvas.width = CELL_SIZE * matrix[0].length;
canvas.height = CELL_SIZE * matrix.length;

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

const drawMatrix = (matrix, color) => {
    matrix.forEach((row, i) => {
        row.forEach((col, j) => {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.rect(j * 10, i * 10, 10, 10);
            ctx.stroke();
            ctx.closePath();
        });
    });
};

let matrix = makeMatrix(50, 50);

drawMatrix(matrix, "green");
