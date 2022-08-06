// self avoiding walker class
import { getRandomInt, ctx, canvas } from "./script.js";

class Walker {
    constructor(x, y, direction, color) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 1, 1);
        ctx.stroke();
        ctx.closePath();
    }

    move() {
        this.direction = getRandomInt(0, 3);
        switch (this.direction) {
            case 0:
                this.x++;
                break;
            case 1:
                this.x--;
                break;
            case 2:
                this.y++;
                break;
            case 3:
                this.y--;
                break;
            default:
                break;
        }
    }

    // check wall collision
    checkWallCollision() {
        if (
            this.x > canvas.width - 1 ||
            this.x < 0 ||
            this.y > canvas.height - 1 ||
            this.y < 0
        ) {
            return true;
        } else {
            return false;
        }
    }
}

export { Walker };
