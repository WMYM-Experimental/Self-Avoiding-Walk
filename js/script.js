const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

let grid = makeMatrix(COLS, ROWS);

class Walker {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.oldX = 0;
        this.oldY = 0;
        this.direction = 0;
        this.radius = 5;
    }
    setDirection() {}
    checkLimits() {}
    draw() {
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.oldX * SIZE - SIZE / 2, this.oldY * SIZE - SIZE / 2);
        ctx.lineTo(this.x * SIZE - SIZE / 2, this.y * SIZE - SIZE / 2);
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();
        ctx.closePath();
    }
}

let SIZE = 50;

let matrix;

let oldX = 0;
let oldY = 0;

const COLS = parseInt(canvas.width / SIZE);
const ROWS = parseInt(canvas.height / SIZE);

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
    return matrix;
};

const animate = () => {
    requestAnimationFrame(animate);
};

animate();
