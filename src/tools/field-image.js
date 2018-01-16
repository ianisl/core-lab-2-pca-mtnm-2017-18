// A class defining a force field based on the brightness values of an image's pixels.

class ImageField {
    constructor(fieldIntensity, image) {
        this.fieldIntensity = fieldIntensity;
        this.image = image;
    }
    getFieldValue(position) {
        // A method returning the field's value at a given position
        let c = this.image.get(floor(position.x/width * this.image.width), floor(position.y/height * this.image.height)); // Retrieval of the image's color at a given position. The image is automatically adjusted to the canvas size.
        return brightness(c) * this.fieldIntensity;
    };
    applyBlur(level) {
        // A method allowing to apply a blur filter to the image
        this.image.filter(BLUR, level);
    }
}
