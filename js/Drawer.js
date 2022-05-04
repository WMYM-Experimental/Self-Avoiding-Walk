import { getRandomInt, SIZE, ctx } from "./script.js";
class Drawer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  setDirection() {
    let direction = getRandomInt(0, 4);
    switch (direction) {
      case 0:
        this.x += 1 * SIZE;
        break;
      case 1:
        this.x -= 1 * SIZE;
        break;
      case 2:
        this.y += 1 * SIZE;
        break;
      case 3:
        this.y -= 1 * SIZE;
        break;
      default:
        break;
    }
    this.#checkLimits();
  }
  #checkLimits() {
    if (this.x > canvas.width) {
      this.x = -this.x;
    }
    if (this.x < 0) {
      this.x = SIZE;
    }
    if (this.y > canvas.height) {
      this.y = -this.y;
    }
    if (this.y < 0) {
      this.y = SIZE;
    }
  }
  draw(oldX, oldY) {
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(oldX - SIZE / 2, oldY - SIZE / 2);
    ctx.lineTo(this.x - SIZE / 2, this.y - SIZE / 2);
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.x - SIZE / 2, this.y - SIZE / 2, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#e5e5e5";
    ctx.fill();
  }
}

export { Drawer };
