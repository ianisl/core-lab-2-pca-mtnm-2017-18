function setup() {
    createCanvas(540, 540);
    background(255); // Good practice: clear the background a first time in the 'setup'
}

function draw() {
    background(255); // Background clearing
    fill('#6ee2e2');
    stroke(234, 163, 80);
    strokeWeight(4);
    ellipse(width/2, height/2, 200, 200);
}
