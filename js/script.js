const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let TILE_SIZE = 100;

const makeGrid = () => {
  let coords = [];
  for (let i = 0; i < canvas.width; i += TILE_SIZE) {
    for (let j = 0; j < canvas.height; j += TILE_SIZE) {
      coords.push(new Point(i, j));
      ctx.beginPath();
      ctx.rect(i, j, TILE_SIZE, TILE_SIZE);
      ctx.stroke();
      ctx.closePath();
    }
  }
  return coords;
};
