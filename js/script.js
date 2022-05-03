const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

let size = 500 / 100;

let grid;

const makeGrid = (cols, rows) => {
  let matrix = new Array(cols);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(rows).fill(false);
  }
  return matrix;
};

grid = makeGrid(size, size);
console.log(grid);
