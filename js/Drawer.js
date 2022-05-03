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
        this.x += SIZE;
        break;
      case 1:
        this.x -= SIZE;
        break;
      case 2:
        this.y += SIZE;
        break;
      case 3:
        this.y -= SIZE;
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
      this.x = -this.x;
    }
    if (this.y > canvas.width) {
      this.y = -this.y;
    }
    if (this.y < 0) {
      this.y = -this.y;
    }
  }
  draw(oldX, oldY) {
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(oldX - SIZE / 2, oldY - SIZE / 2);
    ctx.lineTo(this.x - SIZE / 2, this.y - SIZE / 2);
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
  }
}

export { Drawer };
