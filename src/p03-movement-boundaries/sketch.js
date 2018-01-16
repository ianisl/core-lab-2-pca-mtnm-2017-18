let x;
let y;

function setup() {
    createCanvas(540, 540);
    x = 0;
    y = height/2;
    background(255);
}

function draw() {
    // Position update
    x += 2;
    // Boundary conditions
    if (x > width) {
        x = 0;
    }
    // Drawing
    background(255);
    noStroke();
    fill(0);
    ellipse(x, y, 10, 10);
}
