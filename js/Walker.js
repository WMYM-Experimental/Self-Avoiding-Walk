// self avoiding walker class
import {
    getRandomInt,
    ctx,
    canvas,
    posibilities,
    matrix,
    CELL_SIZE,
} from "./script.js";

class Walker {
    constructor(x, y, direction, color) {
        this.x = x;
        this.y = y;
        this.radius = CELL_SIZE / 4;
        this.direction = direction;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(
            this.x * CELL_SIZE - CELL_SIZE / 2,
            this.y * CELL_SIZE - CELL_SIZE / 2,
            this.radius,
            0,
            2 * Math.PI,
            false
        );
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    connect(oldX, oldY) {
        ctx.beginPath();
        ctx.moveTo(
            oldX * CELL_SIZE - CELL_SIZE / 2,
            oldY * CELL_SIZE - CELL_SIZE / 2
        );
        ctx.lineTo(
            this.x * CELL_SIZE - CELL_SIZE / 2,
            this.y * CELL_SIZE - CELL_SIZE / 2
        );
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.closePath();
    }

    // check wall collision
    checkWallCollision(x, y) {
        if (x > canvas.width - 1 || x < 0 || y > canvas.height - 1 || y < 0) {
            return true;
        } else {
            return false;
        }
    }

    walk() {
        let oldX = this.x;
        let oldY = this.y;

        let validPosibilities = [];
        posibilities.forEach((posibility) => {
            if (
                !this.checkWallCollision(
                    this.x + posibility.x,
                    this.y + posibility.y
                )
            ) {
                validPosibilities.push(posibility);
            }
        });
        if (validPosibilities.length === 0) {
            return;
        }
        let newDirection = getRandomInt(0, validPosibilities.length - 1);
        this.direction = newDirection;
        this.x += validPosibilities[newDirection].x;
        this.y += validPosibilities[newDirection].y;
        this.draw();
        this.connect(oldX, oldY);
    }
}

export { Walker };
