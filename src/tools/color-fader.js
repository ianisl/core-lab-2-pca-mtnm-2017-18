// A class defining a color fader. The choice of the color space is left to the user. This utility only performs an update of three components ('x', 'y', 'z') according to the specified increment values 'xStep', 'yStep' et 'zStep'.

class ColorFader {
    constructor(x, y, z, xStep, yStep, zStep) {
        this.x = x; // 'x' : 'red' or 'hue'
        this.y = y; // 'y' : 'green' or 'saturation'
        this.z = z; // 'x' : 'blue' or 'brightness'
        this.xStep = xStep;
        this.yStep = yStep;
        this.zStep = zStep;
        // Setting up of the automated call of the 'update' method at the beginning of every 'draw' loop of the sketch. The use of an arrow function allows fixing the 'this' keyword to its value in the constructor's context.
        p5.prototype.registerMethod('pre', () => this.update());
    }
    update() {
        // A method used to update the color's components
        this.x += this.xStep;
        this.y += this.yStep;
        this.z += this.zStep;
    }
}
