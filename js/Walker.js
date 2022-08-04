import { ctx, canvas} from "./script.js"

class Walker {
    constructor(x, y, direction, color) {
        this.x = 0;
        this.y = 0;

        this.oldX = this.x;
        this.oldY = this.y;

        this.direction = 0;

        this.color = color
        this.radius = 5;
    }

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

export { Walker }