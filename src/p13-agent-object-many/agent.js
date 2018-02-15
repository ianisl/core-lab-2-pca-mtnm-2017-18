// A class defining an agent. Initialization options are voluntarily kept at a bare minimum: the constructor only takes one optional argument, allowing for the specification of the agent's position.

// This choice is motivated by the fact that it is very easy to 'manually' customize, as needed, the agent object's properties after its creation.

class Agent {
    constructor(position) {
        this.position = position !== undefined ? position : createVector(random(width), random(height)); // If no position has been passed to the constructor, init with a random position
        this.previousPosition = this.position.copy();
        this.angle = random(TWO_PI);
        this.stepSize = 1;
        this.isPositionResetWhenOutside = true;
    }
    updatePosition() {
        // A method updating the agent's position according to its current angle
        this.previousPosition = this.position.copy();
        this.position.x += cos(this.angle) * this.stepSize;
        this.position.y += sin(this.angle) * this.stepSize;
        if (this.isPositionResetWhenOutside && this.isOutsideSketch() > 0) {
            this.position = createVector(random(width), random(height));
            this.previousPosition = this.position.copy();
        }
    }
    isOutsideSketch() {
        // A method allowing to check if the agent went out of the sketch's space. The method returns the following values:
        // 0: the agent is not outside the sketch's space
        // 1: the agent went out by the top border
        // 2: the agent went out by the right border
        // 3: the agent went out by the bottom border
        // 4: the agent went out by the left border
        if (this.position.y < 0) {
            return 1;
        } else if (this.position.x > width) {
            return 2;
        } else if (this.position.y > height) {
            return 3;
        } else if (this.position.x < 0) {
            return 4;
        } else {
            return 0;
        }
    }
}
