function setup() {
    createCanvas(540, 540); // Definition of the drawing zone's dimensions
}

function draw() {
    fill('#6ee2e2'); // Fill color (hex notation)
    stroke(234, 163, 80); // Stroke color (RGB notation, range 0-255)
    strokeWeight(4);
    ellipse(width/2, height/2, 200, 200);
}
