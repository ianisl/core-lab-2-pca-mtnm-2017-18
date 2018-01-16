// A class defining a force field based on a Perlin noise.

class PerlinField {
    constructor(fieldIntensity, fieldScale) {
        this.fieldIntensity = fieldIntensity;
        this.fieldScale = fieldScale;
    }
    getFieldValue(position) {
        // A method returning the field's value at a given position
        return noise(position.x / this.fieldScale, position.y / this.fieldScale) * this.fieldIntensity;
    }
}
