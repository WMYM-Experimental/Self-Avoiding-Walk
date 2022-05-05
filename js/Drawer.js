import { getRandomInt, SIZE, ctx, matrix } from "./script.js";
class Drawer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  setDirection() {
    let direction = getRandomInt(0, 4);
    switch (direction) {
      case 0:
        this.x += 1;
        break;
      case 1:
        this.x -= 1;
        break;
      case 2:
        this.y += 1;
        break;
      case 3:
        this.y -= 1;
        break;
      default:
        break;
    }
    this.#checkLimits();
  }
  #checkLimits() {
    if (this.x > canvas.width || this.x > matrix.length) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y > canvas.height || this.y > matrix.length) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = 0;
    }
  }
  draw(oldX, oldY) {
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(oldX * SIZE - SIZE / 2, oldY * SIZE - SIZE / 2);
    ctx.lineTo(this.x * SIZE - SIZE / 2, this.y * SIZE - SIZE / 2);
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
    ctx.closePath();
  }
}

export { Drawer };
