import { Walker } from "./Walker"

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const allOptions = [
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
];

const makeMatrix = (cols, rows) => {
    let matrix = [];
    for (let i = 0; i < cols; i++) {
        matrix.push(new Array(rows).fill(0))
    }
    return matrix;
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const animate = () => {
    requestAnimationFrame(animate);
};

//animate();

export {ctx, canvas}