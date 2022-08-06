// self avoiding walker class
import { ctx, canvas } from "./script.js";

class Walker {
    constructor(x, y, direction, color) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.color = color;
    }

    move() {
        if (this.direction == 0) {
            this.x++;
        } else if (this.direction == 1) {
            this.x--;
        } else if (this.direction == 2) {
            this.y--;
        } else if (this.direction == 3) {
            this.y++;
        }
    }
}

export { Walker };
